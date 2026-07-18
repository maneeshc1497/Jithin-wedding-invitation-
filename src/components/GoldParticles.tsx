import { motion } from "framer-motion";

const particles = Array.from({ length: 120 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  duration: Math.random() * 12 + 8,
}));

export default function GoldParticles() {
  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [-20, -220],
            opacity: [0, .8, .2, 0],
            scale: [0.5, 1.4, .8],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: Math.random() * 8,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "#E8C768",
            boxShadow: "0 0 12px #F5D67A",
          }}
        />
      ))}
    </>
  );
}