import { Button } from "@/components/ui/button";
import profileImage from "../assets/pf.svg";
import React from "react";
import { FaArrowRightLong, FaDiscord, FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiDreamstime, SiWakatime } from "react-icons/si";
import { motion } from "framer-motion";
import { PiInstagramLogoFill } from "react-icons/pi";

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
            className="flex justify-center md:order-2 "
            variants={profileImageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="overflow-hidden rounded-full h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
              <img
                src={profileImage}
                alt="Profile"
                className="h-full w-full bg-main-foreground rounded-full object-cover transform transition-all duration-500 ease-in-out scale-155"
              />
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
                Shaon An Nafi
              </motion.h1>
              <motion.h2
                variants={paragraphItemVariants}
                className="font-bold text-lg sm:text-xl text-center md:text-left mt-4"
              >
                Software Engineer
              </motion.h2>
              <motion.p
                variants={paragraphItemVariants}
                className="text-center md:text-left font-PublicSans max-w-md mt-4"
              >
                I am passionate about integrating functionality and design in
                applications to create intuitive, user-friendly experiences.
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
                    window.open("https://discord.com/users/_sakuno", "_blank")
                  }
                  className="w-full"
                >
                  Contact Me <FaArrowRightLong className="ml-2" />
                </Button>
              </motion.div>
              <motion.div variants={buttonItemVariants} className="w-full">
                <Button
                  onClick={() =>
                    window.open("https://calendly.com/sarkarnafe", "_blank")
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
                href="https://github.com/Nafisarkar"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <FaGithub className="h-6 w-6  transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/nafi-sarkar/"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <FaLinkedin className="h-6 w-6 transition-colors" />
              </motion.a>
              <motion.a
                href="https://discord.com/users/_sakuno"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <FaDiscord className="h-6 w-6  transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/_blindfox_/"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <PiInstagramLogoFill className="h-6 w-6  transition-colors" />
              </motion.a>
              <motion.a
                href="https://wakatime.com/@Nafisarkar"
                target="_blank"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <SiDreamstime className="h-6 w-6 transition-colors" />
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
            className="space-y-4 font-PublicSans text-gray-500 "
            variants={aboutMeContainerVariants}
            initial="hidden"
            animate="visible" // Or use whileInView="visible" and viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={paragraphItemVariants} className="text-justify">
              I'm a computer science student passionate about creating seamless,
              user-friendly experiences through thoughtful design and efficient
              code. I love working at the intersection of frontend and backend
              development, ensuring that applications are not only aesthetically
              pleasing but also robust and scalable.
            </motion.p>
            <motion.p variants={paragraphItemVariants} className="text-justify">
              Currently, I'm focused on expanding my skills in web development,
              with particular interest in React and Node.js. Through my
              coursework and personal projects, I've gained experience in UI/UX
              design principles, responsive layouts, and modern JavaScript
              frameworks. I enjoy tackling complex problems and finding elegant
              solutions that prioritize user experience while maintaining code
              quality.
            </motion.p>
            <motion.p variants={paragraphItemVariants} className="text-justify">
              When I'm not coding, you'll find me exploring new technologies, or
              expanding my knowledge through online courses. Beyond tech, I
              enjoy photography in my free time, playing video games, reading
              books, and occasionally traveling to experience different cultures
              and perspectives. I'm always looking for opportunities to
              collaborate on projects that can make a positive impact.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
