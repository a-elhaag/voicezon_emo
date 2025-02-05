"use client";
import exp from "constants";
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

        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const particles: Particle[] = [];

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            baseY: number;

            constructor() {
                this.x = Math.random() * (canvas?.width || window.innerWidth);
                this.y = Math.random() * (canvas?.height || window.innerHeight);
                this.baseY = this.y; // Store initial Y position
                this.directionX = (Math.random() - 0.5) * 0.5;
                this.directionY = (Math.random() - 0.5) * 0.5;
            }

            update(scrollOffset: number) {
                const width = canvas?.width ?? window.innerWidth;
                const height = canvas?.height ?? window.innerHeight;

                if (this.x < 0 || this.x > width) this.directionX *= -1;
                if (this.y < 0 || this.y > height) this.directionY *= -1;

                this.x += this.directionX;
                // Vertical movement based on scroll offset
                this.y = this.baseY + (scrollOffset * 0.1);

                // Loop particles within canvas bounds
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let animationFrameId: number;

        function animate() {
            if (!canvas) return;
            const scrollOffset = window.scrollY;
            const scrollOpacity = Math.max(0.1, opacity - (scrollOffset * 0.001));

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
            window.removeEventListener("resize", handleResize);
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

export default PageBackground;