import React from "react";
import { motion } from "motion/react";
import { FaBriefcase } from "react-icons/fa";
import { SiPython, SiTensorflow, SiPytorch, SiKaggle } from "react-icons/si";

const ExperiencePage = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior AI/ML Engineer",
      company: "King (Microsoft Gaming Studios)",
      location: "London, United Kingdom",
      period: "May 2024 - Present",
      description: "Led development of VertexAI deep learning models for LTV prediction in Candy Crush. Built personalized difficulty adjustment system driving measurable engagement and revenue uplifts through A/B testing.",
      skills: ["VertexAI", "Deep Learning", "LightGBM", "LTV Prediction", "A/B Testing", "Expected Value Framework", "Personalisation"],
      icon: FaBriefcase
    },
    {
      type: "work",
      title: "Lead Data Scientist",
      company: "EasyJet",
      location: "Luton, United Kingdom",
      period: "Oct 2021 - May 2024",
      description: "Delivered £20M+ incremental revenue through cross-functional team leadership. Pioneered MLOps capability and created product roadmap with £7M+ forecasted annual revenue.",
      skills: ["Team Leadership", "MLOps", "Cross-functional Collaboration", "Product Roadmap", "Innovation Management"],
      icon: FaBriefcase
    },
    {
      type: "work",
      title: "Senior Data Scientist",
      company: "EasyJet",
      location: "Luton, United Kingdom",
      period: "Aug 2020 - Oct 2021",
      description: "Generated £3.7M revenue during COVID-19 through end-to-end ML projects. Established ML engineering best practices including CI/CD and monitoring systems.",
      skills: ["Technical Leadership", "ML Engineering", "CI/CD", "Test-driven Development", "Post-deployment Monitoring"],
      icon: FaBriefcase
    },
    {
      type: "work",
      title: "Data Scientist",
      company: "EasyJet",
      location: "Luton, United Kingdom",
      period: "Apr 2019 - Aug 2020",
      description: "Built survival analysis models for customer lifetime prediction and automated web-scraping systems for flight delay analysis using Python.",
      skills: ["Survival Analysis", "Customer Retention", "Web Scraping", "BeautifulSoup", "Selenium", "Python"],
      icon: FaBriefcase
    },
    {
      type: "work",
      title: "Data Scientist Consultant",
      company: "Profusion Ltd",
      location: "London, United Kingdom",
      period: "Oct 2017 - Sep 2018",
      description: "Developed impactful data products through university partnership, solving real-world data science challenges for London-based consultancy.",
      skills: ["Data Science", "Consulting", "Product Development", "Python", "Machine Learning"],
      icon: FaBriefcase
    },
    {
      type: "work",
      title: "Research Analyst (Internship)",
      company: "Children Services",
      location: "United Kingdom",
      period: "2018",
      description: "Created predictive models to identify at-risk children, enabling early intervention by Council social workers through advanced ML techniques in R.",
      skills: ["Predictive Modeling", "Lasso Regression", "Random Forest", "SVM", "R", "Social Impact", "Child Protection"],
      icon: FaBriefcase
    }
  ];



  const skills = {
    "Programming": ["Python", "R", "SQL", "PySpark", "Scala", "Git"],
    "Machine Learning": ["Regression", "Classification", "Clustering", "XGBoost", "Deep Learning", "NLP", "Computer Vision"],
    "MLOps & Infrastructure": ["VertexAI", "Docker", "Kubernetes", "CI/CD", "MLFlow", "Prefect", "Model Monitoring", "Data Drift"],
    "Cloud Platforms": ["GCP", "AWS", "Azure", "Databricks", "BigQuery", "Snowflake"],
    "Data Engineering": ["Apache Spark", "Kafka", "Airflow", "ETL Pipelines", "Data Warehousing"],
    "Frameworks & Tools": ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "Git/GitHub"],
    "Specializations": ["Recommender Systems", "A/B Testing", "Survival Analysis", "Time Series", "Personalization", "LTV Prediction"],
    "Leadership & Business": ["Team Leadership", "Cross-functional Collaboration", "Stakeholder Management", "Product Strategy", "Agile/Scrum"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-foreground/70 text-lg">My professional journey in machine learning and data science</p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-border"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-12 h-12 rounded-full bg-chart-5 border-4 border-background flex items-center justify-center">
                    <FaBriefcase className="text-main-foreground" size={20} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-left pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-main font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-foreground/80 font-semibold mb-2">{exp.company} • {exp.location}</p>
                    <p className="text-foreground/70 text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-chart-5/20 text-foreground text-xs rounded border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default ExperiencePage;
