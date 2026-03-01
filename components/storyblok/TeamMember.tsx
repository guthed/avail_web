interface TeamMemberProps {
  blok?: {
    namn?: string;
    roll?: string;
    bio?: string;
  };
  namn?: string;
  roll?: string;
  bio?: string;
}

export default function TeamMember({ blok, namn, roll, bio }: TeamMemberProps) {
  const name = blok?.namn ?? namn;
  const role = blok?.roll ?? roll;
  const biography = blok?.bio ?? bio;

  return (
    <div
      className="border rounded-lg p-8"
      style={{ backgroundColor: "#161616", borderColor: "rgba(224,223,219,0.15)" }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{ backgroundColor: "rgba(184,169,232,0.2)" }}
      >
        <span className="font-serif text-2xl" style={{ color: "#B8A9E8" }}>
          {name?.[0]}
        </span>
      </div>
      <h3 className="font-serif text-xl mb-1" style={{ color: "#F5F4F0" }}>
        {name}
      </h3>
      <p className="font-sans text-sm mb-4" style={{ color: "#888883" }}>
        {role}
      </p>
      <p
        className="font-sans text-sm leading-relaxed"
        style={{ color: "rgba(245,244,240,0.6)" }}
      >
        {biography}
      </p>
    </div>
  );
}
