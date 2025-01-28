"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MotionButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    label: string;
}

const MotionButton: React.FC<MotionButtonProps> = ({ label, ...props }) => {
    return (
        <motion.button
            {...props}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(28,83,74,0.9)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="px-6 py-3 text-[var(--color-background)] bg-[var(--color-dark-teal)] rounded-full font-semibold shadow-lg hover:shadow-xl cursor-pointer focus:outline-none"
        >
            {label}
        </motion.button>
    );
};

export default MotionButton;
