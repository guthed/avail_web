#!/usr/bin/env node
/**
 * setup-storyblok-v2.mjs
 * Uppgraderar Storyblok till dynamisk block-baserad rendering.
 *
 * 1. Skapar sektionsblock-komponenter (nestable)
 * 2. Uppdaterar sid-komponenter till body: bloks
 * 3. Migrerar befintligt innehåll till body-array
 *
 * Kör med: node scripts/setup-storyblok-v2.mjs
 */

import crypto from "crypto";

const SPACE_ID = "290872741999948";
const TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;
const BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

if (!TOKEN) {
  console.error("STORYBLOK_MANAGEMENT_TOKEN saknas. Exportera variabeln:");
  console.error(
    "  export STORYBLOK_MANAGEMENT_TOKEN=<din-token>"
  );
  process.exit(1);
}

const uid = () => crypto.randomUUID();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { Authorization: TOKEN, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) {
    if (res.status === 429) {
      throw new Error(`429: Rate limited`);
    }
    throw new Error(`${res.status}: ${text}`);
  }
  return text ? JSON.parse(text) : {};
}

// ═══════════════════════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════════════════════

const existingComponentIds = {};

async function loadExistingComponents() {
  console.log("Hämtar befintliga komponenter...");
  const data = await api("GET", "/components?per_page=100");
  for (const c of data.components) {
    existingComponentIds[c.name] = c.id;
  }
  console.log(`  Hittade ${Object.keys(existingComponentIds).length} komponenter\n`);
}

async function upsertComponent(name, schema, isRoot = false) {
  process.stdout.write(`  ${name}... `);
  const payload = {
    component: { name, schema, is_root: isRoot, is_nestable: !isRoot },
  };

  try {
    if (existingComponentIds[name]) {
      await api("PUT", `/components/${existingComponentIds[name]}`, payload);
      console.log(`✓ uppdaterad`);
    } else {
      const data = await api("POST", "/components", payload);
      existingComponentIds[name] = data.component.id;
      console.log(`✓ skapad (id: ${data.component.id})`);
    }
  } catch (e) {
    if (e.message.includes("already been taken")) {
      console.log("~ finns redan");
    } else if (e.message.startsWith("429")) {
      console.log("rate-limit, väntar 3s...");
      await sleep(3000);
      return upsertComponent(name, schema, isRoot);
    } else {
      console.log(`✗ ${e.message}`);
      throw e;
    }
  }
  await sleep(300);
}

async function updateStoryWithRetry(id, content) {
  try {
    await api("PUT", `/stories/${id}`, { story: { content }, publish: 1 });
    console.log(`  ✓ story ${id} migrerad`);
    await sleep(400);
  } catch (e) {
    if (e.message.startsWith("429")) {
      console.log(`  rate-limit på story ${id}, väntar 3s...`);
      await sleep(3000);
      return updateStoryWithRetry(id, content);
    }
    throw e;
  }
}

// All section component names for the body whitelist
const SECTION_TYPES = [
  "hero_section",
  "cta_section",
  "stats_section",
  "security_blurb_section",
  "social_proof_section",
  "text_section",
  "grid_section",
  "service_groups_section",
  "process_steps_section",
  "faq_section",
  "tempo_section",
  "cases_section",
  "contact_section",
];

// ═══════════════════════════════════════════════════════════════════════════
// 0. Ladda befintliga komponenter
// ═══════════════════════════════════════════════════════════════════════════

await loadExistingComponents();

// ═══════════════════════════════════════════════════════════════════════════
// 1. Nestade block-komponenter (behåll befintliga + uppdatera)
// ═══════════════════════════════════════════════════════════════════════════

console.log("── Nestade block-komponenter ──");

await upsertComponent("service_card", {
  titel: { type: "text", pos: 0 },
  teknisk_term: { type: "text", pos: 1 },
  grupp: { type: "text", pos: 2 },
  problem: { type: "textarea", pos: 3 },
  losning: { type: "textarea", pos: 4 },
  output: { type: "text", pos: 5 },
  exempel_1: { type: "text", pos: 6 },
  exempel_2: { type: "text", pos: 7 },
});

await upsertComponent("service_group", {
  group_name: { type: "text", pos: 0 },
  intro: { type: "textarea", pos: 1 },
  services: {
    type: "bloks",
    pos: 2,
    restrict_components: true,
    component_whitelist: ["service_card"],
  },
});

await upsertComponent("case_item", {
  rubrik: { type: "text", pos: 0 },
  kategori: { type: "text", pos: 1 },
  resultat: { type: "textarea", pos: 2 },
  slug: { type: "text", pos: 3 },
});

