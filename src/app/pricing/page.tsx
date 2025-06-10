import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";

const plans = [
  {
    id: 0,
    name: "Starter",
    price: "US $799/month",
    features: [
      "Social Media Management (2 platforms)",
      "4 posts per platform weekly",
      "Basic content creation",
      "Monthly performance report",
      "Community engagement",
      "1-2 day response time",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Perfect for small businesses looking to establish their online presence with consistent social media engagement.",
    button: "Get Started",
  },
  {
    id: 1,
    name: "Growth",
    price: "US $2,499/month",
    features: [
      "Social Media Management (4 platforms)",
      "Daily posts on all platforms",
      "Premium content creation",
      "Weekly performance reports",
      "Paid ad management ($500 ad budget included)",
      "Basic SEO optimization",
      "24-hour support response time",
      "Monthly strategy call",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Ideal for growing businesses that want to scale their digital presence with comprehensive marketing strategies.",
    button: "Boost Growth",
  },
  {
    id: 2,
    name: "Enterprise",
    feature: "Contact Us",
    price: "Let's Talk",
    features: [
      "Full-service digital marketing",
      "Unlimited platforms management",
      "Dedicated account manager",
      "Custom content production",
      "Advanced analytics & reporting",
      "Full-funnel marketing strategy",
      "Premium SEO services",
      "Influencer marketing coordination",
      "Conversion rate optimization",
      "Priority 24/7 support",
    ],
    style:
      "h-full rounded-3xl py-10 flex flex-col bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Tailored solutions for established brands needing a complete, data-driven marketing approach with maximum ROI.",
    button: "Contact Us",
  },
];
export default function page() {
  return (
    <div className="w-full pt-30 md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex items-center justify-center flex-col">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Simple Pricing <br /> Choose your plan
        </div>
        {/** Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start ">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="flex flex-col justify-between h-full px-6 border rounded-4xl">
              <div className={plan.style}>
                <div className="flex items-center font-medium text-4xl">
                  {plan.name}
                  {/* render feature tag only for enterprise tab*/}
                  {plan.feature === "Contact Us" && (
                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center ">
                      Contact Us
                    </div>
                  )}
                </div>
                <div className="text-3xl pt-6 ">{plan.price}</div>
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center space-x-3 text-lg py-1">
                      {/* render checkmark only for enterprise tab*/}
                      <span>
                        {plan.feature === "Contact Us" ? (
                          <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                        ) : (
                          <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                        )}
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={plan.button}>
                {index === 0 && (
                  <Link
                    href="https://buy.stripe.com/6oEg1WdsibFr1EYbIK"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300">
                    Buy Now
                  </Link>
                )}
                {index === 1 && (
                  <Link
                    href="https://buy.stripe.com/14k2b65ZQ8tf5Ve28c"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300">
                    Buy Now
                  </Link>
                )}
                {index === 2 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300">
                    Contact Us
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
