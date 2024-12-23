"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeInOut" },
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="h-screen w-screen fixed top-0 pointer-events-none"
            />
            {children}
        </AnimatePresence>
    );
};

export default PageTransition;
