import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";

export default function StartCall() {
  const { status, connect } = useVoice();

  return (
    <AnimatePresence>
      {status.value !== "connected" && (
        <motion.div
          className="fixed inset-0 p-4 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="text-center"
          >
            <Button
              className="flex items-center gap-3 px-8 py-6 rounded-2xl bg-[var(--color-dark-teal)] 
                       hover:bg-[var(--color-dark-teal)]/90 transform hover:scale-105 
                       transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                connect()
                  .then(() => { })
                  .catch(() => { })
                  .finally(() => { });
              }}
            >
              <span className="text-lg">Start Conversation</span>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Click to start a new voice conversation
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
