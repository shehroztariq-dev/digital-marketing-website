import Image from "next/image";

const stores = [
  {
    id: 1,
    image: "/shopify-images/ss-1.png",
    quote: "Bird showed us to get started, what to do, and how to do it.",
    name: "Jason Scer",
  },
  {
    id: 2,
    image: "/shopify-images/ss-2.jpeg",
    quote:
      "We had no idea how to get started, but showed us the way.And able to create something amazing.",
    name: "John Prency",
  },
  {
    id: 3,
    image: "/shopify-images/ss-3.webp",
    quote:
      "The team at Bird is amazing. They helped us create a stunning store that we are proud of.",
    name: "Miguel Martinez",
  },
];

export default function ShopifyStores() {
  return (
    <section
      id="shopify-stores"
      className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-4 mx-auto relative z-10 w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Shopify Stores <br />
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          We create stunning Shopify stores that are designed to convert.
        </p>

        <div className="flex items-center justify-center px-10">
          {stores.map((index) => (
            <div
              key={index.id}
              className="flex flex-col items-center justify-center mt-10 w-2/3 mx-auto">
              <Image
                src={index.image}
                alt="shopify store"
                width={400}
                height={400}
                className="rounded-lg mx-auto h-96 w-96 shadow-md"
              />
              <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                &quot;{index.quote}&quot;
              </p>
              <p className="text-neutral-800 font-bold text-lg mt-4">
                - {index.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
