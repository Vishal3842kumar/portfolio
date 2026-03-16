import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import profile from "../assets/profile.png";


function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen pt-24 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 relative overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

      <motion.div
        initial={{opacity:0, x:-80}}
        animate={{opacity:1, x:0}}
        transition={{duration:1}}
        className="relative z-10"
      >

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1, delay:0.2}}
          className="text-orange-400 text-lg font-medium mb-2"
        >
          Hello 👋, I'm
        </motion.p>

        <motion.h1
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, delay:0.4}}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent"
        >
        Vishal Kumar
        </motion.h1>

        <motion.h2
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, delay:0.6}}
          className="text-3xl md:text-4xl font-semibold mt-4"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'React Developer',
              2000,
              'Node.js Developer',
              2000,
              'Problem Solver',
              2000,
              'Tech Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-orange-400"
          />
        </motion.h2>

        <motion.p
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, delay:0.8}}
          className="mt-6 text-gray-300 text-lg max-w-lg leading-relaxed"
        >
        Crafting digital experiences with modern technologies.
        Specialized in React, Node.js, MongoDB, and creating scalable web applications.
        </motion.p>

        <motion.div
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, delay:1}}
          className="mt-8 flex gap-4 flex-wrap"
        >

          <button onClick={scrollToContact} className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
            Get In Touch
          </button>

          <a href="/resume.pdf" download>
            <button className="border-2 border-orange-500 px-8 py-3 rounded-lg hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300">
              Download CV
            </button>
          </a>
        </motion.div>

          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay:1.2}}
            className="flex gap-6 mt-8 text-2xl"
          >
          <a
            href="https://github.com/Vishal3842kumar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transform hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vishal-kumar-1a6811283/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transform hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
        </motion.div>

      </motion.div>

      <motion.div
        initial={{scale:0, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{duration:1, delay:0.5, ease: "easeOut"}}
        className="relative z-10"
      >

        <div className="absolute w-80 h-80 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={profile}
          alt="Vishal Kumar - Full Stack Developer"
          className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-orange-500 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
        />

      </motion.div>
    </section>
  )
}

export default Hero