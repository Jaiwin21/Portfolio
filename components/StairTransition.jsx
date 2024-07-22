"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* Wrapper div to ensure all content is animated as a single unit */}
      <motion.div
        key={pathname}
        className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
        transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
      >
        <Stairs />
      </motion.div>

      {/* Separate animation for background fade effect */}
      <motion.div
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-30"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
        transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
};

export default StairTransition;