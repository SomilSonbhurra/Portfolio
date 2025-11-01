import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <section className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect with Me</h2>

            <div className="flex justify-center gap-4 mt-4">
  <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
    <FaGithub className="text-2xl hover:text-gray-700" />
  </a>
  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
    <FaLinkedin className="text-2xl hover:text-blue-600" />
  </a>
  <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
    <FaInstagram className="text-2xl hover:text-pink-500" />
  </a>
</div>
        </section>
    );
};

export default SocialLinks;
