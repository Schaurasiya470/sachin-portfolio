import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Stats() {
  const stats = [
    { value: "5000+", label: "Tasks Managed" },
    { value: "1000+", label: "API Calls/Day" },
    { value: "5+", label: "Modules Built" },
    { value: "1+", label: "Years Experience" },
  ];

  return (
    <section className="px-10 py-16">

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-6 glass p-6 text-center"
      >
        {stats.map((s, i) => (
          <motion.div key={i} variants={fadeUp}>
            <h3 className="text-3xl font-bold neon-text">{s.value}</h3>
            <p className="text-gray-400">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}