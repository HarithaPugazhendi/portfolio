import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-100 px-6 pt-24">
      <motion.h1
        className="text-4xl font-bold mb-4 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Haritha 👋
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Final-year Computer Science student skilled in building scalable APIs
        and backend systems using Python, Java, Flask, and Node.js. Passionate
        about debugging, system design, and optimizing performance for
        high-reliability SaaS environments.
      </motion.p>
    </section>
  );
}

export default Home;
