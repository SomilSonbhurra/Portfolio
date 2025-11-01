import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Programming Languages": ["Python", "JavaScript"],
  "Web Technologies": ["HTML5", "CSS3", "JSON", "Responsive Design", "CORS"],
  "Frontend": ["React.js", "JSX", "Bootstrap"],
  "Backend": ["Node.js", "Express.js"],
  "Databases": ["MongoDB", "Mongoose"],
  "Tools & Platforms": ["Git", "GitHub", "Vercel", "Render", "Postman", "npm", "VS Code"],
};

export default function Skills() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-primary mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-primary mb-3">{category}</h3>
              <ul className="space-y-1 text-gray-700">
                {items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
