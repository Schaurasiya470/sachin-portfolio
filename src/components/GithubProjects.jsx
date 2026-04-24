import { useEffect, useState } from "react";

export default function GithubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Schaurasiya470/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 4)));
  }, []);

  return (
    <section className="px-10 py-24">
      <h2 className="text-4xl font-bold mb-10">Live Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="glass p-6 glow">
            <h3 className="font-semibold">{repo.name}</h3>
            <p className="text-gray-400 text-sm mt-2">
              {repo.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}