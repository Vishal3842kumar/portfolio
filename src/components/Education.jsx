import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="bg-slate-900 text-white py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-orange-400 mb-16"
        >
          Education
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Dotted Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-orange-500 transform -translate-x-1/2 opacity-50"></div>
          <div className="absolute left-1/2 top-0 h-full w-1 bg-orange-500 transform -translate-x-1/2 border-dotted border-l-2 border-orange-500"></div>

          {/* B.Tech LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-start mb-16 relative"
          >
            <div className="absolute left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-2"></div>
            <div className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition w-80 text-right shadow-lg">
              <FaGraduationCap className="text-orange-400 text-2xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-orange-400">B.Tech</h3>
              <h4 className="text-lg font-medium">Lovely Professional University</h4>
              <p className="text-gray-400">Computer Science and Engineering</p>
              <p className="text-gray-400">CGPA: 5.92</p>
              <p className="text-gray-400">Phagwara, Punjab</p>
              <p className="text-gray-400">2023 – Present</p>
            </div>
          </motion.div>

          {/* 12th RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-end mb-16 relative"
          >
            <div className="absolute right-1/2 w-4 h-4 bg-orange-500 rounded-full transform translate-x-1/2 -translate-y-2"></div>
            <div className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition w-80 text-left shadow-lg">
              <FaGraduationCap className="text-orange-400 text-2xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-orange-400">12th</h3>
              <h4 className="text-lg font-medium">Varanasi Public School</h4>
              <p className="text-gray-400">Science (PCM)</p>
              <p className="text-gray-400">Percentage: 66.7%</p>
              <p className="text-gray-400">Varanasi, Uttar Pradesh</p>
              <p className="text-gray-400">2021 - 2022</p>
            </div>
          </motion.div>

          {/* 10th LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-start relative"
          >
            <div className="absolute left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-2"></div>
            <div className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition w-80 text-right shadow-lg">
              <FaGraduationCap className="text-orange-400 text-2xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-orange-400">10th</h3>
              <h4 className="text-lg font-medium">Varanasi Public School</h4>
              <p className="text-gray-400">Matriculation</p>
              <p className="text-gray-400">Percentage: 80%</p>
              <p className="text-gray-400">Varanasi, Uttar Pradesh</p>
              <p className="text-gray-400">2019 - 2021</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Education;