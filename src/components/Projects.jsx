import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "AI Agents Workforce",
    category: "Enterprise Platform",
    desc: "Multi-tenant SaaS system for managing AI agents at scale.",
    image: "/project1.png",
    tags: ["AI", "SaaS"],
    demo: "#",
    github: "#",
  },
  {
    title: "AI Knowledge Studio",
    category: "Analytics Platform",
    desc: "Query large datasets using natural language.",
    image: "/project2.png",
    tags: ["AI", "Analytics"],
  },
  {
    title: "LLM Bench Marker",
    category: "AI Tool",
    desc: "Benchmark LLM performance across datasets.",
    image: "/project3.png",
    tags: ["Python", "AI"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="px-6 py-28 max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold mb-12">Projects I've Built</h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            onClick={() => setSelected(p)}
            className="cursor-pointer group rounded-2xl overflow-hidden bg-[#0b1220] border border-white/10 hover:border-purple-500/40 transition"
          >

            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>

              <p className="text-green-400 text-sm mt-1">
                {p.category}
              </p>

              <p className="text-gray-400 text-sm mt-4">
                {p.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-white/10 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* HOVER CTA */}
              <div className="mt-6 text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition">
                Click to explore →
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />

    </section>
  );
}