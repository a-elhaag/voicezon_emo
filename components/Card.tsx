"use client"
import React, { useState } from "react";
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

    const handleCardClick = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <div
            className={`card-container ${isFlipped ? "is-flipped" : ""}`}
            onClick={handleCardClick}
            role="button"
            aria-label={`Feature card: ${title}`}
            tabIndex={0} // Make it focusable via keyboard
            onKeyPress={(e) => e.key === "Enter" && handleCardClick()}
        >
            {/* FRONT */}
            <div className="card-front">
                <div className="content-wrapper">
                    {badgeText && <div className="badge">{badgeText}</div>}
                    <div className="icon-wrapper">{icon}</div>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-short-desc">{shortDescription}</p>
                </div>
            </div>

            {/* BACK */}
            <div className="card-back">
                <div className="content-wrapper">
                    <h3 className="card-title">More Info</h3>
                    <p className="card-detailed-desc">{detailedDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
