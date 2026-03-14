import { motion } from "framer-motion";
import { FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGit, FaDocker } from "react-icons/fa";
import { SiCplusplus, SiC, SiTypescript, SiExpress, SiMongodb, SiMysql, SiFirebase, SiPostman } from "react-icons/si";

function Skills() {

const skills = [
{ name: "C++", icon: <SiCplusplus /> },
{ name: "Python", icon: <FaPython /> },
{ name: "C", icon: <SiC /> },
{ name: "Java", icon: <FaJava /> },
{ name: "JavaScript", icon: <FaJs /> },
{ name: "TypeScript", icon: <SiTypescript /> },
{ name: "React.js", icon: <FaReact /> },
{ name: "Node.js", icon: <FaNodeJs /> },
{ name: "Express.js", icon: <SiExpress /> },
{ name: "MongoDB", icon: <SiMongodb /> },
{ name: "MySQL", icon: <SiMysql /> },
{ name: "Firebase", icon: <SiFirebase /> },
{ name: "Git", icon: <FaGit /> },
{ name: "Docker", icon: <FaDocker /> },
{ name: "Postman", icon: <SiPostman /> }
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

<div className="grid grid-cols-3 md:grid-cols-5 gap-6">

{skills.map((skill,index)=>(
<motion.div
key={index}
initial={{opacity:0, scale:0.8}}
whileInView={{opacity:1, scale:1}}
transition={{duration:0.5, delay: index * 0.1}}
className="bg-slate-700 p-4 rounded text-center hover:bg-orange-500 transition flex flex-col items-center"
>
<div className="text-3xl mb-2">{skill.icon}</div>
{skill.name}
</motion.div>
))}

</div>
  </div>
</section>
)
}

export default Skills