import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-[92vh] flex justify-center items-center pt-28 pb-20 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
        <motion.h2
          className="text-4xl font-bold text-primary mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-700 leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I’m a passionate <span className="font-semibold text-accent">Full Stack Developer</span> 
          specializing in building fast, modern, and accessible web applications using the 
          <span className="font-medium text-primary"> MERN stack (MongoDB, Express, React, Node.js)</span>.  
          <br /><br />
          My work focuses on transforming complex ideas into elegant, user-friendly interfaces 
          while maintaining clean and scalable backend architectures. I enjoy solving real-world 
          problems through technology and continuously exploring new tools that enhance productivity 
          and performance.
          <br /><br />
          Outside of coding, I love experimenting with design concepts, learning new frameworks, and 
          contributing to open-source projects.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-md border-t-4 border-accent"
          >
            <h3 className="text-sm font-semibold text-gray-600">Experience</h3>
            <p className="mt-2 text-primary font-bold">6 Months (MERN Stack)</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-md border-t-4 border-accent"
          >
            <h3 className="text-sm font-semibold text-gray-600">Focus Areas</h3>
            <p className="mt-2 text-primary font-bold">React, Express, APIs</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-md border-t-4 border-accent"
          >
            <h3 className="text-sm font-semibold text-gray-600">Availability</h3>
            <p className="mt-2 text-primary font-bold">Open to Work</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
