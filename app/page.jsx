import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Mobile Application Developer</span>
            <h1 className="h2 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Hafizur Rahman</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a mobile app developer with expertise in building dynamic and
              innovative applications using Flutter and Dart.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 flex justify-center items-center">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;