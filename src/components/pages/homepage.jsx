import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { MorphingText } from "../ui/morphing-text";
import { MorphingTextDescription } from "../ui/morphing-text_description";
import { Particles } from "../ui/particles";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import { SparklesText } from "../ui/sparkles-text";
import { TypingAnimation } from "../ui/typing-animation";
import { WordRotate } from "../ui/word-rotate";
import { IconCloud } from "../ui/icon-cloud";
import { useToast } from "@/hooks/use-toast";
import { Spotify } from "react-spotify-embed";

const slugs = [
  "javascript",
  "dart",
  "react",
  "flutter",
  "androidstudio",
  "mongodb",
  "nodedotjs",
  "firebase",
  "vercel",
  "Jellyfin",
  "tailwindcss",
  "typescript",
  "githubcopilot",
  "gitkraken",
  "prettier",
  "shadcnui",
  "codeium",
  "vite",
  "flutter",
  "c",
  "python",
  "html5",
  "css3",
  "tailwindcss",
  "chakraui",
  "postman",
  "cplusplus",
  "vscodium",
  "docker",
  "git",
  "gitlab",
  "jetbrains",
  "figma",
];

const homepage = () => {
  const { toast } = useToast();
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div>
      <div className="absolute inset-2 -z-10 overflow-hidden">
        <Particles quantity="400" staticity="20" />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <BentoGrid>
          <BentoCard
            name="Shoan An Nafi"
            description={
              <WordRotate
                className={"text-white font-sourceCodePro font-light "}
                duration={3000}
                words={[
                  "Software Engineer",
                  "Student",
                  "Photographer",
                  "Gamer",
                ]}
              />
            }
            Icon={() => <div></div>}
            background={
              <>
                <img
                  src="/ProfileBlue.jpg"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </>
            }
            borderBeamProps={{
              show: false,
            }}
            className={
              "md:block md:col-span-1 md:row-span-2 font-mono font-extrabold"
            }
          />
          <BentoCard
            name=""
            description=""
            Icon={() => <div></div>}
            href="#"
            background={
              <div className="absolute inset-0 flex items-center justify-center bg-black/90 p-4">
                <pre className="text-xs text-white/80 overflow-hidden">
                  <code className="font-sourceCodePro text-green-600">
                    <TypingAnimation
                      className="whitespace-pre"
                      duration={100}
                      startOnView={true}
                    >{`Aspiring software engineer
with a passion for creating 
innovative and efficient 
solutions using cutting-edge
technologies.`}</TypingAnimation>
                  </code>
                </pre>
              </div>
            }
            className={"md:block md:col-span-1 md:row-span-1"}
            borderBeamProps={{
              show: true,
              size: 100,
              colorFrom: "#000000",
              colorTo: "#008000",
              borderWidth: 1,
            }}
          />
          <BentoCard
            name=""
            description=""
            isTransparent={true}
            opacity={10}
            useAuroraText={true}
            borderBeamProps={{
              show: false,
            }}
            className={"md:block md:col-span-1 md:row-span-1"}
          >
            <div className="h-full w-full flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 w-fit">
                <div
                  className="cursor-pointer "
                  onClick={() =>
                    window.open("https://github.com/Nafisarkar", "_blank")
                  }
                >
                  <img
                    src="/github_logo.png"
                    className="w-12 h-12 rounded-lg hover:opacity-80 transition-opacity"
                    alt="github logo"
                  />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    (window.location.href = "mailto:sarkarnafe@gmail.com")
                  }
                >
                  <img
                    src="https://img.icons8.com/ios_filled/512/FFFFFF/gmail-new.png"
                    className="w-12 h-12 rounded-lg hover:opacity-80 transition-opacity"
                    alt="mail logo"
                  />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    window.open("https://discord.com/users/_sakuno", "_blank")
                  }
                >
                  <img
                    src="https://img.icons8.com/ios11/512/FFFFFF/discord-logo.png"
                    className="w-12 h-12 rounded-lg hover:opacity-80 transition-opacity"
                    alt="discord logo"
                  />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/_blindfox_/",
                      "_blank"
                    )
                  }
                >
                  <img
                    src="https://img.icons8.com/m_outlined/512/FFFFFF/instagram-new.png"
                    className="w-12 h-12 rounded-lg hover:opacity-80 transition-opacity"
                    alt="instagram logo"
                  />
                </div>
                <div
                  className="cursor-pointer col-span-2 text-center"
                  onClick={() => window.open("", "_blank")}
                >
                  <p className="font-jetbriansMono text-4xl font-extrabold pt-1 hover:underline">
                    LINKS.
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard
            name="Recent Projects"
            isTransparent={true}
            opacity={10}
            projectTitle={
              <span className="text-[#9E7AFF]">
                <MorphingText
                  texts={[
                    "MemeWall",
                    "Pdf Maker",
                    "Rice Leaf Disease Detector",
                    "Pdf Converter OCR",
                    "iamCracked",
                  ]} // Define a fixed height for the title
                />
              </span>
            }
            projectDescription={
              <MorphingTextDescription
                texts={[
                  "This project, built with React, Tailwind CSS, and Shadcn UI, displays the top 100 trending memes from the internet.",
                  "The PDF Maker App is a Flutter-based mobile application that lets users convert images into PDF files effortlessly.",
                  "This application uses the TFLite plugin for Flutter to execute a cnn model. It detects diseases directly on the device with accuracy.",
                  "This is a graphical tool for Optical Character Recognition on images, converting PDFs to images, and merging text files in a selected folder.",
                  "The software provides a framework for developers to create and include their own hacking modules, allowing for extensibility and customization.",
                ]} // Define a fixed height for the description and add vertical scrollbar
              />
            }
            borderBeamProps={{
              show: false,
            }}
            className="md:block md:col-span-2 md:row-span-1"
            onClick={() => {
              const projectTitleElement = document.querySelector(
                ".project-title-text"
              );

              const projectName = projectTitleElement
                ? projectTitleElement.textContent
                : "undefined";
              const links = {
                MemeWall: "https://github.com/Nafisarkar/MemeWall",
                "Pdf Maker": "https://github.com/Nafisarkar/Pdf_Maker_Flutter",
                "Rice Leaf Disease Detector":
                  "https://github.com/Nafisarkar/Rice_Leaf_Disease_Detector",
                "Pdf Converter OCR":
                  "https://github.com/Nafisarkar/Pdf_Converter_OCR",
                iamCracked: "https://github.com/Nafisarkar/iamCracked",
              };

              console.log(projectName);

              const link = links[projectName];
              console.log(link || "undefined");
              if (link) {
                navigator.clipboard.writeText(link);
                toast({
                  duration: 2000,
                  title: "Link Copied " + projectName,
                  description: link,
                });
              }
            }}
          />

          <BentoCard
            name=""
            description=""
            Icon={() => <div></div>}
            href="#"
            cta="Learn More"
            background={
              <div className="absolute inset-0 flex items-center justify-center bg-black/90 p-4">
                <pre className="text-xs text-white/80 overflow-hidden">
                  <VelocityScroll
                    className="font-mono"
                    defaultVelocity={0.5}
                  >{`C C++ Python Flutter Dart JavaScript React Java Html Css MongoDB Firebase Git Github Figma Tailwind Chakra Ui shadcn ui Photoshop`}</VelocityScroll>
                </pre>
              </div>
            }
            className={"md:block md:col-span-2 md:row-span-1"}
          />
          <BentoCard
            name="{} TECH STACK"
            description={
              <WordRotate
                className={
                  "text-white font-sourceCodePro font-bold text-opacity-50"
                }
                duration={3000}
                words={[
                  "javascript",
                  "dart",
                  "java",
                  "react",
                  "flutter",
                  "androidstudio",
                  "mongodb",
                  "nodedotjs",
                  "express",
                  "firebase",
                  "vercel",
                  "c",
                  "python",
                  "html5",
                  "css3",
                  "photoshop",
                  "tailwindcss",
                  "chakraui",
                  "shadcn",
                  "magicui",
                  "postman",
                  "cplusplus",
                  "vscode",
                  "docker",
                  "git",
                  "github",
                  "gitlab",
                  "jetbrains",
                  "figma",
                ]}
              />
            }
            isTransparent={true}
            borderBeamProps={{
              show: false,
            }}
            className={"md:block md:col-span-1 md:row-span-2"}
            background={
              <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg">
                <IconCloud images={images} />
              </div>
            }
          />
          <BentoCard
            name=""
            description=""
            Icon={() => <div></div>}
            isTransparent={true}
            borderBeamProps={{
              show: false,
            }}
            background={
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url(https://mir-s3-cdn-cf.behance.net/project_modules/hd/06f21a161921919.63cd7887d0a70.gif)",
                  backgroundSize: "cover",
                  backgroundPosition: "fixed",
                }}
              >
                <div className="absolute top-1 left-1 md:flex md:flex-wrap lg:flex ">
                  <SparklesText
                    sparklesCount={3}
                    text="Learning"
                    className="font-jetbriansMono text-sm md:w-full lg:w-full align-start"
                  />
                  <SparklesText
                    sparklesCount={3}
                    text="Express"
                    className="font-jetbriansMono text-xs md:w-full lg:pl-0 lg:w-auto align-start"
                  />
                </div>
              </div>
            }
            className={"md:block md:col-span-1 md:row-span-1"}
          />
          <BentoCard
            name=""
            description=""
            Icon={() => <div></div>}
            isTransparent={true}
            borderBeamProps={{
              show: false,
            }}
            className={"md:block md:col-span-1 md:row-span-1"}
            background={
              <div>
                <p
                  className="text-gray-400 text-start font-mono text-xs  opacity-90 hover:underline"
                  onClick={() =>
                    window.open("https://discord.com/users/_sakuno", "_blank")
                  }
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 "></span>
                  Available for work
                </p>
                <p className="text-gray-400 text-start font-mono text-xs pt-0 pb-2 opacity-90 ">
                  <span className=""></span>
                  {new Intl.DateTimeFormat("en-US", {
                    weekday: "short",
                    year: "2-digit",
                    month: "short",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  }).format(new Date())}
                </p>
                <Spotify
                  link="https://open.spotify.com/track/42T2QQv3xgBlpQxaSP7lnK?si=0485ec49ffcd4bcf"
                  width={"100%"}
                  height={"100%"}
                  frameBorder={0}
                />
              </div>
            }
          />
        </BentoGrid>
      </div>
    </div>
  );
};

export default homepage;
