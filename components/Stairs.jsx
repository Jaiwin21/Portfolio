import { motion } from "framer-motion";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const totalSteps = 6;

const Stairs = () => {
  return (
    <>
      {Array.from({ length: totalSteps }, (_, index) => {
        // Calculate delay for each step
        const delay = (totalSteps - index - 1) * 0.1;

        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay,
            }}
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "rgb(0, 255, 153)",
              position: "relative",
            }}
          />
        );
      })}
    </>
  );
};

export default Stairs;