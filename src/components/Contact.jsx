import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">

      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">Let’s Connect</h2>
        <p className="text-gray-400 mt-4">
          Have a project or opportunity? Let’s build something amazing.
        </p>
      </motion.div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto glass p-10">

        {/* CONTACT INFO */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="flex items-center gap-4 glow p-4 rounded-xl">
              <FaEnvelope className="text-purple-400 text-xl" />
              <span className="text-gray-300">
                schaurasiya470@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4 glow p-4 rounded-xl">
              <FaPhone className="text-pink-400 text-xl" />
              <span className="text-gray-300">
                +91-9525665702
              </span>
            </div>

          </div>

          {/* RIGHT (SOCIALS) */}
          <div className="flex flex-col justify-center gap-6">

            <a
              href="https://github.com/Schaurasiya470"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 glass p-4 rounded-xl glow hover:scale-105 transition"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mr-sachin-ch/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 glass p-4 rounded-xl glow hover:scale-105 transition"
            >
              <FaLinkedin className="text-2xl text-blue-400" />
              <span>LinkedIn</span>
            </a>

          </div>

        </div>

        {/* CTA BUTTON */}
        <div className="mt-10 text-center">
          <a
            href="mailto:schaurasiya470@gmail.com"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold glow"
          >
            Send Message ✉️
          </a>
        </div>

      </div>

    </section>
  );
}