await upsertComponent("process_step", {
  nummer: { type: "text", pos: 0 },
  titel: { type: "text", pos: 1 },
  beskrivning: { type: "textarea", pos: 2 },
});

await upsertComponent("principle_item", {
  titel: { type: "text", pos: 0 },
  text: { type: "textarea", pos: 1 },
});

await upsertComponent("team_member_block", {
  namn: { type: "text", pos: 0 },
  roll: { type: "text", pos: 1 },
  bio: { type: "textarea", pos: 2 },
});

await upsertComponent("faq_item", {
  fraga: { type: "text", pos: 0 },
  svar: { type: "textarea", pos: 1 },
});

await upsertComponent("stat_item", {
  value: { type: "text", pos: 0 },
  label: { type: "text", pos: 1 },
});

// ═══════════════════════════════════════════════════════════════════════════
// 2. Sektionsblock-komponenter (nestable)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n── Sektionsblock-komponenter ──");

await upsertComponent("hero_section", {
  label: { type: "text", pos: 0 },
  heading: { type: "text", pos: 1 },
  heading_italic: { type: "text", pos: 2 },
  subtext: { type: "textarea", pos: 3 },
  cta_primary_text: { type: "text", pos: 4 },
  cta_primary_link: { type: "text", pos: 5 },
  cta_secondary_text: { type: "text", pos: 6 },
  cta_secondary_link: { type: "text", pos: 7 },
  background_image: { type: "asset", pos: 8, filetypes: ["images"] },
  full_height: { type: "boolean", pos: 9, default_value: false },
});

await upsertComponent("cta_section", {
  heading: { type: "text", pos: 0 },
  text: { type: "textarea", pos: 1 },
  button_text: { type: "text", pos: 2 },
  button_link: { type: "text", pos: 3 },
});

await upsertComponent("stats_section", {
  stats: {
    type: "bloks",
    pos: 0,
    restrict_components: true,
    component_whitelist: ["stat_item"],
  },
});

await upsertComponent("security_blurb_section", {
  label: { type: "text", pos: 0 },
  heading: { type: "text", pos: 1 },
  heading_italic: { type: "text", pos: 2 },
  text: { type: "textarea", pos: 3 },
  link_text: { type: "text", pos: 4 },
  link_url: { type: "text", pos: 5 },
});

await upsertComponent("social_proof_section", {
  label: { type: "text", pos: 0 },
  customers: { type: "textarea", pos: 1 },
});

await upsertComponent("text_section", {
  text: { type: "textarea", pos: 0 },
});

await upsertComponent("grid_section", {
  label: { type: "text", pos: 0 },
  heading: { type: "text", pos: 1 },
  items: {
    type: "bloks",
    pos: 2,
    restrict_components: true,
    component_whitelist: ["principle_item"],
  },
  columns: {
    type: "option",
    pos: 3,
    options: [
      { name: "2", value: "2" },
      { name: "3", value: "3" },
    ],
    default_value: "2",
  },
});

await upsertComponent("service_groups_section", {
  label: { type: "text", pos: 0 },
  heading: { type: "text", pos: 1 },
  service_groups: {
    type: "bloks",
    pos: 2,
    restrict_components: true,
    component_whitelist: ["service_group"],
  },
  variant: {
    type: "option",
    pos: 3,
    options: [
      { name: "Kompakt", value: "compact" },
      { name: "Detaljerad", value: "detailed" },
    ],
    default_value: "compact",
  },
});

await upsertComponent("process_steps_section", {
  heading: { type: "text", pos: 0 },
  steps: {
    type: "bloks",
    pos: 1,
    restrict_components: true,
    component_whitelist: ["process_step"],
  },
});

await upsertComponent("faq_section", {
  heading: { type: "text", pos: 0 },
  faqs: {
    type: "bloks",
    pos: 1,
    restrict_components: true,
    component_whitelist: ["faq_item"],
  },
});

await upsertComponent("tempo_section", {
  number: { type: "text", pos: 0 },
  text: { type: "textarea", pos: 1 },
});

await upsertComponent("cases_section", {
  cases: {
    type: "bloks",
    pos: 0,
    restrict_components: true,
    component_whitelist: ["case_item"],
  },
});

await upsertComponent("contact_section", {
  email: { type: "text", pos: 0 },
  location: { type: "text", pos: 1 },
  location_sub: { type: "text", pos: 2 },
  response_time: { type: "text", pos: 3 },
  cta_box_heading: { type: "text", pos: 4 },
  cta_box_text: { type: "textarea", pos: 5 },
});

// ═══════════════════════════════════════════════════════════════════════════
// 3. Uppdatera sid-komponenter till body: bloks
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n── Sid-komponenter (body: bloks) ──");

