"use client";
import { useVoice } from "@humeai/voice-react";
import { Button } from "./ui/button";
import { Mic, MicOff, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Toggle } from "./ui/toggle";
import MicFFT from "./MicFFT";
import { cn } from "@/utils";

export default function Controls() {
  const { disconnect, status, isMuted, unmute, mute, micFft } = useVoice();

  const handleDisconnect = async () => {
    try {
      await disconnect();
      // Optional: Add any success handling here
    } catch (error) {
      console.error("Failed to disconnect:", error);
      // Optional: Add error handling UI feedback here
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 flex items-center justify-center bg-gradient-to-t from-background via-background/95 to-transparent">
      <AnimatePresence>
        {status.value === "connected" && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="p-3 bg-card/90 backdrop-blur-lg border border-border/40 rounded-xl shadow-xl 
                     flex items-center gap-4 hover:border-border/60 transition-all duration-300"
          >
            <Toggle
              pressed={!isMuted}
              onPressedChange={() => isMuted ? unmute() : mute()}
              className="transition-transform hover:scale-105"
            >
              {isMuted ? (
                <MicOff className="size-4 text-destructive" />
              ) : (
                <Mic className="size-4 text-[var(--color-dark-teal)]" />
              )}
            </Toggle>

            <div className="relative h-8 w-48 shrink grow-0 rounded-lg overflow-hidden">
              <MicFFT fft={micFft} className="fill-[var(--color-dark-teal)]" />
            </div>

            <Button
              onClick={handleDisconnect}
              variant="primary"
              className="flex items-center gap-2 px-4 hover:scale-105 transition-transform bg-destructive hover:bg-destructive/90"
            >
              <Phone className="size-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
