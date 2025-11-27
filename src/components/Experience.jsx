import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#D7C9FF]/40">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 px-6">

        {/* Research & Development Engineer — Missouri S&T */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
            Research & Development Engineer — Missouri S&T
          </h3>
          <p className="text-gray-500 mt-1">Jul 2025 – Present | Rolla, MO</p>

          <p className="text-gray-700 mt-3 leading-relaxed">
            Building AI-driven data pipelines, automation scripts, and intelligent 
            web-scraping tools using Python, ML models, BeautifulSoup, and Selenium.
            Designing scalable data-processing workflows for cleaning, transforming, 
            and preparing large datasets. Improving automation and execution time of 
            research workflows by optimizing preprocessing and pipeline performance.
          </p>
        </motion.div>

        {/* Website Developer — Missouri S&T */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
            Website Developer — Missouri S&T
          </h3>
          <p className="text-gray-500 mt-1">Sep 2024 – May 2025 | Rolla, MO</p>

          <p className="text-gray-700 mt-3 leading-relaxed">
            Developed and maintained research-focused websites using HTML, CSS, 
            JavaScript, PHP, and WordPress. Improved website performance through 
            caching, image optimization, lazy loading, and responsive layouts. 
            Built custom templates and reusable components to streamline updates. 
            Collaborated with faculty and students to present robotics research, 
            publications, and project details clearly and effectively.
          </p>
        </motion.div>

        {/* Advanced Associate Software Engineer — Accenture */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
            Advanced Associate Software Engineer — Accenture
          </h3>
          <p className="text-gray-500 mt-1">Jul 2022 – Jul 2023 | Hyderabad, India</p>

          <p className="text-gray-700 mt-3 leading-relaxed">
            Developed full-stack applications using Java, Spring Boot, React, and 
            microservices architecture. Built and integrated RESTful APIs, enhanced database 
            performance with optimized PostgreSQL queries, indexing, and schema tuning. 
            Collaborated in Agile sprints, code reviews, and CI/CD pipelines using Jenkins, 
            Docker, Git, and DevOps tools. Improved reliability through JUnit testing and 
            Selenium automation.
          </p>
        </motion.div>

        {/* Web Developer Intern — Verzeo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
            Web Developer Intern — Verzeo
          </h3>
          <p className="text-gray-500 mt-1">Jun 2020 – Aug 2020 | Hyderabad, India</p>

          <p className="text-gray-700 mt-3 leading-relaxed">
            Built responsive web applications and translated UI designs into 
            production-ready components. Improved delivery timelines by developing 
            modular, scalable features. Led a team of 13 interns using Agile processes, 
            coordinating tasks, debugging issues, and integrating third-party APIs for 
            consistent multi-device performance.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
