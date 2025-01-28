"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "@/components/Card";
import MotionButton from "@/components/MotionButton";
import { FaBrain, FaBriefcase } from "react-icons/fa";

export default function LandingPage() {
  const featureRef = useRef<HTMLElement>(null);

  // Smooth scrolling to the Features section
  const handleGetStarted = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parallax-like hero background effect
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.2]);

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-dark-gray)] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        {/* Parallax style shapes */}
        <motion.div
          style={{ scale: heroScale }}
          className="absolute w-[600px] h-[600px] rounded-full bg-[var(--color-light-peach)] top-[-200px] -left-40 z-0"
        />
        <motion.div
          style={{ scale: heroScale }}
          className="absolute w-[400px] h-[400px] rounded-full bg-[var(--color-dark-teal)] bottom-[-100px] -right-20 z-0 opacity-10"
        />

        <div className="relative z-10 max-w-3xl text-center px-4">
          <motion.h1
            className="text-5xl font-bold mb-6 text-[var(--color-dark-teal)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome to VoiceZon
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Empower your personal and professional journey with emotion-aware AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <MotionButton label="Get Started" onClick={handleGetStarted} />
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section ref={featureRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-[var(--color-dark-teal)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Explore Our Features
          </motion.h2>
          <motion.p
            className="text-lg text-[var(--color-dark-gray)] mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Discover how VoiceZon helps you grow personally and professionally.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card
              icon={<FaBrain size={40} color="var(--color-dark-teal)" />}
              title="Emotion-Aware AI"
              shortDescription="Understands your emotions to provide better guidance."
              detailedDescription="VoiceZon uses real-time emotional analysis to deliver personalized insights for career and personal growth."
              badgeText="New"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card
              icon={<FaBriefcase size={40} color="var(--color-dark-teal)" />}
              title="Career Guidance"
              shortDescription="Ace your interviews with mock sessions and expert advice."
              detailedDescription="Get tailored feedback, relevant resources, and confidence-building strategies for your next big interview."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card
              icon={<FaBrain size={40} color="var(--color-dark-teal)" />}
              title="Personal Growth"
              shortDescription="Set goals and track progress daily."
              detailedDescription="Our intuitive system keeps you motivated with reminders and personalized challenges to reach new milestones."
              badgeText="Pro"
            />
          </motion.div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="py-8 bg-[var(--color-light-peach)] text-center">
        <p className="text-sm text-[var(--color-dark-gray)]">
          &copy; {new Date().getFullYear()} VoiceZon. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
