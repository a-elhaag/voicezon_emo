"use client";

import { useLayoutEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "./ui/button";
import { Moon, Sun, Menu } from "lucide-react";

export const Nav = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useLayoutEffect(() => {
        const el = document.documentElement;
        setIsDarkMode(el.classList.contains("dark"));
    }, []);

    const toggleDark = () => {
        const el = document.documentElement;
        el.classList.toggle("dark");
        setIsDarkMode((prev) => !prev);
    };

    return (
        <nav className="bg-background border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="VoiceZon Logo"
                            width={120}
                            height={40}
                            className="cursor-pointer"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/about" className="hover:text-primary">About</Link>
                        <Link href="/services" className="hover:text-primary">Services</Link>
                        <Link href="/contact" className="hover:text-primary">Contact</Link>
                        
                        <Button
                            onClick={toggleDark}
                            variant="ghost"
                            className="flex items-center gap-1.5"
                        >
                            {isDarkMode ? (
                                <Sun className="size-4" />
                            ) : (
                                <Moon className="size-4" />
                            )}
                        </Button>

                        <Button variant="default" className="bg-gradient hover:opacity-90">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="size-6" />
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-3 space-y-2">
                        <Link href="/about" className="block py-2 hover:text-primary">About</Link>
                        <Link href="/services" className="block py-2 hover:text-primary">Services</Link>
                        <Link href="/contact" className="block py-2 hover:text-primary">Contact</Link>
                        <Button
                            variant="default"
                            className="w-full bg-gradient hover:opacity-90 mt-4"
                        >
                            Get Started
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
};
