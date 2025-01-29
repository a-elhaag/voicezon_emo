"use client"
import { motion } from "framer-motion";
import { useState } from "react";

// FAQ dictionary for easy editing
const FAQData = [
  {
    question: "How does VoiceZon's emotion detection work?",
    answer: "VoiceZon uses advanced AI algorithms to analyze voice patterns, tone, and speech characteristics to understand emotional states and provide personalized guidance."
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes, we take privacy seriously. All your data is encrypted and stored securely. We never share your personal information with third parties."
  },
  {
    question: "What features are included in the free plan?",
    answer: "The free plan includes basic emotion analysis, simple career guidance, and limited practice sessions. Premium features unlock advanced analytics and personalized coaching."
  },
  {
    question: "Can I use VoiceZon on my mobile device?",
    answer: "Yes, VoiceZon is fully responsive and works on all modern devices including smartphones and tablets."
  }
];

// Simple FAQ Item component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-light-peach)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-lg font-medium text-[var(--color-dark-teal)]">{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-[var(--color-dark-gray)]">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 px-4 relative z-10" id="faq">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-[var(--color-dark-teal)] text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-2">
          {FAQData.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
