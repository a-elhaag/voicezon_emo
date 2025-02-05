"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "@/components/Card";
import { FaBrain, FaBriefcase } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import PageBackground from "@/components/NetworkBg";




function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Remove previous network background */}
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-dark-teal)] to-[#2A7468]">
            VoiceZon
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[var(--color-dark-gray)]">
            Where AI meets emotional intelligence
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="primary"
              className="text-lg bg-gradient-to-r from-[var(--color-dark-teal)] to-[#2A7468]"
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Features
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[var(--color-dark-teal)] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-[var(--color-dark-teal)] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  const featureRef = useRef<HTMLElement>(null);

  const cards = [
    {
      icon: <FaBrain size={40} color="var(--color-dark-teal)" />,
      title: "Emotion-Aware AI",
      shortDescription: "Understands your emotions to provide better guidance.",
      detailedDescription: "VoiceZon uses real-time emotional analysis to deliver personalized insights for career and personal growth.",
      badgeText: "New"
    },
    {
      icon: <FaBriefcase size={40} color="var(--color-dark-teal)" />,
      title: "Career Guidance",
      shortDescription: "Ace your interviews with mock sessions and expert advice.",
      detailedDescription: "Get tailored feedback, relevant resources, and confidence-building strategies for your next big interview."
    },
    {
      icon: <FaBrain size={40} color="var(--color-dark-teal)" />,
      title: "Personal Growth",
      shortDescription: "Set goals and track progress daily.",
      detailedDescription: "Our intuitive system keeps you motivated with reminders and personalized challenges to reach new milestones.",
      badgeText: "Pro"
    }
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={featureRef} className="py-20 px-4 relative z-10" id="features">
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

      <motion.div
        className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            custom={index}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/*
  -------------
  About Section
  -------------
*/
function AboutSection() {
  return (
    <section className="container-padding py-12 sm:py-16">
      <div className="max-w-3xl mx-auto bg-[var(--color-light-peach)] rounded-[15px] p-6 sm:p-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-dark-gray)] mb-4">
          Discover Our Mission
        </h2>
        <p className="responsive-text text-[var(--color-dark-gray)] mb-6">
          At VoiceZon, we ignite your potential with AI-driven coaching, personalized career insights, and interactive tools designed to help you thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Link to the About page */}
          <Link href="/about">
            <Button size="lg" variant="primary">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 
  -------------
  CTA Section
  -------------
*/
// function CTASection() {
//   return (
//     <section className="container-padding py-12 sm:py-16">
//       <div className="max-w-3xl mx-auto bg-[var(--color-light-peach)] rounded-[15px] p-6 sm:p-8 text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-dark-gray)] mb-4">
//           Ready to Elevate Your Journey?
//         </h2>
//         <p className="responsive-text text-[var(--color-dark-gray)] mb-6">
//           Join VoiceZon today and start your transformation.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg" variant="primary">
//             Get Started
//           </Button>
//           <Button size="lg" variant="outline">
//             Learn More
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


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
    <div className="relative bg-[var(--color-background)] text-[var(--color-dark-gray)] min-h-screen">
      <PageBackground />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
        <AboutSection />
        {/* <CTASection /> */}

      </div>
    </div>
  );
}
