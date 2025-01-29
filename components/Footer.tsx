import Link from "next/link";
import Image from "next/image";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

interface SocialMedia {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
}

const socialLinks: SocialMedia = {
    facebook: "https://facebook.com/voicezon",
    twitter: "https://twitter.com/voicezon",
    instagram: "https://instagram.com/voicezon",
    linkedin: "https://linkedin.com/company/voicezon",
    // youtube: 'https://youtube.com/voicezon', // Uncomment if needed
};

const Footer = () => {
    return (
        <footer className="bg-[var(--color-light-peach)] text-[var(--color-dark-gray)] py-12">
            <div className="container mx-auto px-4">
                {/* Social Media Section */}
                <div className="flex justify-center space-x-6 mb-8">
                    {socialLinks.facebook && (
                        <a
                            href={socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-110 transition-transform duration-200"
                        >
                            <FaFacebook className="text-2xl hover:text-secondary" />
                        </a>
                    )}
                    {socialLinks.twitter && (
                        <a
                            href={socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-110 transition-transform duration-200"
                        >
                            <FaTwitter className="text-2xl hover:text-secondary" />
                        </a>
                    )}
                    {socialLinks.instagram && (
                        <a
                            href={socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-110 transition-transform duration-200"
                        >
                            <FaInstagram className="text-2xl hover:text-secondary" />
                        </a>
                    )}
                    {socialLinks.linkedin && (
                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-110 transition-transform duration-200"
                        >
                            <FaLinkedin className="text-2xl hover:text-secondary" />
                        </a>
                    )}
                    {socialLinks.youtube && (
                        <a
                            href={socialLinks.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-110 transition-transform duration-200"
                        >
                            <FaYoutube className="text-2xl hover:text-secondary" />
                        </a>
                    )}
                </div>

                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="VoiceZon Logo"
                                width={150}
                                height={50}
                                className="cursor-pointer"
                            />
                        </Link>
                        <p className="max-w-xs text-sm">
                            Empowering voices through emotion AI technology
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center space-y-4">
                        <h3 className="font-bold text-lg">Quick Links</h3>
                        <div className="flex flex-col space-y-1">
                            <Link href="/about" className="hover:text-secondary">
                                About Us
                            </Link>
                            <Link href="/services" className="hover:text-secondary">
                                Services
                            </Link>
                            <Link href="/contact" className="hover:text-secondary">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-right space-y-4">
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <div className="text-sm space-y-1">
                            <p>Email: info@voicezon.com</p>
                            <p>Phone: +1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>

                {/* Legal Links and Copyright */}
                <div className="border-t border-gray-300 pt-6">
                    <div className="flex flex-wrap justify-center md:justify-between items-center space-y-3 md:space-y-0">
                        {/* Legal Links */}
                        <div className="flex space-x-6 text-sm">
                            <Link href="/privacy-policy" className="hover:text-secondary">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" className="hover:text-secondary">
                                Terms of Service
                            </Link>
                            <Link href="/ai-disclaimer" className="hover:text-secondary">
                                AI Disclaimer
                            </Link>
                        </div>

                        {/* Copyright */}
                        <div className="text-sm text-center text-[var(--color-dark-gray)] mt-2 md:mt-0">
                            &copy; {new Date().getFullYear()} VoiceZon. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
