import React from "react";
import Card from "@/components/Card";
import { FaBrain } from "react-icons/fa";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-wrapper" style={{ display: "flex", gap: "1rem" }}>
      {/* Card 1 */}
      <Card
        icon={<FaBrain size={32} color="var(--color-dark-teal)" />}
        title="Emotion-Aware AI"
        shortDescription="Understands your emotions to provide better guidance."
        detailedDescription="VoiceZon uses real-time emotional analysis to deliver personalized insights for career and personal growth."
        badgeText="New" // optional
      />

      {/* Card 2 */}
      <Card
        icon={<FaBrain size={32} color="var(--color-dark-teal)" />}
        title="Career Guidance"
        shortDescription="Ace your interviews with mock sessions and expert advice."
        detailedDescription="Get tailored feedback, relevant resources, and confidence-building strategies for your next big interview."
      />
    </div>
  );
};

export default LandingPage;
