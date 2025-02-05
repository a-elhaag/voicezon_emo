"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";


function PageBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <NetworkAnimation opacity={0.2} particleCount={100} connectionDistance={150} />
        </div>
    );
}
function NetworkAnimation({ opacity = 1, particleCount = 75, connectionDistance = 200 }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollY } = useScroll();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const particles: Particle[] = [];

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            baseY: number;

            constructor() {
                this.x = Math.random() * (canvas?.width ?? window.innerWidth);
                this.y = Math.random() * (canvas?.height ?? window.innerHeight);
                this.baseY = this.y; // Store initial Y position
                this.directionX = (Math.random() - 0.5) * 0.5;
                this.directionY = (Math.random() - 0.5) * 0.5;
            }

            update(scrollOffset: number) {
                if (!canvas) return;
                if (this.x < 0 || this.x > canvas.width) this.directionX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.directionY *= -1;

                this.x += this.directionX;
                // Add slight vertical movement based on scroll
                this.y = this.baseY + (scrollOffset * 0.1);

                // Keep particles within bounds
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let animationFrameId: number;

        function animate() {
            const scrollOffset = window.scrollY;
            const scrollOpacity = Math.max(0.1, opacity - (scrollOffset * 0.001));

            if (!canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update(scrollOffset);
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(28, 83, 74, ${scrollOpacity})`;
                ctx.fill();

                particles.forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(28, 83, 74, ${scrollOpacity * (1 - distance / connectionDistance)})`;
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [opacity, particleCount, connectionDistance]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.5 }}
        />
    );
}

export default function AboutVoicezon() {
    return (
        <>
            <PageBackground />
            <section className="section-padding bg-[var(--color-background)]">
                <div className="container-padding max-w-4xl mx-auto">
                    <h1 className="responsive-heading mb-6 text-[var(--color-dark-gray)]">
                        About <span className="text-gradient">VoiceZon</span>
                    </h1>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        At VoiceZon, our journey began with a shared vision of personal growth and empowerment—one where technology isn’t an adversary but a trusted ally. We believe every voice carries a unique story, and we are here to ensure that story is heard with clarity and confidence.
                    </p>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        Our platform harnesses the power of AI as a friendly, ever-ready life coach. No longer do you have to worry about the timing or availability of real-life coaches. With VoiceZon, you have an intelligent partner that is available around the clock, ready to offer guidance for your professional journey and personal development.
                    </p>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        We’ve integrated AI-driven interview training to help you shine in your career pursuits, while our therapeutic insights nurture your emotional well-being. Our approach is built on the belief that technology can seamlessly enhance human potential without replacing the human touch.
                    </p>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        Join us as we redefine what it means to grow, learn, and succeed. With VoiceZon, you’re not just accessing a tool—you’re becoming part of a community dedicated to unlocking the power of your voice, building confidence, and creating opportunities every day.
                    </p>
                </div>
            </section>
        </>
    );
}
