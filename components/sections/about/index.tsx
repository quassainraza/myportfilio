"use client";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { motion } from "framer-motion";
import agakadela from "@/public/imgs/agakadela_mini.jpg";

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
              src={agakadela}
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
            Hey, I&apos;m Aga Kadela, a Next.js & React developer who helps
            businesses fix, optimize, scale, and build high-performance web
            applications.
            <br />
            <br />
            <span className="font-semibold">
              If you&apos;re here, chances are you&apos;re dealing with:
            </span>
            <br />
            ❌ A slow web app that frustrates users and affects conversions
            <br />
            ❌ Bugs and crashes that make your platform unreliable
            <br />
            ❌ Scaling issues that stop your app from handling more users
            <br />
            ❌ A missing AI-powered feature that could automate processes or
            enhance user experience
            <br />
            ❌ A project that needs to be built from scratch the right
            way—scalable, fast, and future-proof
            <br />
            That&apos;s where I step in.
            <br />
            <br />
            <span className="font-semibold">📌 What I Do Best:</span>
            <br />
            ✅ Fixing Bugs & Broken Code – Debugging, API issues, UI glitches
            <br />
            ✅ Optimizing Performance – Speeding up apps, improving SEO & user
            experience
            <br />
            ✅ Scaling Web Apps – Ensuring they can handle growth without
            breaking
            <br />
            ✅ Building from Scratch – Custom Next.js applications built for
            performance
            <br />
            ✅ AI-Powered Features – Adding automation, chatbots, and smart
            integrations
            <br />
            <br />
            <span className="font-semibold">📌 Why Work With Me?</span>
            <br />
            🔹 I focus on real results, not just code. Your web app should work
            smoothly, load fast, and scale effortlessly. I make sure it does.
            <br />
            🔹 I work fast and efficiently. No endless back-and-forth, no
            unnecessary delays—just solutions that work.
            <br />
            🔹 I don&apos;t just fix issues, I prevent them. Whether I&apos;m
            optimizing an existing app or building a new one, I make sure
            it&apos;s future-proof and scalable.
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
