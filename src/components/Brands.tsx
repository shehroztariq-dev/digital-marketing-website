import Image from "next/image";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const logos = [
  {
    image: "/company-logos/logoipsum-1.svg",
  },
  {
    image: "/company-logos/logoipsum-2.svg",
  },
  {
    image: "/company-logos/logoipsum-3.svg",
  },
  {
    image: "/company-logos/logoipsum-4.svg",
  },
  {
    image: "/company-logos/logoipsum-5.svg",
  },
  {
    image: "/company-logos/stripelogo.png",
  },
];

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Brands() {
  return (
    <section id="brands">
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div
          className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          The best brands <br /> choose us
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
        </p>

        <div className="grid grid-cols-3  items-center justify-center  mx-auto md:w-3/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg"
              />
            </div>
          ))}
        </div>

        <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
            font.className
          )}>
          &quot;We got rid of nearly a dozen different tools because of what
          Bird does for us.&quot;
        </div>

        <div className="items-center flex justify-center flex-col text-white">
          <Image
            src="/logo.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="pt-2 xl:pt-0  w-10 xl:w-14 invert"
          />

          <div className=" text-center">
            <div className="text-sm  font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
        </div>
      </div>
    </section>
  );
}
