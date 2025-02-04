import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/utils";
import NavBar from "@/components/Nav";
import FooterWrapper from "@/components/FooterWrapper";

export const metadata: Metadata = {
  title: "Voicezon",
  description: "VoiceZon is an AI-powered personal development assistant designed to enhance soft skills, self-improvement, and life coaching through intelligent, interactive guidance.",
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "flex flex-col min-h-screen"
        )}
      >
        <NavBar />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
