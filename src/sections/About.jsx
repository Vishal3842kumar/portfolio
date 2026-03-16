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

        <p className="text-gray-300 max-w-3xl mb-12 leading-relaxed">
          I'm a passionate full-stack developer with expertise in modern web technologies.
          Currently pursuing B.Tech in Computer Science, I love creating innovative solutions
          and user-friendly applications. My journey in tech has equipped me with strong
          problem-solving skills and a keen eye for detail. When I'm not coding, you'll find
          me exploring new technologies or contributing to open-source projects.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-700 p-6 rounded-lg text-center border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition"
          >
            <h3 className="text-3xl font-bold text-orange-400">5+</h3>
            <p className="mt-2 text-gray-300">Projects Completed</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-700 p-6 rounded-lg text-center border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition"
          >
            <h3 className="text-3xl font-bold text-orange-400">3+</h3>
            <p className="mt-2 text-gray-300">Technologies Mastered</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-700 p-6 rounded-lg text-center border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition"
          >
            <h3 className="text-3xl font-bold text-orange-400">5+</h3>
            <p className="mt-2 text-gray-300">Certifications</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-700 p-6 rounded-lg text-center border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition"
          >
            <h3 className="text-3xl font-bold text-orange-400">50+</h3>
            <p className="mt-2 text-gray-300">GitHub Commits</p>
          </motion.div>

        </div>

        

      </motion.div>
      </div>
    </section>
  );
}

export default About;