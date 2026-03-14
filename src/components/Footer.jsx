import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
        <p className="text-gray-400 mb-6">Feel free to reach out for collaborations or opportunities.</p>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com/Vishal3842kumar" target="_blank" rel="noreferrer" className="hover:text-orange-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vishal-kumar-1a6811283/" target="_blank" rel="noreferrer" className="hover:text-orange-400">
            <FaLinkedin />
          </a>
          <a href="mailto:vishal3842kumar@gmail.com" className="hover:text-orange-400">
            <FaEnvelope />
          </a>
        </div>
        <p className="mt-6 text-gray-500">&copy; 2024 Vishal Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;