import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { Particles } from "../ui/particles";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import { WordRotate } from "../ui/word-rotate";

const homepage = () => {
  return (
    <div>
      <div className="absolute inset-2 -z-10 overflow-hidden">
        <Particles quantity="500" />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <BentoGrid>
          <BentoCard
            name="Shoan An Nafi"
            description={
              <WordRotate
                className={"text-white font-mono "}
                duration={3000}
                words={[
                  "Software Engineer",
                  "Photographer",
                  "Student",
                  "Gamer",
                ]}
              />
            }
            Icon={() => <div></div>}
            href="#"
            background={
              <>
                <img
                  src="/ProfileBlue.jpg"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </>
            }
            cta="Learn More"
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
                  <code className="font-mono text-green-600">{`Aspiring software developer
with a passion for creating 
innovative and efficient 
solutions
using cutting-edge
technologies.`}</code>
                </pre>
              </div>
            }
            className={"md:block md:col-span-1 md:row-span-1"}
          />
          <BentoCard
            name=""
            description=""
            Icon={() => (
              <div className="grid grid-cols-3 gap-3">
                <img
                  src="/github_logo.png"
                  className="w-12 h-12 rounded-lg"
                  alt="github logo"
                />
                <img
                  src="/mail.png"
                  className="w-12 h-12 rounded-lg "
                  alt="mail logo"
                />
                <img src="/discord.png" className="w-12 h-12" alt="js" />
                <img
                  src="https://w7.pngwing.com/pngs/46/539/png-transparent-linkedin-logo-media-sns-social-social-links-icon.png"
                  className="w-11 h-11 rounded-lg"
                  alt="linkedin logo"
                />
                <img
                  src="/insta.png"
                  className="w-12 h-12 rounded-lg"
                  alt="instagram logo"
                />
              </div>
            )}
            href="#"
            cta="Learn More"
            className={" md:block md:col-span-1 md:row-span-1"}
          />
          <BentoCard
            name="Card 4"
            description="Description for card 4"
            Icon={() => <div></div>}
            href="#"
            cta="Learn More"
            className={" md:block md:col-span-2 md:row-span-1"}
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
            className={" md:block md:col-span-2 md:row-span-1"}
          />
          <BentoCard
            name="Card 6"
            description="Description for card 6"
            Icon={() => <div></div>}
            href="#"
            cta="Learn More"
            className={" md:block md:col-span-1 md:row-span-2"}
          />
          <BentoCard
            name="Card 7"
            description="Description for card 7"
            Icon={() => <div></div>}
            href="#"
            cta="Learn More"
            className={" md:block md:col-span-1 md:row-span-1"}
          />
          <BentoCard
            name="Card 8"
            description="Description for card 8"
            Icon={() => <div></div>}
            href="#"
            cta="Learn More"
            className={" md:block md:col-span-1 md:row-span-1"}
          />
        </BentoGrid>
      </div>
    </div>
  );
};

export default homepage;
