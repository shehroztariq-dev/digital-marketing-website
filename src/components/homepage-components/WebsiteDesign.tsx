"use client";

import Image from "next/image";

const sectionOne = [
  {
    id: 1,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  },
  {
    id: 2,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  },
  {
    id: 3,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  },
];
const sectionTwo = [
  {
    id: 1,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  },
  {
    id: 2,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  },
  {
    id: 3,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  },
];
const sectionThree = [
  {
    id: 1,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  },
  {
    id: 2,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  },
  {
    id: 3,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  },
];
const sectionFour = [
  {
    id: 1,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  },
  {
    id: 2,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  },
  {
    id: 3,
    imageLink:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
  },
];

export default function WebsiteDesign() {
  return (
    <section id="website-design" className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Website Design <br /> that works
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Creating, designing and developing websites that work for your
          business.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        <div className="grid gap-4">
          {sectionOne.map((item) => {
            return (
              <Image
                key={item.id}
                width={500}
                height={500}
                priority
                className="h-auto max-w-full rounded-lg"
                src={item.imageLink}
                alt=""
              />
            );
          })}
        </div>
        <div className="grid gap-4">
          {sectionTwo.map((item) => {
            return (
              <Image
                key={item.id}
                width={500}
                height={500}
                priority
                className="h-auto max-w-full rounded-lg"
                src={item.imageLink}
                alt=""
              />
            );
          })}
        </div>
        <div className="grid gap-4">
          {sectionThree.map((item) => {
            return (
              <Image
                key={item.id}
                width={500}
                height={500}
                priority
                className="h-auto max-w-full rounded-lg"
                src={item.imageLink}
                alt=""
              />
            );
          })}
        </div>
        <div className="grid gap-4">
          {sectionFour.map((item) => {
            return (
              <Image
                key={item.id}
                width={500}
                height={500}
                priority
                className="h-auto max-w-full rounded-lg"
                src={item.imageLink}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
