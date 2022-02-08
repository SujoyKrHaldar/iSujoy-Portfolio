import { motion } from "framer-motion";
import Landing_content from "./components/Landing_content";

const Landing = () => {
  const variants = {
    hidden: { opacity: 0, x: "-50%", y: "-50%" },

    visible: {
      opacity: [0, 1, 0],
      y: ["-50%", "-50%", "-200%"],
      transition: {
        duration: 2.5,

        delay: 0.8,
        type: "spring",
        bounce: 2,
      },
    },
  };
  const transition = { duration: 4, ease: "easeInOut" };
  return (
    <>
      <section className="bg-zinc-900 text-white">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          className="absolute z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-base tracking-[1rem] uppercase"
        >
          Welcome
        </motion.h1>

        <Landing_content />
      </section>
    </>
  );
};

export default Landing;
