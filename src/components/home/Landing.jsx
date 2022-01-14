import { motion } from "framer-motion";

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

  const fade = {
    hidden: { opacity: 0, x: "-50%", y: "-36%", width: 350 },

    visible: {
      width: 333,
      opacity: 1,

      y: "-50%",
      transition: {
        duration: 2.8,
        delay: 2.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
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

        <div className="container py-3 h-[634px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[333px] overflow-hidden"
          >
            <motion.img
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, delay: 3.1, type: "tween" }}
              src="https://images.unsplash.com/photo-1601972653460-fe3048709178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Landing;
