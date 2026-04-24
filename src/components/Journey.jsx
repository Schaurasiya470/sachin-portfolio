import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Journey() {
  const data = [
    { year: "2020", text: "Started coding journey with curiosity." },
    { year: "2021", text: "Built first full-stack application." },
    { year: "2022", text: "Explored MERN stack & APIs deeply." },
    { year: "2023", text: "Worked on scalable ERP systems." },
    { year: "2024", text: "Software Engineer 🚀 building real products." },
  ];

  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const prev = () =>
    setIndex((prev) => (prev - 1 + data.length) % data.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % data.length);

  // ✅ AUTO SLIDE (FIXED)
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [pause, data.length]);

  return (
    <section
      id="journey"
      className="px-6 py-28"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Life Journey
      </h2>

      <div className="relative flex justify-center items-center">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-4 z-20 glass w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
        >
          ←
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-4 z-20 glass w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
        >
          →
        </button>

        {/* CAROUSEL */}
        <div className="relative w-full max-w-5xl h-[260px] flex items-center justify-center">

          {data.map((item, i) => {
            const position = (i - index + data.length) % data.length;

            let scale = 0.7;
            let opacity = 0.3;
            let blur = "blur-sm";
            let z = "z-0";
            let x = 0;

            if (position === 0) {
              scale = 1;
              opacity = 1;
              blur = "blur-0";
              z = "z-20";
              x = 0;
            } else if (position === 1) {
              x = 260;
              scale = 0.85;
              opacity = 0.6;
              z = "z-10";
            } else if (position === data.length - 1) {
              x = -260;
              scale = 0.85;
              opacity = 0.6;
              z = "z-10";
            }

            return (
              <motion.div
                key={i}
                animate={{ x, scale, opacity }}
                transition={{ duration: 0.5 }}
                className={`absolute w-[280px] md:w-[380px] p-8 text-center glass ${blur} ${z}`}
              >
                <h3 className="text-3xl font-bold neon-text">
                  {item.year}
                </h3>
                <p className="text-gray-400 mt-4">
                  {item.text}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}