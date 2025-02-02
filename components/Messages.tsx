"use client";
import { cn } from "@/utils";
import { useVoice } from "@humeai/voice-react";
import Expressions from "./Expressions";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentRef, forwardRef } from "react";

const Messages = forwardRef<
  ComponentRef<typeof motion.div>,
  Record<never, never>
>(function Messages(_, ref) {
  const { messages } = useVoice();

  return (
    <motion.div
      layoutScroll
      className="grow rounded-xl overflow-auto p-6 backdrop-blur-sm"
      ref={ref}
    >
      <motion.div className="max-w-3xl mx-auto w-full flex flex-col gap-6 pb-24">
        <AnimatePresence mode="popLayout">
          {messages.map((msg, index) => {
            if (msg.type === "user_message" || msg.type === "assistant_message") {
              return (
                <motion.div
                  key={msg.type + index}
                  className={cn(
                    "w-[85%]",
                    "backdrop-blur-md",
                    "border border-border/40",
                    "rounded-2xl shadow-lg",
                    "transition-all duration-300",
                    msg.type === "user_message" 
                      ? "ml-auto bg-[var(--color-dark-teal)]/5" 
                      : "bg-card/95"
                  )}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                >
                  <div className="text-sm font-medium leading-none opacity-70 pt-4 px-5">
                    {msg.message.role === "user" ? "You" : "Assistant"}
                  </div>
                  <div className="py-4 px-5 text-lg">{msg.message.content}</div>
                  <Expressions values={{ ...msg.models.prosody?.scores }} />
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
});

export default Messages;
