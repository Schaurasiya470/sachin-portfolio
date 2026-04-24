import { useRef } from "react";

export default function TiltCard({ children }) {
  const ref = useRef();

  const handleMove = (e) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 10;
    const rotateY = (x - rect.width / 2) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const reset = () => {
    ref.current.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-200 ease-out glass p-6"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}