import { ArrowRightIcon } from "@radix-ui/react-icons";
import { BorderBeam } from "@/components/ui/border-beam.jsx";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HyperText } from "./hyper-text";

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
  Icon,
  description,
  href,
  cta,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <BorderBeam
      className="z-10"
      colorFrom="#09122C"
      colorTo="#98D8EF"
      duration={25}
      size={70}
      borderWidth={0.2}
    />
    <div>{background}</div>

    {/* Icon at top */}
    <div className="pointer-events-none z-20 flex transform-gpu p-6">
      <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
    </div>

    {/* Name and description at bottom */}
    <div className="pointer-events-none z-20 absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/110 to-transparent">
      <p className="text-xl  font-semibold text-white font-mono">
        <HyperText className={"text-base"} duration={30}>
          {name}
        </HyperText>
      </p>
      <p className="text-sm text-white/80 mt-0">{description}</p>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
