import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <nav className="absolute p-[2rem] pb-0 inset-0 z-10 bg-zinc-900 text-white h-fit">
        <motion.div
          initial={{ opacity: 0, y: "-45%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 1, delay: 4, type: "tween", ease: "easeOut" }}
          className="container py-3  flex  justify-between items-center"
        >
          <p>S-Designs</p>
          <p>Menu</p>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
