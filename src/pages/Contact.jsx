import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-100 py-20 px-6 pt-28">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Get in Touch 💌
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - contact info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <h3 className="text-2xl font-semibold text-sky-700">Let's Connect!</h3>
          <p className="text-gray-700">
            Feel free to reach out for collaborations, opportunities, or any questions.
            I’d love to hear from you!
          </p>

          <div className="flex items-center gap-3">
            <Mail className="text-sky-600" />
            <a
              href="mailto:harithadp2005@gmail.com"
              className="text-gray-800 hover:text-sky-600"
            >
              harithadp2005@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Linkedin className="text-sky-600" />
            <a
              href="https://www.linkedin.com/in/haritha-pugazhendi-3ab163253"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-sky-600"
            >
              linkedin.com/in/haritha-pugazhendi
            </a>
          </div>
        </motion.div>

        {/* Right side - contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg font-medium transition w-full"
          >
            <Send size={18} /> Send Message
          </button>

          {submitted && (
            <p className="text-green-600 font-medium text-center mt-2">
              ✅ Message submitted successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
