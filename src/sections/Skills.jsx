import { motion } from "framer-motion";
import { FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGit, FaDocker, FaHtml5 } from "react-icons/fa";
import { SiCplusplus, SiC, SiTypescript, SiExpress, SiMongodb, SiMysql, SiFirebase, SiPostman, SiCss, SiTailwindcss, SiSpringboot } from "react-icons/si";

function Skills() {

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <SiC /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <SiCss /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "React.js", icon: <FaReact /> }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <FaGit /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Postman", icon: <SiPostman /> }
    ]
  }
]

return (
<section id="skills" className="bg-slate-800 text-white py-24 scroll-mt-24">
  <div className="max-w-6xl mx-auto px-6 md:px-10">
    <motion.h2
  initial={{opacity:0, y:50}}
  whileInView={{opacity:1, y:0}}
  transition={{duration:1}}
  className="text-4xl font-bold text-orange-400 mb-12"
>
Skills
</motion.h2>

    <div className="flex flex-wrap gap-8 justify-center">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.8, delay: categoryIndex * 0.2}}
          className="bg-slate-700 p-4 sm:p-6 rounded-lg flex-1 min-w-[250px] sm:min-w-[280px] max-w-[320px] border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold text-orange-300 mb-6 text-center">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{opacity:0, scale:0.8}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration:0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1)}}
                className="bg-slate-600 p-3 rounded text-center hover:bg-orange-500 transition flex flex-col items-center min-w-[80px]"
              >
                <div className="text-2xl mb-1">{skill.icon}</div>
                <span className="text-xs">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
)
}

export default Skills