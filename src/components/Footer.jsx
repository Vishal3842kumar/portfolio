import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Let's Connect
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>

          <div className="flex justify-center gap-8 text-3xl mb-8">
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Vishal3842kumar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-all duration-300"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/vishal-kumar-1a6811283/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-all duration-300"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:vishal3842kumar@gmail.com"
              className="hover:text-orange-400 transition-all duration-300"
            >
              <FaEnvelope />
            </motion.a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500 flex items-center justify-center gap-2">
              Made with <FaHeart className="text-red-500" /> by Vishal Kumar
            </p>
            <p className="text-gray-600 mt-2">&copy; 2026 All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;