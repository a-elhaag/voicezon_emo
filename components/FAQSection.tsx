"use client"
import { motion } from "framer-motion";
import { useState } from "react";

// FAQ dictionary for easy editing
const FAQData = [
  {
    question: "How does VoiceZon’s AI coaching work?",
    answer: "VoiceZon uses advanced AI algorithms to analyze your voice patterns, behavior, and progress. Our digital coach, Vee, then delivers personalized guidance and actionable insights to support your unique growth journey."
  },
  {
    question: "Is my data safe with VoiceZon?",
    answer: "We take data protection seriously. Your information is managed under strict privacy practices, and we never share your personal details with external parties."
  },
  {
    question: "How can I provide feedback during the beta?",
    answer: "We value your input! You can share your thoughts and suggestions directly through the app’s feedback feature or by reaching out to our support team. Your insights are crucial to shaping VoiceZon’s future."
  },
  {
    question: "Who is VoiceZon designed for?",
    answer: "VoiceZon is crafted for anyone looking to enhance their personal development—whether you're just starting out or seeking to refine your skills. Our AI coaching adapts to your unique needs and progress."
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
