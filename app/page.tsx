"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import { FaBrain, FaBriefcase } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-dark-gray)]">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* (Optional) FAQ Section */}
      {/* <FAQSection /> */}

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

/* ------------------------------
   Hero Section
--------------------------------*/
function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-6 py-20 bg-gradient-to-br from-[var(--color-light-peach)] to-[var(--color-background)] overflow-hidden">
      {/* Animated Background Circle */}
      <motion.div
        className="absolute w-96 h-96 bg-[var(--color-dark-teal)] rounded-full opacity-10 -z-10"
        initial={{ y: -200, scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-[var(--color-dark-teal)] mb-4"
      >
        Welcome to VoiceZon
      </motion.h1>
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl text-center max-w-xl text-[var(--color-dark-gray)]"
      >
        Experience our Emotion-Aware AI for personal development and career
        growth.
      </motion.p>
      {/* Hero Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 px-8 py-3 bg-[var(--color-dark-teal)] text-[var(--color-background)] font-semibold rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105"
        onClick={() => {
          const element = document.getElementById("features");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Explore Features
      </motion.button>
    </section>
  );
}

/* ------------------------------
   Features Section
--------------------------------*/
function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full py-16 bg-[var(--color-background)] flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-[var(--color-dark-teal)] mb-12">
        Our Key Features
      </h2>
      <div className="flex flex-wrap gap-6 justify-center px-6">
        {/* Card 1 */}
        <Card
          icon={<FaBrain size={40} color="var(--color-dark-teal)" />}
          title="Emotion-Aware AI"
          shortDescription="Understands your emotions to deliver personalized insights."
          detailedDescription="Our AI reads emotional cues in real time, guiding you towards self-improvement and mindful decision-making."
          badgeText="New"
        />

        {/* Card 2 */}
        <Card
          icon={<FaBriefcase size={40} color="var(--color-dark-teal)" />}
          title="Career Guidance"
          shortDescription="Master interviews and accelerate your growth."
          detailedDescription="Practice mock sessions, get expert feedback, and stay ahead with specialized career advice tailored to you."
        />

        {/* Card 3 */}
        <Card
          icon={<FaBrain size={40} color="var(--color-dark-teal)" />}
          title="Personal Growth"
          shortDescription="Build better habits and track your progress."
          detailedDescription="VoiceZon helps you form sustainable habits, set goals, and measure progress to reach your fullest potential."
        />
      </div>
    </section>
  );
}

/* ------------------------------
   Optional FAQ Section
--------------------------------*/
// You can replace this with your own accordion from Shadcn or any UI library.
function FAQSection() {
  const faqs = [
    {
      question: "How does VoiceZon analyze emotions?",
      answer:
        "Our AI uses sentiment analysis and voice inflections to gauge emotions and provide tailored insights.",
    },
    {
      question: "Is the career guidance personalized?",
      answer:
        "Absolutely! We tailor mock interviews, skill-building resources, and tips to your industry and goals.",
    },
    {
      question: "Is VoiceZon free to use?",
      answer:
        "We offer a free tier for basic features. Premium plans unlock additional coaching and analytics tools.",
    },
  ];

  return (
    <section className="w-full py-16 bg-[var(--color-light-peach)]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[var(--color-dark-teal)] mb-8">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="border-b border-[var(--color-dark-teal)] py-4"
          >
            <summary className="cursor-pointer font-semibold text-[var(--color-dark-teal)]">
              {faq.question}
            </summary>
            <p className="mt-2 text-[var(--color-dark-gray)]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------
   CTA Section
--------------------------------*/
function CTASection() {
  return (
    <section className="w-full py-16 bg-[var(--color-light-peach)] flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[var(--color-dark-teal)] mb-4">
        Ready to Transform Your Future?
      </h2>
      <p className="text-[var(--color-dark-gray)] mb-8 max-w-xl text-center px-4">
        Take the next step in your personal growth journey with VoiceZon. Gain
        clarity, boost confidence, and unlock your full potential—right from
        your browser.
      </p>
      <button
        className="px-8 py-3 bg-[var(--color-dark-teal)] text-[var(--color-background)] rounded-full font-semibold shadow-md transition-transform hover:scale-105 hover:shadow-lg"
        onClick={() => {
          // Possibly navigate to sign-up or chat
          alert("Redirect to sign-up page (not implemented).");
        }}
      >
        Get Started
      </button>
    </section>
  );
}

/* ------------------------------
   Footer
--------------------------------*/
function Footer() {
  return (
    <footer className="w-full py-6 bg-[var(--color-dark-teal)] text-[var(--color-background)] text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} VoiceZon. All Rights Reserved.
      </p>
    </footer>
  );
}
