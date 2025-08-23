import React from "react";
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

        {/* Professional Experience */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-main border-2 border-border flex items-center justify-center flex-shrink-0">
                      <Icon className="text-main-foreground" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-foreground/80 font-semibold">{exp.company} • {exp.location}</p>
                        </div>
                        <span className="text-sm text-main font-semibold bg-main/20 px-3 py-1 rounded border border-border">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-foreground/70 text-sm mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-main/10 text-foreground text-xs rounded border border-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>


        {/* Skills Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <h3 className="font-bold text-lg mb-4 text-main">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-main rounded-full"></div>
                      <span className="text-foreground/80 text-sm">{skill}</span>
                    </div>
                  ))}
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
