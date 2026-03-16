import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-slate-800 text-white py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-orange-400 mb-10"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-300 mb-12"
        >
          I'd love to hear from you! Feel free to reach out for collaborations, opportunities, or just to say hello.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-700 p-6 rounded-lg text-center hover:bg-slate-600 transition"
          >
            <FaEnvelope className="text-3xl text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href="mailto:vishal3842kumar@gmail.com" className="text-gray-400 hover:text-orange-400 transition">
              vishal3842kumar@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-700 p-6 rounded-lg text-center hover:bg-slate-600 transition"
          >
            <FaPhone className="text-3xl text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a href="tel:+917408331266" className="text-gray-400 hover:text-orange-400 transition">
              +91 74083 31266
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-slate-700 p-6 rounded-lg text-center hover:bg-slate-600 transition"
          >
            <FaMapMarkerAlt className="text-3xl text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-400">Varansi, Uttar Pradesh</p>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-slate-700 rounded border border-slate-600 focus:border-orange-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-slate-700 rounded border border-slate-600 focus:border-orange-400 focus:outline-none"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 bg-slate-700 rounded border border-slate-600 focus:border-orange-400 focus:outline-none mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 py-3 rounded hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;