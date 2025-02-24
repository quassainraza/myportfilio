"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function InteractiveCard() {
  const [pos, setPos] = useState({ x: 85, y: 90 });
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D rotation effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);

    setIsInitialRender(false);
    setPos({
      x: Math.floor((event.clientX / window.innerWidth) * 100),
      y: Math.floor((event.clientY / window.innerHeight) * 100),
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    {
      name: "Next.js",
      value: isInitialRender ? 85 : Math.min(98, pos.x + 10),
    },
    {
      name: "React",
      value: isInitialRender ? 88 : Math.min(99, pos.y + 8),
    },
    {
      name: "TypeScript",
      value: isInitialRender
        ? 82
        : Math.min(96, Math.floor((pos.x + pos.y) / 1.8)),
    },
    {
      name: "AI",
      value: isInitialRender
        ? 80
        : Math.min(95, Math.floor(Math.abs(pos.x - pos.y) * 0.8 + 40)),
    },
  ];

  return (
    <div className="perspective-1000" ref={containerRef}>
      <motion.div
        className="relative w-[320px] md:w-[380px]"
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        animate={{ scale: isHovering ? 1.02 : 1 }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="bg-background/80 backdrop-blur-sm border rounded-xl p-8 relative overflow-hidden shadow-2xl">
          {/* Profile section */}
          <div className="flex items-center gap-5 mb-10">
            <motion.div
              className="relative"
              animate={{ scale: isHovering ? 1.05 : 1 }}
            >
              <div className="size-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-inner">
                <Image
                  src="/imgs/agakadela_mini.jpg"
                  alt="Profile"
                  width={96}
                  height={96}
                  priority={true}
                  className="object-contain"
                />
              </div>
              <motion.div
                className="absolute -bottom-1 -right-1 size-5 rounded-full bg-green-500 shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div className="space-y-1.5">
              <motion.h3
                className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                animate={{ x: isHovering ? 5 : 0 }}
              >
                Aga Kadela
              </motion.h3>
              <motion.p
                className="text-base text-muted-foreground/80 font-medium"
                animate={{ x: isHovering ? 5 : 0 }}
              >
                Full Stack Developer
              </motion.p>
            </div>
          </div>

          {/* Skills section */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={skill.name} className="space-y-2.5">
                <motion.div
                  className="flex justify-between text-base"
                  animate={{ x: isHovering ? 3 : 0 }}
                >
                  <span className="font-medium text-muted-foreground/90">
                    {skill.name}
                  </span>
                  <span className="tabular-nums font-medium text-primary/90">
                    {skill.value}%
                  </span>
                </motion.div>
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-primary/80 to-primary/20 shadow-sm"
                  style={{
                    backgroundImage:
                      i === 1
                        ? "linear-gradient(to right, hsl(var(--secondary)/0.8), hsl(var(--secondary)/0.2))"
                        : i === 2
                        ? "linear-gradient(to right, hsl(var(--accent)/0.8), hsl(var(--accent)/0.2))"
                        : i === 3
                        ? "linear-gradient(to right, hsl(280 80% 40% / 0.8), hsl(280 80% 40% / 0.2))"
                        : undefined,
                  }}
                  animate={{
                    width: `${skill.value}%`,
                    opacity: isHovering ? 1 : 0.9,
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
              </div>
            ))}
          </div>

          {/* Decorative gradients */}
          <motion.div
            className="absolute -right-20 -bottom-20 size-40 bg-gradient-primary rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -left-20 -top-20 size-40 bg-gradient-secondary rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
