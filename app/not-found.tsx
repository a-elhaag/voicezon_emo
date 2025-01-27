'use client';

import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Link from 'next/link';
import { BiGhost } from 'react-icons/bi'; // A fun 'ghost' icon for 404 vibes

const NotFound: NextPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex flex-col items-center justify-center min-h-screen bg-[var(--color-dark-teal)] text-[var(--color-background)]"
        >
            {/* Animated Ghost Icon */}
            <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="text-[var(--color-background)] mb-6"
            >
                <BiGhost size={80} />
            </motion.div>

            <div className="text-center space-y-4">
                {/* Title */}
                <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
                {/* Subtitle */}
                <p className="text-lg text-[var(--color-light-peach)]">
                    Oops! The page you're looking for isn't here.
                </p>

                {/* Action Button */}
                <Link href="/">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 mt-4 text-sm font-semibold bg-[var(--color-background)] text-[var(--color-dark-teal)] rounded-full shadow-md hover:bg-[var(--color-light-peach)] transition-transform"
                    >
                        Return to Home
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default NotFound;
