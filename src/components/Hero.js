import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[92vh] flex items-center bg-gradient-to-r from-[#f8f9fa] to-[#edf2f4] pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative group">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary/10">
              <img
                src="../assets/somil.jpg"
                alt="Profile"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-1 rounded-md shadow-md text-sm">
              MERN Developer 💻
            </div>
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight">
            Hi, I'm <span className="text-accent">Somil Sonbhurra</span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-xl">
            A passionate <span className="font-semibold text-primary">Full Stack Developer</span> who loves building modern, responsive, and dynamic web applications using
            <span className="text-accent"> React.js</span>, <span className="text-accent">Node.js</span>, <span className="text-accent">Express</span>, and <span className="text-accent">MongoDB</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg shadow-lg hover:scale-[1.03] transform transition"
            >
              View My Work
            </a>

            <a
              href="/resume"
              download="public/resume.pdf"
              className="inline-block border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex justify-center md:justify-start gap-6 text-gray-600 text-2xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-accent transition"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
