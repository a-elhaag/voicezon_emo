import React from "react";
import Card from "@/components/Card";
import { FaBrain } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      <Card
        icon={<FaBrain size={40} color="var(--color-dark-teal)" />}
        title="Emotion-Aware AI"
        shortDescription="Understands your emotions to provide better guidance."
        detailedDescription="VoiceZon uses real-time emotional analysis to deliver personalized insights for career and personal growth."
        badgeText="New"
      />
      <Card
        icon={<FaBrain size={40} color="var(--color-dark-teal)" />}
        title="Career Guidance"
        shortDescription="Ace your interviews with mock sessions and expert advice."
        detailedDescription="Get tailored feedback, relevant resources, and confidence-building strategies for your next big interview."
      />
    </div>
  );
}
