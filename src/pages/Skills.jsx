import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 85 },
  { name: "HTML / CSS / JS", level: 80 },
  { name: "Flask / Node.js", level: 75 },
  { name: "SQL / MongoDB", level: 70 },
  { name: "Git & Linux", level: 65 },
];

function Skills() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 pt-28">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        My Skills ⚙️
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-gray-800">{skill.name}</span>
              <span className="text-gray-600">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-3">
              <motion.div
                className="bg-sky-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
