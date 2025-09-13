import { motion } from "framer-motion";

export default function Hero() {
  const bg = "/public/img/pre-1.jpg"; // Replace with your image path

  return (
    <section
      id="hero"
      className="relative h-[70vh] md:h-[80vh] flex items-center"
    >
      <img
        src={bg}
        alt="couple"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40" />

      <div className="relative z-10 container mx-auto px-4 text-left ">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif text-white drop-shadow-lg "
        >
          Our Pre-Wedding Moments
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.9 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-white/90 text-left"
        >
          Little chapters of our love — captured before the big day
        </motion.p>
      </div>
    </section>
  );
}
