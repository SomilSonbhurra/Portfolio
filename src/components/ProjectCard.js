import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transform transition"
    >
      <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t, idx) => (
          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 text-sm font-medium text-accent">View project →</div>
    </motion.a>
  );
}
