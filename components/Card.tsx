"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Card.css";

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    badgeText?: string; // optional badge
}

const Card: React.FC<CardProps> = ({
    icon,
    title,
    shortDescription,
    detailedDescription,
    badgeText,
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className={`card-container ${isFlipped ? "is-flipped" : ""}`}
            onClick={() => setIsFlipped(!isFlipped)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            role="button"
            aria-label={`Feature card: ${title}`}
            tabIndex={0} // Make it focusable via keyboard
            onKeyPress={(e) => e.key === "Enter" && setIsFlipped(!isFlipped)}
        >
            {/* FRONT */}
            <div className="card-front">
                {badgeText && <div className="badge">{badgeText}</div>}
                <div className="icon-wrapper">{icon}</div>
                <h3 className="card-title">{title}</h3>
                <p className="card-short-desc">{shortDescription}</p>
            </div>

            {/* BACK */}
            <div className="card-back">
                <h3 className="card-title">More Info</h3>
                <p className="card-detailed-desc">{detailedDescription}</p>
            </div>
        </motion.div>
    );
};

export default Card;
