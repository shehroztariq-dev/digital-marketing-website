import Link from "next/link";

export default function Hero() {
  return (
    <div className="p-4 mx-auto flex flex-col items-center relative w-full pt-32 md:pt-40 px-2">
      <div className="text-4xl pb-5 md:text-7xl px-6 text-center text-slate-300 bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-100 bg-opacity-50">
        <span className="text-transparent">
          Create, grow, and <br />
          scale your business
        </span>
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        Custom tailored solutions for your business. We are a team of creatives
        who are excited to help you grow your business.
      </p>
      <Link
        href="/contact"
        className="shadow-[inset_0_0_0_2px_#616467] text-white/65 px-12 py-4 mt-10 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
        Book a call
      </Link>
    </div>
  );
}
