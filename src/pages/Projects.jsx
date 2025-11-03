import React from "react";
import projectsData from "../data/projectsData";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="min-h-screen bg-gray-100 py-20 px-6 pt-28">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        My Projects 💻
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-sky-600 mb-2">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{proj.duration}</p>
            <p className="text-gray-700 mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
