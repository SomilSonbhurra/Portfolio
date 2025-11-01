import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiPhone className="text-accent text-3xl" />,
      title: "Phone",
      value: "+91 7089817446",
      link: "tel:+917089817446",
    },
    {
      icon: <FiMail className="text-accent text-3xl" />,
      title: "Email",
      value: "somilsonbhurra@gmail.com",
      link: "mailto:somilsonbhurra@gmail.com",
    },
    {
      icon: <FiMapPin className="text-accent text-3xl" />,
      title: "Address",
      value: "Indus Satellite, Dewas Naka, Indore",
      link: "https://maps.google.com?q=Indus+Satellite,+Dewas+Naka,+Indore",
    },
  ];

  return (
    <section className="min-h-[92vh] flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50 pt-24 pb-16">
      <div className="max-w-5xl w-full px-6 text-center">
        {/* Title & Description */}
        <motion.h2
          className="text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I’m open to freelance projects, collaborations, or full-time roles.  
          Drop a message and let’s create something awesome together.
        </motion.p>

        {/* Floating Contact Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {contactInfo.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition transform border border-gray-100"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="mailto:somilsonbhurra@gmail.com"
            className="bg-accent text-white px-6 py-3 rounded-lg shadow hover:scale-[1.03] transition"
          >
            Email Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
