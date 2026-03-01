import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center section-padding container-x">
      <div className="max-w-7xl mx-auto w-full">
        <p
          className="font-serif mb-6"
          style={{
            color: "#B8A9E8",
            fontSize: "clamp(6rem, 15vw, 14rem)",
            fontStyle: "italic",
            lineHeight: 1,
            opacity: 0.4,
          }}
        >
          404
        </p>
        <h1
          className="font-serif mb-4"
          style={{
            color: "#F5F4F0",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            lineHeight: 1.2,
          }}
        >
          Sidan finns inte.
        </h1>
        <p
          className="font-sans text-base leading-relaxed mb-10 max-w-md"
          style={{ color: "#888883" }}
        >
          Det du letar efter verkar inte finnas här. Kanske har adressen ändrats, eller så kom du hit av misstag.
        </p>
        <Link
          href="/"
          className="font-sans text-sm font-medium px-6 py-3 rounded inline-block transition-colors"
          style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </section>
  );
}
