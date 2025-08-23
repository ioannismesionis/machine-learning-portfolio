import React from "react";
import { motion } from "motion/react";
import { FaBriefcase } from "react-icons/fa";
import { SiPython, SiTensorflow, SiPytorch, SiKaggle } from "react-icons/si";

const ExperiencePage = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior AI/ML Data Scientist",
      company: "King",
      location: "London, United Kingdom",
      period: "Present",
      description: "Leading AI/ML initiatives for mobile gaming platform. Developing recommendation systems, predictive models for user engagement, and implementing MLOps practices for large-scale deployment.",
      skills: ["Python", "Machine Learning", "Recommender Systems", "Predictive Modeling", "MLOps"],
      icon: FaBriefcase
    },
    {
      type: "work",
      title: "Data Scientist",
      company: "EasyJet",
      location: "London, United Kingdom",
      period: "2018 - Present",
      description: "Developed data science solutions for airline operations including demand forecasting, route optimization, and customer analytics. Implemented machine learning models for pricing optimization and operational efficiency improvements.",
      skills: ["Python", "Data Analysis", "Forecasting", "Optimization", "SQL", "Business Intelligence"],
      icon: FaBriefcase
    }
  ];



  const skills = {
    "Programming": ["Python", "R", "SQL", "JavaScript", "HTML/CSS"],
    "Data Science": ["Machine Learning", "Statistical Analysis", "Predictive Modeling", "Data Mining"],
    "Visualization": ["D3.js", "Tableau", "Matplotlib", "Seaborn", "ggplot2"],
    "Specializations": ["Recommender Systems", "PPC Optimization", "Model Drift Detection", "Customer Segmentation"],
    "Languages": ["English (Professional)", "Greek (Native)", "Spanish (Elementary)"]
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
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
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
