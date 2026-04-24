import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const esc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose, project]); // ✅ Included onClose

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0b1220] max-w-3xl w-full rounded-2xl overflow-hidden border border-white/10"
      >
        {/* IMAGE */}
        <div className="h-56">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-green-400 text-sm mt-1">{project.category}</p>
          <p className="text-gray-400 mt-4 leading-relaxed">{project.desc}</p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs px-3 py-1 bg-white/10 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4 mt-6">
            <a
              href={project.demo || "#"}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-black rounded-lg"
            >
              Live Demo
            </a>
            <a
              href={project.github || "#"}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border border-white/20 rounded-lg"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}