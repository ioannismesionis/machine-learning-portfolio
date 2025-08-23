import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const EducationPage = () => {
  const education = [
    {
      title: "Executive MBA",
      institution: "Quantic School of Business and Technology",
      location: "Remote",
      period: "2025 - 2026",
      description: "Currently pursuing Executive MBA focusing on business strategy, leadership, and technology management for AI/ML initiatives.",
      skills: ["Business Strategy", "Leadership", "Technology Management", "AI Strategy"]
    },
    {
      title: "Master's Studies",
      institution: "University of Essex",
      location: "Essex, UK",
      period: "2017 - 2018",
      description: "Advanced studies in computer science and data analytics, focusing on machine learning applications and statistical modeling.",
      skills: ["Data Analytics", "Statistical Modeling", "Machine Learning", "Research"]
    },
    {
      title: "Bachelor in Mathematics",
      institution: "University of Ioannina",
      location: "Ioannina, Greece",
      period: "2010 - 2015",
      description: "Graduated in top 7.3% of department. Strong foundation in mathematical analysis, statistics, and computational methods that form the basis of modern ML algorithms.",
      skills: ["Mathematics", "Statistics", "Statistical Analysis", "Computational Methods", "Research"]
    }
  ];

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
          <h1 className="text-4xl font-bold mb-4">Education</h1>
          <p className="text-foreground/70 text-lg">My academic journey and continuous learning</p>
        </motion.div>

        {/* Education Timeline */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-border"></div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-12 h-12 rounded-full bg-chart-5 border-4 border-background flex items-center justify-center">
                    <FaGraduationCap className="text-main-foreground" size={20} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-main font-semibold">{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                    <p className="text-foreground/80 font-semibold mb-2">{edu.institution} • {edu.location}</p>
                    <p className="text-foreground/70 text-sm mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {edu.skills.map((skill, skillIndex) => (
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

export default EducationPage;