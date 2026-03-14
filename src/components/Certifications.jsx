import { motion } from "framer-motion";

function Certifications() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-orange-400 mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

        {/* Certification 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            Computational Theory: Language Principle & Finite Automata Theory
          </h3>

          <p className="text-gray-400 mb-4">
            Basics of automata theory, formal languages, and computational models.
          </p>

          <p className="text-orange-400 text-sm">
            Issued by: Infosys
          </p>

          <a
            href="https://drive.google.com/file/d/1f_2roNmsLsLDlbtn_x2IQrPYp-uN1dda/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-orange-400 hover:text-orange-300 text-sm mt-2 inline-block"
          >
            View Certificate →
          </a>
        </motion.div>

        {/* Certification 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            What is DevOps?
          </h3>

          <p className="text-gray-400 mb-4">
            Practices that integrate development and operations for faster and reliable software delivery.
          </p>

          <p className="text-orange-400 text-sm">
            Issued by: Simplilearn
          </p>

          <a
            href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjc1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDk5ODE3NV8xNzExODE3OTg1LnBuZyIsInVzZXJuYW1lIjoiVmlzaGFsIEt1bWFyIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1399748108285757954&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT64sNDELrnD3NkiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAn7mz7T8AAAA%3D"
            target="_blank"
            rel="noreferrer"
            className="text-orange-400 hover:text-orange-300 text-sm mt-2 inline-block"
          >
            View Certificate →
          </a>
        </motion.div>

        {/* Certification 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-slate-800 p-6 rounded-xl border border-orange-500 hover:shadow-orange-500/40 hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            Intro to Entrepreneurship
          </h3>

          <p className="text-gray-400 mb-4">
            Understanding of business creation, innovation, and basic startup development concepts.
          </p>

          <p className="text-orange-400 text-sm">
            Issued by: Udemy
          </p>

          <a
            href="https://drive.google.com/file/d/1CW3T7vpQXFAd_myZSsz45G5zp1kILW36/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-orange-400 hover:text-orange-300 text-sm mt-2 inline-block"
          >
            View Certificate →
          </a>
        </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Certifications;