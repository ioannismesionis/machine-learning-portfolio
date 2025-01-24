import { BorderBeam } from "@/components/ui/border-beam.jsx";
import { cn } from "@/lib/utils";
import { HyperText } from "./hyper-text";

const GIFS = [
  "https://media.tenor.com/fTaJKvvsAboAAAAj/cinnamoroll-sanrio.gif",
  "https://giffiles.alphacoders.com/145/14566.gif",
  // Add more GIF URLs here
];

const getRandomGif = () => GIFS[Math.floor(Math.random() * GIFS.length)];

const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "grid gap-4 mx-auto w-full max-w-[800px]",
        "grid-cols-1 p-8 auto-rows-[300px] ", // Default mobile (<400px) - 1 column
        "sm:grid-cols-2 sm:p-8", // Small screens (>400px) - 2 columns
        "md:grid-cols-3 md:w-[800px] md:auto-rows-[150px] md:p-8", // Medium screens (>700px) - 3 columns
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  projectTitle,
  projectDescription,
  onClick,
  children,
  isTransparent = false,
  opacity = 100,
  borderBeamProps = {
    show: true,
    colorFrom: "#09122C",
    colorTo: "#578E7E",
    duration: 25,
    size: 70,
    borderWidth: 0.2,
  },
  ...props
}) => {
  return (
    <div
      key={name}
      onClick={onClick}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        {
          "bg-transparent": isTransparent,
          [`bg-opacity-${opacity}`]: !isTransparent,
          "bg-white dark:bg-black": !isTransparent,
          "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]":
            !isTransparent,
          "transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]":
            !isTransparent,
        },
        "",
        onClick && "cursor-pointer",
        className
      )}
      {...props}
    >
      {borderBeamProps.show && (
        <BorderBeam
          className="z-10"
          colorFrom={borderBeamProps.colorFrom}
          colorTo={borderBeamProps.colorTo}
          duration={borderBeamProps.duration}
          size={borderBeamProps.size}
          borderWidth={borderBeamProps.borderWidth}
        />
      )}
      <div className="relative h-full ">
        {name === "Recent Projects" && (
          <div
            className="absolute  z-30 sm:w-16 sm:h-16 w-20 h-20"
            style={{
              top: "1rem",
              right: "1rem",
            }}
          >
            <img
              src={getRandomGif()}
              alt="Animated gif"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {background && <div className="absolute inset-0 z-0">{background}</div>}

        {children}

        {(name || description || projectTitle || projectDescription) && (
          <div className="pointer-events-none z-20 absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/110 to-transparent">
            {name && (
              <p className="text-2xl">
                {name == "Shoan An Nafi" ? (
                  <HyperText
                    className={"text-base font-jetbriansMono font-white"}
                    duration={30}
                  >
                    {name}
                  </HyperText>
                ) : (
                  <HyperText
                    className={"text-base font-jetbriansMono"}
                    duration={30}
                  >
                    {name}
                  </HyperText>
                )}
              </p>
            )}
            {projectTitle && (
              <p className="text-lg font-semibold  mt-2 font-jetbriansMono">
                {projectTitle}
              </p>
            )}
            {projectDescription && (
              <p className="text-sm  mt-1 font-sourceCodePro pb-3">
                {projectDescription}
              </p>
            )}
            {description && <p className="text-sm  mt-0">{description}</p>}
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  );
};

export { BentoCard, BentoGrid };