const pageBodySchema = {
  body: {
    type: "bloks",
    pos: 0,
    restrict_components: true,
    component_whitelist: SECTION_TYPES,
  },
};

for (const pageName of [
  "page_home",
  "page_tjanster",
  "page_case",
  "page_hur_vi_jobbar",
  "page_sakerhet",
  "page_om_avail",
  "page_kontakt",
]) {
  await upsertComponent(pageName, pageBodySchema, true);
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. Hämta stories
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n── Hämtar stories (med content) ──");
const storiesListRes = await api("GET", "/stories?per_page=100");
const storyMap = {};
for (const s of storiesListRes.stories) {
  // Hämta varje story individuellt för att få content
  try {
    const full = await api("GET", `/stories/${s.id}`);
    storyMap[s.slug] = { id: s.id, content: full.story.content ?? {} };
    console.log(`  ${s.slug} → ${s.id} (content: ${Object.keys(full.story.content ?? {}).length} fält)`);
    await sleep(300);
  } catch (e) {
    if (e.message.startsWith("429")) {
      console.log(`  rate-limit, väntar 3s...`);
      await sleep(3000);
      const full = await api("GET", `/stories/${s.id}`);
      storyMap[s.slug] = { id: s.id, content: full.story.content ?? {} };
      console.log(`  ${s.slug} → ${s.id} (content: ${Object.keys(full.story.content ?? {}).length} fält)`);
      await sleep(300);
    } else {
      throw e;
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 5. Migrera stories till body-array
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n── Migrerar stories till body-block ──");

// Helper: extract existing nested blocks or use fallback
function getBloks(content, field) {
  return content[field] ?? [];
}

// ── HOME ──────────────────────────────────────────────────────────────────
if (storyMap["home"]) {
  const old = storyMap["home"].content;
  await updateStoryWithRetry(storyMap["home"].id, {
    component: "page_home",
    body: [
      {
        _uid: uid(),
        component: "hero_section",
        heading: old.hero_heading ?? "",
        subtext: old.hero_subtext ?? "",
        cta_primary_text: old.hero_cta_primary ?? "",
        cta_primary_link: "/kontakt",
        cta_secondary_text: old.hero_cta_secondary ?? "",
        cta_secondary_link: "/tjanster",
        full_height: true,
      },
      {
        _uid: uid(),
        component: "service_groups_section",
        label: "Vad vi gör",
        heading: old.services_heading ?? "",
        service_groups: getBloks(old, "service_groups"),
        variant: "compact",
      },
      {
        _uid: uid(),
        component: "stats_section",
        stats: getBloks(old, "stats"),
      },
      {
        _uid: uid(),
        component: "security_blurb_section",
        label: "Säkerhet",
        heading: old.security_heading ?? "",
        heading_italic: old.security_italic ?? "",
        text: old.security_text ?? "",
        link_text: "Läs mer om säkerhet →",
        link_url: "/sakerhet",
      },
      {
        _uid: uid(),
        component: "social_proof_section",
        label: "Uppdragsgivare",
        customers: old.customers ?? "",
      },
      {
        _uid: uid(),
        component: "cta_section",
        heading: old.cta_heading ?? "",
        button_text: "Starta ett projekt",
        button_link: "/kontakt",
      },
    ],
  });
}

// ── TJÄNSTER ──────────────────────────────────────────────────────────────
if (storyMap["tjanster"]) {
  const old = storyMap["tjanster"].content;
  await updateStoryWithRetry(storyMap["tjanster"].id, {
    component: "page_tjanster",
    body: [
      {
        _uid: uid(),
        component: "hero_section",
        label: "Tjänster",
        heading: old.heading ?? "",
        heading_italic: old.heading_italic ?? "",
        subtext: old.subheading ?? "",
      },
      {
        _uid: uid(),
        component: "service_groups_section",
        service_groups: getBloks(old, "service_groups"),
        variant: "detailed",
      },
      {
        _uid: uid(),
        component: "cta_section",
        heading: old.cta_heading ?? "",
        text: old.cta_text ?? "",
        button_text: "Boka ett samtal",
        button_link: "/kontakt",
      },
    ],
  });
}

// ── CASE ──────────────────────────────────────────────────────────────────
if (storyMap["case"]) {
  const old = storyMap["case"].content;
  await updateStoryWithRetry(storyMap["case"].id, {
    component: "page_case",
    body: [
      {
        _uid: uid(),
        component: "hero_section",
        label: "Case",
        heading: old.heading ?? "",
        heading_italic: old.heading_italic ?? "",
        subtext: old.subheading ?? "",
      },
      {
        _uid: uid(),
        component: "cases_section",
        cases: getBloks(old, "cases"),
      },
      {
        _uid: uid(),
        component: "social_proof_section",
        label: "Tidigare uppdragsgivare",
        customers: old.previous_clients ?? "",
      },
      {
        _uid: uid(),
        component: "cta_section",
        heading: old.cta_heading ?? "",
        button_text: "Starta ett projekt",
        button_link: "/kontakt",
      },
    ],
  });
}

// ── HUR VI JOBBAR ─────────────────────────────────────────────────────────
if (storyMap["hur-vi-jobbar"]) {
  const old = storyMap["hur-vi-jobbar"].content;
  await updateStoryWithRetry(storyMap["hur-vi-jobbar"].id, {
    component: "page_hur_vi_jobbar",
    body: [
      {
        _uid: uid(),
        component: "hero_section",
        label: "Process",
        heading: old.heading ?? "",
        heading_italic: old.heading_italic ?? "",
        subtext: old.subheading ?? "",
      },
      {
        _uid: uid(),
        component: "process_steps_section",
        steps: getBloks(old, "steps"),
      },
      {
        _uid: uid(),
        component: "grid_section",
        heading: old.principles_heading ?? "",
        items: getBloks(old, "principles"),
      },
      {
        _uid: uid(),
        component: "tempo_section",
        number: old.tempo_number ?? "",
        text: old.tempo_text ?? "",
      },
      {
        _uid: uid(),
        component: "cta_section",
        heading: old.cta_heading ?? "",
        button_text: "Kontakta oss",
        button_link: "/kontakt",
      },
    ],
  });
}

// ── SÄKERHET ──────────────────────────────────────────────────────────────
if (storyMap["sakerhet"]) {
  const old = storyMap["sakerhet"].content;
  await updateStoryWithRetry(storyMap["sakerhet"].id, {
    component: "page_sakerhet",
    body: [
      {
        _uid: uid(),
        component: "hero_section",
        label: "Säkerhet",
        heading: old.heading ?? "",
        heading_italic: old.heading_italic ?? "",
        subtext: old.subheading ?? "",
      },
      {
        _uid: uid(),
        component: "grid_section",
        items: getBloks(old, "principles"),
      },
      {
        _uid: uid(),
        component: "faq_section",
        heading: old.faq_heading ?? "",
        faqs: getBloks(old, "faqs"),
      },
      {
        _uid: uid(),
        component: "cta_section",
        heading: old.contact_heading ?? "",
        text: old.contact_text ?? "",
        button_text: "Prata med oss",
        button_link: "/kontakt",
      },
    ],
  });
}

// ── OM AVAIL ──────────────────────────────────────────────────────────────
if (storyMap["om-avail"]) {
  const old = storyMap["om-avail"].content;

  // Combine body paragraphs into single textarea
  const bodyText = [old.body_p1, old.body_p2, old.body_p3]
    .filter(Boolean)
    .join("\n\n");

  await updateStoryWithRetry(storyMap["om-avail"].id, {
    component: "page_om_avail",
    body: [
      {
        _uid: uid(),
        component: "hero_section",
        label: "Om Avail",
        heading: old.heading ?? "",
        heading_italic: old.heading_italic ?? "",
        subtext: old.subheading ?? "",
      },
      {
        _uid: uid(),
        component: "text_section",
        text: bodyText,
      },
      {
        _uid: uid(),
        component: "grid_section",
        heading: old.values_heading ?? "",
        items: getBloks(old, "values"),
      },
      {
        _uid: uid(),
        component: "cta_section",
        heading: old.cta_heading ?? "",
        button_text: "Ta kontakt",
        button_link: "/kontakt",
      },
    ],
  });
}

// ── KONTAKT ───────────────────────────────────────────────────────────────
if (storyMap["kontakt"]) {
  const old = storyMap["kontakt"].content;
  await updateStoryWithRetry(storyMap["kontakt"].id, {
    component: "page_kontakt",
    body: [
      {
        _uid: uid(),
        component: "hero_section",
        label: "Kontakt",
        heading: old.heading ?? "",
        heading_italic: old.heading_italic ?? "",
        subtext: old.subheading ?? "",
      },
      {
        _uid: uid(),
        component: "contact_section",
        email: old.email ?? "",
        location: old.location ?? "",
        location_sub: old.location_sub ?? "",
        response_time: old.response_time ?? "",
        cta_box_heading: old.cta_box_heading ?? "",
        cta_box_text: old.cta_box_text ?? "",
      },
    ],
  });
}

console.log("\n✅ Migration klar! Alla sidor använder nu body-block.");
console.log("   Kör 'npm run build' för att verifiera att allt fungerar.");
