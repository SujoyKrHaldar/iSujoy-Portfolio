import { motion } from "framer-motion";

const Landing_content = () => {
  const fade = {
    hidden: { opacity: 0, x: "-50%", y: "-36%", width: 350 },

    visible: {
      width: 333,
      opacity: 1,
      y: "-50%",
      transition: {
        duration: 2.6,
        delay: 2.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const container = {
    hidden: { opacity: 0, y: "-50%", x: "-25%" },
    show: {
      opacity: 1,
      x: "-10%",
      transition: {
        duration: 1.5,
        delay: 4.3,
        type: "tween",
        ease: "easeInOut",
        delayChildren: 1.3,
        staggerChildren: 1.5,
      },
    },
  };

  const header = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    transition: { duration: 1.5, type: "tween", ease: "easeOut" },
  };
  const para = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    transition: { duration: 1.5, type: "tween", ease: "easeOut" },
  };
  return (
    <>
      <div className="container py-[1rem] h-[634px] flex  justify-between">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[333px] overflow-hidden"
        >
          <motion.img
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, delay: 2, type: "tween" }}
            src="https://images.unsplash.com/photo-1601972653460-fe3048709178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </motion.div>

        <div className="w-full flex justify-start">
          <motion.p
            initial={{ opacity: 0, x: "0", y: "5%" }}
            animate={{ opacity: 1, x: "0", y: "10%" }}
            transition={{ duration: 2, delay: 4, type: "tween" }}
            className="text-[#c5c5c5] max-w-[330px] "
          >
            Hello and welcome{" "}
            <span className="block">Myself Sujoy kumar haldar.</span>
          </motion.p>
        </div>

        <div className="w-full flex justify-center items-end">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-[330px] translate-x-[-10%] translate-y-[-50%] "
          >
            <motion.h1
              variants={header}
              className="text-left mb-[1rem] text-base tracking-[0.6rem] uppercase max-w-[195px]"
            >
              Art Design Development
            </motion.h1>

            <motion.p variants={para} className="text-[#c5c5c5] ">
              I am a Full-stack developer, Frontend developer and designer and
              some times an Artist also.
            </motion.p>

            <motion.p variants={para} className="text-[#d46829] pt-[1rem]">
              Coming soon ...
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Landing_content;
