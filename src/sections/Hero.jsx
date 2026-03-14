import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import profile from "../assets/profile.jpg";


function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-slate-900 text-white min-h-screen pt-24 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20">

      <motion.div
        initial={{opacity:0, x:-80}}
        animate={{opacity:1, x:0}}
        transition={{duration:1}}
      >

        <p className="text-orange-400 text-lg">Hello 👋</p>

        <h1 className="text-5xl font-bold mt-3">
        I'm Vishal Kumar
        </h1>

        <h2 className="text-4xl font-semibold mt-3">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Web Developer',
              2000,
              'React Developer',
              2000,
              'Node.js Developer',
              2000,
              'JavaScript Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-orange-400"
          />
        </h2>

        <p className="mt-4 text-gray-400">
        React • Node.js • MongoDB • JavaScript • TypeScript
        </p>

        <div className="mt-6 flex gap-4">

          <button onClick={scrollToContact} className="bg-orange-500 px-6 py-2 rounded hover:bg-orange-600">
            Got a project?
          </button>

          <a href="/resume.pdf" download>
            <button className="border border-orange-500 px-6 py-2 rounded hover:bg-orange-500">
              My Resume
            </button>
          </a>
        </div>

          <div className="flex gap-6 mt-6 text-2xl">
          <a
            href="https://github.com/Vishal3842kumar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vishal-kumar-1a6811283/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400"
          >
            <FaLinkedin />
          </a>
        </div>

        

      </motion.div>

      <motion.div
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:1}}
        className="relative"
      >

        <div className="absolute w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-40"></div>

        <img
          src={profile}
          alt="profile"
          className="relative w-56 h-56 object-cover rounded-full border-4 border-orange-500"
        />

      </motion.div>
    </section>
  )
}

export default Hero