"use client";
import PageBackground from "@/components/NetworkBg";

// Terms of Service Page Component
export default function TermsOfServicePage() {
    return (
        <>
            <PageBackground />
            <section className="section-padding bg-[var(--color-background)]">
                <div className="container-padding max-w-4xl mx-auto">
                    {/* Header */}
                    <h1 className="responsive-heading mb-6 text-[var(--color-dark-gray)]">
                        VoiceZon Terms of Service
                    </h1>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        <strong>Last Updated:</strong> February 05, 2025
                    </p>

                    {/* 1. Emergency Situations and Crisis Disclaimer */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        1. Emergency Situations and Crisis Disclaimer
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        <strong>PLEASE READ THIS SECTION CAREFULLY</strong>
                    </p>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        IF YOU ARE EXPERIENCING THOUGHTS OF SUICIDE, SELF-HARM, OR HARMING OTHERS, OR IF YOU ARE EXPERIENCING A MENTAL HEALTH EMERGENCY:
                    </p>
                    <ul className="list-disc ml-8 mb-4 text-[var(--color-dark-gray)]">
                        <li>IMMEDIATELY STOP USING VOICEZON.</li>
                        <li>CALL YOUR LOCAL EMERGENCY SERVICES (E.G., 911 IN THE US OR THE APPROPRIATE NUMBER IN YOUR COUNTRY).</li>
                        <li>GO TO THE NEAREST EMERGENCY ROOM.</li>
                        <li>CONTACT A QUALIFIED MENTAL HEALTH PROFESSIONAL.</li>
                    </ul>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        VoiceZon is not an emergency service and cannot help in crisis situations.
                    </p>

                    {/* 2. Introduction */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        2. Introduction
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        Welcome to VoiceZon (voicezon.ai), an AI-powered personal development and life coaching application. By accessing or using our app, you agree to these Terms of Service ("Terms"). If you disagree with any part of these Terms, please do not use our services.
                    </p>

                    {/* 3. Age Restrictions and Eligibility */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        3. Age Restrictions and Eligibility
                    </h2>
                    <h3 className="responsive-subheading mb-2 text-[var(--color-dark-gray)]">
                        3.1 Minimum Age Requirements
                    </h3>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        You must be at least 13 years old to use VoiceZon.
                        If you are between 13 and 18 years old, you must have your parent or legal guardian’s permission, have them review and accept these Terms on your behalf, and use VoiceZon under adult supervision.
                    </p>
                    <h3 className="responsive-subheading mb-2 text-[var(--color-dark-gray)]">
                        3.2 User Responsibility
                    </h3>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        By using VoiceZon, you represent and warrant that:
                        <br />• You are at least 13 years old.
                        <br />• If you are between 13 and 18 years old, you have obtained parental or legal guardian permission.
                        <br />• You have provided truthful and accurate information about your age.
                        <br />• You understand that VoiceZon reserves the right to terminate any account if you have misrepresented your age.
                    </p>
                    <h3 className="responsive-subheading mb-2 text-[var(--color-dark-gray)]">
                        3.3 Parent/Guardian Responsibility
                    </h3>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        For users between 13 and 18 years old, the parent or legal guardian must review these Terms and our Privacy Policy, accept responsibility for the minor's compliance with these Terms, all activities under the minor's account, any payments or charges associated with the account, and ensure that appropriate professional mental health care is sought when needed.
                    </p>

                    {/* 4. User Accounts */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        4. User Accounts
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        To create an account, you must provide a valid email address and may be required to supply additional personal information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must immediately notify us of any unauthorized use of your account.
                    </p>

                    {/* 5. Subscriptions and Payment */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        5. Subscriptions and Payment
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        VoiceZon offers free and subscription-based coaching sessions. Subscription payments are processed securely via our payment partners and are subject to their respective Terms of Service and Privacy Policies. Please review our refund policy for details on subscription cancellation, pro-rated refunds within the initial subscription period, and billing practices.
                    </p>

                    {/* 6. Mandatory Acknowledgments */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        6. Mandatory Acknowledgments
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        By using VoiceZon, you explicitly acknowledge and agree that:
                    </p>
                    <ul className="list-disc ml-8 mb-4 text-[var(--color-dark-gray)]">
                        <li>
                            VoiceZon is NOT a substitute for professional mental health treatment, a crisis intervention service, or a suicide prevention service. It is not staffed by human mental health professionals, cannot diagnose or treat any medical or mental health condition, and is not intended to prevent or treat emergencies.
                        </li>
                        <li>
                            You understand that VoiceZon uses artificial intelligence technology that has inherent limitations. The AI may provide incorrect, inappropriate, or harmful responses. You use VoiceZon entirely at your own risk, and no specific outcomes or benefits are guaranteed.
                        </li>
                        <li>
                            You are solely responsible for all decisions and actions taken based on interactions with VoiceZon, and VoiceZon does not monitor your conversations in real-time.
                        </li>
                    </ul>

                    {/* 7. Liability Waiver and Release */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        7. Liability Waiver and Release
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        To the maximum extent permitted by law, you:
                    </p>
                    <ul className="list-disc ml-8 mb-4 text-[var(--color-dark-gray)]">
                        <li>
                            EXPRESSLY WAIVE AND RELEASE VoiceZon, its owners, employees, contractors, partners, and affiliates from any and all liability, claims, causes of action, damages, costs, or expenses arising from your use of the service, any decisions or actions you take based on interactions with the AI, or any harm or damages (including death) related to using or following advice from VoiceZon.
                        </li>
                        <li>
                            AGREE TO INDEMNIFY AND HOLD HARMLESS VoiceZon and its affiliates against any claims, damages, or expenses (including legal fees) arising from your violation of these Terms, your use of the service, or any harm to yourself or others related to your use of VoiceZon.
                        </li>
                    </ul>

                    {/* 8. Privacy and Data Protection */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        8. Privacy and Data Protection
                    </h2>
                    <h3 className="responsive-subheading mb-2 text-[var(--color-dark-gray)]">
                        8.1 Data Collection and Storage
                    </h3>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        All conversations are encrypted end-to-end using industry-standard encryption. Data is stored securely using modern database technologies with robust security measures including row-level security, encrypted backups, and TLS 1.3 for all data transmissions. Authentication tokens and sensitive credentials are never stored in client-side storage.
                    </p>
                    <h3 className="responsive-subheading mb-2 text-[var(--color-dark-gray)]">
                        8.2 Use of Conversation Data
                    </h3>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        By using VoiceZon, you grant us permission to store and process your conversation data, use anonymized data for service improvement, share anonymized data with research partners, analyze conversations for quality assurance, and create secure database backups.
                    </p>
                    <h3 className="responsive-subheading mb-2 text-[var(--color-dark-gray)]">
                        8.3 Data Access and Deletion
                    </h3>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        You may request access to your data at any time. Data deletion requests will be honored within 30 days and executed across all systems and backups, except where retention is required by law. In cases of abuse or legal obligation, deletion requests may be denied.
                    </p>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        For full details, please refer to our Privacy Policy.
                    </p>

                    {/* 9. Communication */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        9. Communication
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        By signing up, you consent to receive emails regarding service updates, feedback requests, and promotional content. You may opt out of promotional emails via the instructions provided in the emails; however, service-related emails cannot be opted out of while you maintain an account.
                    </p>

                    {/* 10. Intellectual Property */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        10. Intellectual Property
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        VoiceZon retains all rights to the app’s content, features, and proprietary technology. You retain ownership of your original content provided during interactions, but you grant VoiceZon a non-exclusive, worldwide license to use your content for service improvement, research and development, quality assurance, and marketing (with additional consent as required).
                    </p>

                    {/* 11. Prohibited Uses */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        11. Prohibited Uses
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        You agree not to:
                    </p>
                    <ul className="list-disc ml-8 mb-4 text-[var(--color-dark-gray)]">
                        <li>Use VoiceZon for any illegal purpose.</li>
                        <li>Attempt to gain unauthorized access to any part of the service.</li>
                        <li>Use the app to harass, abuse, or harm others.</li>
                        <li>Impersonate any person or entity.</li>
                        <li>Interfere with or disrupt the functionality of VoiceZon.</li>
                        <li>Attempt to reverse engineer the service or create competing services using our data.</li>
                        <li>Automate or scrape content, or share account credentials.</li>
                    </ul>

                    {/* 12. Service Limitations and Modifications */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        12. Service Limitations and Modifications
                    </h2>
                    <h3 className="responsive-subheading mb-2 text-[var(--color-dark-gray)]">
                        12.1 Technical Limitations
                    </h3>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        The AI may provide incorrect or inappropriate responses. Service availability is not guaranteed, performance may vary, and features may change without notice.
                    </p>
                    <h3 className="responsive-subheading mb-2 text-[var(--color-dark-gray)]">
                        12.2 Content Limitations
                    </h3>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        The AI cannot provide medical advice, and its responses are generated by algorithms rather than human professionals. As such, no guarantee of accuracy or appropriateness is provided.
                    </p>

                    {/* 13. Termination */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        13. Termination
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        VoiceZon reserves the right to terminate or suspend your access without prior notice or liability, for any reason in our sole discretion, including but not limited to violations of these Terms, compliance with legal obligations, or account inactivity.
                    </p>

                    {/* 14. Accessibility */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        14. Accessibility
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        We strive to make our services accessible to all users. If you have any specific accessibility needs or concerns, please contact our support team for assistance. We welcome your feedback on how we can improve accessibility.
                    </p>

                    {/* 15. Third-Party Links */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        15. Third-Party Links
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        Our application may include links to third-party websites or resources. VoiceZon is not responsible for the content, privacy practices, or terms of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>

                    {/* 16. Updates to Terms */}
                    <h2 className="responsive-subheading mb-4 text-[var(--color-dark-gray)]">
                        16. Updates to Terms
                    </h2>
                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        We may modify these Terms at any time. Changes are effective immediately upon posting, and continued use of VoiceZon constitutes your acceptance of any changes. Material modifications will be notified via email.
                    </p>

                    <p className="responsive-text mb-4 text-[var(--color-dark-gray)]">
                        <br />VoiceZon Inc.
                        <br />For privacy-related inquiries, please email: info@voicezon.ai
                    </p>

                </div>
            </section>
        </>
    );
}