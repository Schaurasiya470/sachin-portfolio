export default function Skills() {
  const skills = [
    "React", "PHP (Yii2)", "GraphQL", "Node.js",
    "MongoDB", "MySQL", "Tailwind", "Git"
  ];

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <div key={i} className="glass px-4 py-2 text-sm">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}