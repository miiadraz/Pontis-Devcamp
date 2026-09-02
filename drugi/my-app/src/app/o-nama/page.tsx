export default function AboutUs() {
  const skills = [
    { id: 1, label: "JavaScript" },
    { id: 2, label: "React" },
    { id: 3, label: "Next.js" },
  ];

  return (
    <main>
      <h1>O nama</h1>
      <p>
        Pontis Technology DevCamp je šestotjedni program za obuku u razvoju web
        aplikacija.
      </p>
      <h2>Naše vještine</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.label}</li>
        ))}
      </ul>
    </main>
  );
}
