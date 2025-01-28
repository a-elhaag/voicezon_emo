'use client';

import { motion } from 'framer-motion';

export default function Error() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center bg-[var(--color-dark-teal)] text-[var(--color-background)] p-8"
        >
            <div className="text-center space-y-6">
                {/* Animated Error Icon */}
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="text-[var(--color-light-peach)]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 h-16 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9z"
                        />
                    </svg>
                </motion.div>

                {/* Error Message */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl font-bold"
                >
                    An unexpected error occurred
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-lg text-[var(--color-light-peach)]"
                >
                    Please try again later.
                </motion.p>

                {/* Retry Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 mt-4 text-sm font-semibold bg-[var(--color-background)] text-[var(--color-dark-teal)] rounded-full shadow-md hover:bg-[var(--color-light-peach)] transition-transform"
                    onClick={() => window.location.reload()}
                >
                    Retry
                </motion.button>
            </div>
        </motion.div>
    );
}
