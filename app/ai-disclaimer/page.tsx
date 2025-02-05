"use client";
import PageBackground from "@/components/NetworkBg";

export default function AIDisclaimer() {
    return (
        <>
            <PageBackground />
            <section className="section-padding bg-[var(--color-background)]">
                <div className="container-padding max-w-4xl mx-auto">
                    <h1 className="responsive-heading mb-6 text-[var(--color-dark-gray)]">
                        VoiceZon <span className="text-gradient">AI Disclaimer</span>
                    </h1>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        <strong>Last Updated:</strong> February 5, 2025
                    </p>
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        Emergency Situations and Crisis Disclaimer
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        IF YOU ARE EXPERIENCING THOUGHTS OF SUICIDE, SELF-HARM, OR HARMING OTHERS, OR IF YOU ARE IN A MENTAL HEALTH EMERGENCY:
                    </p>
                    <ul className="list-disc ml-8 mb-4 text-[var(--color-dark-gray)]">
                        <li>IMMEDIATELY STOP USING VOICEZON.</li>
                        <li>DIAL YOUR LOCAL EMERGENCY SERVICES (911 IN THE US, OR YOUR COUNTRY’S EMERGENCY NUMBER).</li>
                        <li>CONTACT A QUALIFIED MENTAL HEALTH PROFESSIONAL OR VISIT THE NEAREST EMERGENCY ROOM.</li>
                    </ul>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        VoiceZon is not an emergency service and cannot help in crisis situations.
                    </p>

                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        Nature of Service
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        VoiceZon utilizes advanced artificial intelligence to provide coaching and personal growth support. Our AI-driven services are designed to offer helpful insights and guidance based on user interactions.
                    </p>

                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        Not a Substitute for Professional Services
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        The AI provided by VoiceZon is not a replacement for professional medical, psychological, or therapeutic care. If you have specific concerns or require diagnosis and treatment, please consult a qualified professional.
                    </p>

                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        Limitations of AI
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        While our AI strives to offer accurate and useful advice, it is generated through algorithms based on training data and may not always provide contextually perfect or fully personalized responses. Users are encouraged to use their judgment and seek additional professional support if necessary.
                    </p>

                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        Privacy and Data Usage
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        Your conversations with VoiceZon are encrypted and securely stored. We may use anonymized data to improve our AI systems. Please review our Privacy Policy for detailed information on data handling and protection.
                    </p>

                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        User Responsibility and Feedback
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        You are responsible for the decisions you make based on the insights provided by our AI. We encourage users to critically evaluate the advice given and report any concerning or inappropriate responses through our feedback system.
                    </p>

                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        By using VoiceZon, you acknowledge that you have read, understood, and agree to the terms outlined in this AI Disclaimer. If you do not agree with any part of this disclaimer, please do not use our services.
                    </p>

                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        Contact Information
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        For any questions or concerns regarding this disclaimer, please contact us at:
                    </p>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        VoiceZon<br />
                        info@voicezon.ai
                    </p>
                </div>
            </section>
        </>
    );
}
