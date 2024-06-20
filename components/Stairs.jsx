import { animate, motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
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
                            delay: reverseIndex(index) * 0.1,
                        }}
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "rgb(0, 255, 153)",
                            position: "relative"
                        }}
                    />
                );
            })}
        </>
    );
};

export default Stairs;
