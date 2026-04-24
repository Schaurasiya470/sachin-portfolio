import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../utils/animations";
import profileImg from "../assets/profile_image.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-10 pt-24 bg-grid">

      {/* LEFT */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7 }}
        className="max-w-xl"
      >

        <motion.h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm Sachin
          <br />
          <span className="neon-text">I Build Scalable</span>
          <br />
          Digital Systems
        </motion.h1>

        <motion.p variants={fadeIn} className="text-gray-400 mt-6">
          Full Stack Developer specializing in high-performance backend systems,
          APIs, and modern frontend experiences.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex gap-4"
        >
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold glow">
            View Projects
          </button>

          <button className="px-6 py-3 border border-white/20 rounded-xl glow">
            Contact →
          </button>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative hidden md:block"
      >
        <div className="w-[350px] h-[350px] rounded-full border border-purple-500 flex items-center justify-center glow">
          <img
            src={profileImg}
            alt="profile"
            className="w-72 h-72 object-cover rounded-full"
          />
        </div>
      </motion.div>

    </section>
  );
}