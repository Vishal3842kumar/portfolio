import { motion } from "framer-motion";

function Projects() {
return (

<section id="projects" className="bg-slate-900 text-white py-24 scroll-mt-24">
  <div className="max-w-6xl mx-auto px-6 md:px-10">
    <h2 className="text-4xl font-bold text-orange-400 mb-12">
Projects
</h2>

<div className="grid md:grid-cols-3 gap-10">

<motion.div whileHover={{scale:1.05}} className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition">

<h3 className="text-xl font-bold mb-3">
Donation Platform
</h3>

<p className="text-gray-400">
Full stack donation platform with JWT authentication and Stripe payment integration.
Built using React, Node.js, Express and MongoDB.
</p>
<div className="mt-4 flex gap-4">

<a 
href="https://github.com/Vishal3842kumar/Donation-Platform"
target="_blank"
rel="noreferrer"
className="text-orange-400"
>
Github Repo
</a>

</div>
</motion.div>


<motion.div whileHover={{scale:1.05}} className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition">

<h3 className="text-xl font-bold mb-3">
Club Membership System
</h3>

<p className="text-gray-400">
Web application to manage club memberships, dues and events.
Built using HTML, Tailwind CSS, PHP and MySQL.
</p>

<div className="mt-4 flex gap-4">

<a 
href="https://github.com/2Surajagrahari/Club-Membership-System"
target="_blank"
rel="noreferrer"
className="text-orange-400"
>
Github Repo
</a>

</div>

</motion.div>


<motion.div whileHover={{scale:1.05}} className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition">

<h3 className="text-xl font-bold mb-3">
Social Media for Book Lovers
</h3>

<p className="text-gray-400">
Responsive platform where users can explore books and join reading communities.
Built using HTML, CSS and JavaScript.
</p>

<div className="mt-4 flex gap-4">

<a 
href="https://github.com/sayannayek2003/Social-Network-for-Books-Lovers-and-Reading-Groups"
target="_blank"
rel="noreferrer"
className="text-orange-400"
>
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