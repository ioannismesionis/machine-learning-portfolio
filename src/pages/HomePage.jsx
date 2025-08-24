import { Button } from "@/components/ui/button";
import profileImage from "../assets/me.JPG";
import React from "react";
import { FaArrowRightLong, FaTiktok, FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiKaggle, SiPython, SiTensorflow, SiDocker, SiGooglecloud } from "react-icons/si";
import { AnimatePresence, motion } from "motion/react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiJupyter } from "react-icons/si";

const HomePage = () => {
  const iconsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Time between each icon animating in
        delayChildren: 0.2, // Optional: delay before the first child starts
      },
    },
  };

  // Renamed for clarity, this will be for each individual icon
  const iconItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Shorter duration for icons
        ease: "easeOut",
      },
    },
  };

  // Variants for the container of the "About Me" paragraphs
  const aboutMeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each paragraph animating in
        delayChildren: 0.1, // Optional: delay before the first child starts
      },
    },
  };

  // Variants for each individual "About Me" paragraph
  const paragraphItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Variants for the container of the action buttons
  const buttonsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Time between each button animating in
        delayChildren: 0.3, // Delay after personal info text, before buttons start
      },
    },
  };

  // Variants for each individual action button
  const buttonItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Variants for the profile image
  const profileImageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9], // Corrected the third value from -0.01 to 0.01
        delay: 0.1, // Slight delay to let text start appearing
      },
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
          {/* Profile Image */}

          <motion.div
            className="relative flex justify-center md:order-2"
            variants={profileImageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Fixed-size wrapper */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Profile Image */}
              <div className="overflow-hidden rounded-full w-full h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-10">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="h-full w-full bg-main-foreground rounded-full object-cover transform transition-all duration-500 ease-in-out scale-100 translate-y-0"
                  style={{objectPosition: 'center 12%'}}
                />
              </div>

              {/* Floating Icons */}
              <div className="absolute top-1 left-16 animate-float-fast z-20 text-border ">
                <SiPython size={28} />
              </div>
              <motion.div
                className="absolute bottom-4 left-4 z-20 text-border"
                animate={{
                  rotate: [0, 360],
                  y: [0, -20, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
                <SiGooglecloud size={28} />
              </motion.div>

              <div className="absolute bottom-8 right-2 animate-float z-20 text-border">
                <SiTensorflow size={28} />
              </div>

              <motion.div
                className="absolute top-4 right-8 z-20 text-border"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 3, -3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                }}
              >
                <SiDocker size={28} />
              </motion.div>
            </div>
          </motion.div>

          {/* Personal Info */}
          <div className="flex flex-col items-center md:items-start md:order-1 space-y-4">
            {/* Wrap personal info text for potential staggered animation too if desired */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.h1
                variants={paragraphItemVariants}
                className="font-bold text-3xl sm:text-4xl text-center md:text-left"
              >
                Ioannis Mesionis
              </motion.h1>
              <motion.h2
                variants={paragraphItemVariants}
                className="font-bold text-lg sm:text-xl text-center md:text-left mt-4"
              >
                Senior AI/ML Engineer
              </motion.h2>
              <motion.p
                variants={paragraphItemVariants}
                className="text-center md:text-left font-PublicSans max-w-md mt-4"
              >
                I am passionate about developing AI/ML solutions for mobile gaming,
                specializing in recommendation systems and predictive modeling.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 w-full max-w-sm "
              variants={buttonsContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={buttonItemVariants} className="w-full">
                <Button
                  onClick={() =>
                    window.location.href = "mailto:ioannis.mesionis@gmail.com"
                  }
                  className="w-full"
                >
                  Contact Me <FaArrowRightLong className="ml-2" />
                </Button>
              </motion.div>
              <motion.div variants={buttonItemVariants} className="w-full">
                <Button
                  onClick={() =>
                    window.open("https://calendly.com/ioannis-mesionis/30min", "_blank")
                  }
                  className="w-full"
                >
                  Schedule a Meeting <FaArrowRightLong className="ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex flex-row gap-6 mt-3"
              variants={iconsContainerVariants}
              initial="hidden"
              animate="visible" // Trigger animation on load
            >
              <motion.a
                href="https://github.com/ioannismesionis"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <FaGithub className="h-6 w-6  transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ioannis-mesionis/"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <FaLinkedin className="h-6 w-6 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@atawuamessi"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <FaTiktok className="h-6 w-6  transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/atawua/"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <PiInstagramLogoFill className="h-6 w-6  transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.kaggle.com/ioannismesionis"
                target="_blank"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <SiKaggle className="h-6 w-6 transition-colors" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="w-full px-4 mb-2 md:px-0">
          <motion.h2
            initial={{ opacity: 0, y: +10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} // Optional delay for heading
            className="font-bold text-xl md:text-xl  mb-2"
          >
            About Me
          </motion.h2>
          <motion.div
            className="space-y-4 font-PublicSans text-foreground/70 "
            variants={aboutMeContainerVariants}
            initial="hidden"
            animate="visible" // Or use whileInView="visible" and viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={paragraphItemVariants} className="text-justify">
              I'm a Senior AI/ML Engineer at King, passionate about leveraging
              artificial intelligence and machine learning to enhance mobile gaming
              experiences. With a strong mathematical background and 6+ years in data
              science, I specialize in recommendation systems and predictive modeling.
            </motion.p>
            <motion.p variants={paragraphItemVariants} className="text-justify">
              {/* Currently, I'm focused on expanding my skills in web development,
              with particular interest in React and Node.js. Through my
              coursework and personal projects, I've gained experience in UI/UX
              design principles, responsive layouts, and modern JavaScript
              frameworks. I enjoy tackling complex problems and finding elegant
              solutions that prioritize user experience while maintaining code
              quality. */}
              Currently pursuing an Executive MBA while leading AI/ML initiatives
              in the gaming industry. I focus on developing sophisticated algorithms
              for user engagement prediction, implementing robust MLOps practices,
              and creating data-driven solutions that directly impact millions of users.
            </motion.p>
            <motion.p variants={paragraphItemVariants} className="text-justify">
              {/* When I'm not coding, you'll find me exploring new technologies, or
              expanding my knowledge through online courses. Beyond tech, I
              enjoy photography in my free time, playing video games, reading
              books, and occasionally traveling. I'm always looking for opportunities to
              collaborate on projects that can make a positive impact. */}
              Outside of work, I enjoy exploring the latest AI research, working on
              personal data science projects, and traveling. Having collaborated with
              diverse, multicultural teams throughout my career, I bring a global perspective to AI/ML solutions.
            </motion.p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="w-full px-4 mb-8 md:px-0 mt-8">
          <motion.h2
            initial={{ opacity: 0, y: +10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-xl md:text-xl mb-6"
          >
            Skills
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={aboutMeContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={paragraphItemVariants}
              className="bg-secondary-background border-2 border-border rounded-base p-4 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <h3 className="font-bold text-lg mb-3 text-main">Specializations</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Recommender Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Predictive Modelling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">A/B Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Multi-arm Bandits</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={paragraphItemVariants}
              className="bg-secondary-background border-2 border-border rounded-base p-4 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <h3 className="font-bold text-lg mb-3 text-main">Programming</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Python</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">R</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">SQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">PySpark</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={paragraphItemVariants}
              className="bg-secondary-background border-2 border-border rounded-base p-4 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <h3 className="font-bold text-lg mb-3 text-main">Machine Learning</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Deep Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">XGBoost</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Classification</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Regression</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={paragraphItemVariants}
              className="bg-secondary-background border-2 border-border rounded-base p-4 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <h3 className="font-bold text-lg mb-3 text-main">MLOps & Cloud</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">VertexAI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Docker</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Google Cloud Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">CI/CD</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
