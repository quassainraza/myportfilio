"use client";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import quassain from "@/public/imgs/mypic.jpeg";

export default function AboutSection() {
  const ref = useRef(null);
  useCurSection(ref);
  return (
    <div
      ref={ref}
      id="about"
      className="w-full py-12 my-32 bg-muted text-sm md:text-base"
    >
      <h1 className="text-center text-3xl md:text-5xl mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }"}</span>
      </h1>

      <div className="flex gap-9 items-center flex-col  w-10/12 mx-auto p-5 rounded-lg container">
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-full size-[200px] bg-gradient-primary p-0.5"
          >
            <Image
              className="size-full rounded-full grayscale hover:grayscale-0 transition-all object-cover"
              width={600}
              height={600}
              alt="about profile image"
              src={quassain}
            />
          </motion.div>
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold">
            <span className="text-secondary">{"< "}</span>

            <span className="text-gradient-secondary">Who am I</span>
            <span className="text-secondary">{" />"}</span>
          </h2>
          <motion.p
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }}
            className="text-muted-foreground text-justify"
          >
            "Hey, I’m Quassain, a software developer with 3.5 years of
            experience in React Native and Flutter. I specialize in building and
            optimizing high-performance mobile apps. Currently exploring AI and
            web development, I’m always pushing the boundaries to create
            cutting-edge solutions." Let me know if you want any refinements! 🚀
            <br />
            <br />
            <span className="font-semibold">📌 What I Do Best:</span>
            <br />
            ✅ Debugging & Fixing Issues – Resolving API errors, UI glitches,
            crashes, and performance bottlenecks.
            <br />
            ✅ Performance Optimization – Enhancing speed, responsiveness, and
            overall user experience for mobile and web apps.
            <br />
            ✅ Scalable Development – Ensuring apps grow seamlessly without
            downtime or technical limitations.
            <br />
            ✅ Full-Cycle Development – Building robust, scalable applications
            with React Native, Flutter, and modern web technologies.
            <br />
            ✅ AI & Automation – Exploring AI-driven features, chatbots, and
            workflow automation to enhance functionality and engagement.
            <br />
            <br />
            <span className="font-semibold">📌 Why Work With Me?</span>
            <br />
            🔹 I focus on real results, not just code. Your web/mobile app
            should run fast, handle traffic, and grow without breaking—I make
            sure it does.
            <br />
            🔹 I work fast and efficiently. No endless back-and-forth, no
            unnecessary delays—just solutions that work.
            <br />
            🔹 I don’t just fix problems—I prevent them. Whether optimizing an
            existing app or building something new, I ensure it’s scalable,
            maintainable, and built for the long run.
            <br />
            <br />
            <span className="font-semibold">📌 Let&apos;s Talk</span>
            <br />
            If your app needs fixing, optimizing, scaling, or building,
            let&apos;s connect.
            <br />
            <a href="#contact" className="text-primary hover:underline">
              ✅ Get in Touch
            </a>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
