import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-primary text-white">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} Somil Sonbhurra. Built with ❤️ using React & Tailwind CSS.
      </div>
    </footer>
  );
}
