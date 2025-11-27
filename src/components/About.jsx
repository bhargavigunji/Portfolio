import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>

        <p className="text-gray-700 leading-relaxed">
        I’m Bhargavi Gunji, a Software Engineer and Full-Stack Developer with strong experience in Java, Spring Boot, React, and Angular.
        I enjoy building scalable backend systems, clean UI components, and cloud-ready applications across AWS, Azure, and GCP.
        </p>

        <p className="mt-4 text-gray-700">
        I currently work as a Research & Development Engineer, where I build AI-driven data pipelines, automation scripts, and intelligent web-scraping tools using Python, ML techniques, and modern web technologies. 
        I’ve also worked as a Website Developer and previously as an Advanced Associate Software Engineer at Accenture, developing microservices, REST APIs, and CI/CD pipelines.
        </p>

        <p className="mt-4 text-gray-700">

        I completed my Master’s in Computer Science and I’m actively looking for Full-Time Software Engineer / Full-Stack Developer roles where I can contribute to building impactful, high-quality software solutions.
        </p>
      </motion.div>
    </section>
  );
}
