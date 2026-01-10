import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#D7C9FF]/40">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 px-6">

        {/* Software Engineer - (AI & Data Platforms) - MST  */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
            Software Engineer (AI & Data Platforms) - Missouri S&T
          </h3>
          <p className="text-gray-500 mt-1">Jul 2025 – Present | Rolla, MO</p>

          <p className="text-gray-700 mt-3 leading-relaxed">
          Working as a Machine Learning Engineer to design and deliver production-grade data pipelines and automation systems supporting institutional AI research initiatives.
          Architected scalable end-to-end data pipelines handling 50,000+ records with high reliability, ensuring consistent data quality for downstream machine learning workflows. 
          Built high-velocity automation tools using Python, Selenium, and BeautifulSoup to extract data from dynamic web sources, improving data collection speed by 80%. 
          Optimized data ingestion and preprocessing workflows to reduce execution latency and support large-scale ML experimentation. 
          Deployed predictive machine learning models to analyze user behavior and transform raw research data into actionable insights for algorithmic decision-making.
          </p>
        </motion.div>

        {/* Website Developer — Missouri S&T */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
          Full Stack Web Engineer - Missouri S&T
          </h3>
          <p className="text-gray-500 mt-1">Sep 2024 – May 2025 | Rolla, MO</p>

          <p className="text-gray-700 mt-3 leading-relaxed">
          Led the full-cycle development of scalable, high-performance web platforms for engineering faculty, 
          with a strong focus on performance, maintainability, and technical SEO.
          Designed and implemented responsive web applications using HTML, CSS, 
          JavaScript, PHP, and MySQL, maintaining 99.9% uptime for academic and research content. 
          Improved website performance by optimizing caching strategies, implementing lazy loading, 
          and applying image compression techniques to significantly reduce page load times. 
          Developed modular templates and reusable components to streamline future development and reduce maintenance overhead. 
          Managed backend integrations, database operations, and server configurations to support secure, dynamic content delivery.
          </p>
        </motion.div>

        {/* Advanced Associate Software Engineer — Accenture */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
            Advanced Associate Software Engineer - Accenture
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
            Web Developer Intern - Verzeo
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
