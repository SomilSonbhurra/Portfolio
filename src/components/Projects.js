import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Anime Streaming Website",
    description:
      "A live anime streaming platform with smooth video playback, user authentication, and responsive UI for seamless anime browsing.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://anime-website-chi-wheat.vercel.app/",
  },
  {
    title: "Smart Future Step",
    description:
      "A platform featuring secure login/signup with MongoDB, email notifications via Nodemailer, and training program management.",
    tags: ["Express", "React", "Nodemailer"],
    link: "#",
  },
  {
    title: "Book Nook",
    description:
      "A digital book store with user authentication, Razorpay payment integration, and PDF access for registered users.",
    tags: ["MERN", "Razorpay", "UI/UX"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-[92vh] flex pt-28 pb-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-primary text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -8 }}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-xl border border-gray-200 transition"
            >
              {/* Number badge */}
              <span className="absolute top-3 right-4 text-xs font-semibold text-white bg-accent px-2 py-1 rounded-full shadow-sm">
                #{(i + 1).toString().padStart(2, "0")}
              </span>

              <h3 className="text-lg font-semibold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
