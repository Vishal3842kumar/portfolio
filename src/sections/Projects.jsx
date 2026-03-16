import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
return (

<section id="projects" className="bg-slate-900 text-white py-24 scroll-mt-24">
  <div className="max-w-6xl mx-auto px-6 md:px-10">
    <h2 className="text-4xl font-bold text-orange-400 mb-12">
Projects
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<motion.div whileHover={{scale:1.05, y:-5}} className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition-all duration-300 group">

<h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
Donation Platform
</h3>

<p className="text-gray-400 mb-4">
Full stack donation platform with JWT authentication and Stripe payment integration.
Built using React, Node.js, Express and MongoDB.
</p>

<div className="flex flex-wrap gap-2 mb-4">
  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">React</span>
  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">Node.js</span>
  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">MongoDB</span>
  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">Stripe</span>
</div>

<div className="flex gap-4">

<a
href="https://github.com/Vishal3842kumar/Donation-Platform"
target="_blank"
rel="noreferrer"
className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
>
<FaGithub className="text-sm" />
Github Repo
</a>

<a
href="https://donation-platform-gv4x.vercel.app/"
target="_blank"
rel="noreferrer"
className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
>
<FaExternalLinkAlt className="text-sm" />
Live Demo
</a>

</div>
</motion.div>


<motion.div whileHover={{scale:1.05, y:-5}} className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition-all duration-300 group">

<h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
Club Membership System
</h3>

<p className="text-gray-400 mb-4">
Web application to manage club memberships, dues and events.
Built using HTML, Tailwind CSS, PHP and MySQL.
</p>

<div className="flex flex-wrap gap-2 mb-4">
  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">PHP</span>
  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">MySQL</span>
  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
</div>

<div className="flex gap-4">

<a
href="https://github.com/2Surajagrahari/Club-Membership-System"
target="_blank"
rel="noreferrer"
className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
>
<FaGithub className="text-sm" />
Github Repo
</a>

</div>

</motion.div>


<motion.div whileHover={{scale:1.05, y:-5}} className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition-all duration-300 group">

<h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
Social Media for Book Lovers
</h3>

<p className="text-gray-400 mb-4">
Responsive platform where users can explore books and join reading communities.
Built using HTML, CSS and JavaScript.
</p>

<div className="flex flex-wrap gap-2 mb-4">
  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">HTML</span>
  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">CSS</span>
  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">JavaScript</span>
</div>

<div className="flex gap-4">

<a
href="https://github.com/sayannayek2003/Social-Network-for-Books-Lovers-and-Reading-Groups"
target="_blank"
rel="noreferrer"
className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
>
<FaGithub className="text-sm" />
Github Repo
</a>

</div>

</motion.div>

    </div>
  </div>
</section>

)
}

export default Projects