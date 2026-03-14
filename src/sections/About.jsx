import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-slate-800 text-white py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
      <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
      >

        <h2 className="text-4xl font-bold mb-10 text-orange-400">
          About Me
        </h2>

        <p className="text-gray-300 max-w-2xl mb-10">
          I am a passionate software developer currently pursuing B.Tech.
          I enjoy building full stack applications using modern technologies
          like React, Node.js, and MongoDB. I love solving problems and
          creating user-friendly applications.
        </p>

        <div className="grid grid-cols-3 gap-10">

          <div className="bg-slate-700 p-6 rounded-lg text-center hover:bg-slate-600 transition">
            <h3 className="text-3xl font-bold text-orange-400">10+</h3>
            <p className="mt-2 text-gray-300">Projects</p>
          </div>

          <div className="bg-slate-700 p-6 rounded-lg text-center hover:bg-slate-600 transition">
            <h3 className="text-3xl font-bold text-orange-400">3+</h3>
            <p className="mt-2 text-gray-300">Technologies</p>
          </div>

          <div className="bg-slate-700 p-6 rounded-lg text-center hover:bg-slate-600 transition">
            <h3 className="text-3xl font-bold text-orange-400">1+</h3>
            <p className="mt-2 text-gray-300">Years Learning</p>
          </div>

        </div>

      </motion.div>
      </div>
    </section>
  );
}

export default About;