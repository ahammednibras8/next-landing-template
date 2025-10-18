"use client";

import { Check, Sparkles } from "lucide-react";
import Tag from "../elements/Tag";
import { easeOut, motion } from "motion/react";
import Button from "../ui/Button";

const pricingPlans = [
  {
    name: "Starter",
    price: "19",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 3 projects",
      "5GB storage",
      "Basic templates",
      "Community support",
      "Export to PNG/JPG",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "49",
    description: "For professionals who need more power",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Advanced templates",
      "Priority support",
      "All export formats",
      "Version history",
      "Team collaboration (up to 5)",
      "Custom fonts",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "99",
    description: "For large teams with advanced needs",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "Unlimited team members",
      "Advanced security",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Pricing() {
  return (
    <section className="py-24 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center px-4">
        <div className="flex justify-center">
          <Tag>Pricing</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl">
          Simple, transparent{" "}
          <span className="text-lime-400 font-bold">Pricing</span>
        </h2>
        <p className="text-xl text-white/50 mt-6 text-center max-w-2xl">
          Choose the perfect plan for your needs. All plans include a 14-day
          free trail.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                    <Sparkles size={14} />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative bg-neutral-900 rounded-3xl p-8 h-full flex flex-col border transition-all duration-500 ${
                  plan.popular
                    ? "border-lime-400 shadow[0_0_50px_rgba(132,204,22,0.15)] scale-105"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="text-center pb-8 border-b border-white/10">
                  <h3 className="text-2xl font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="text-white/50 text-sm mt-2 min-h-[40px]">
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-white/50 text-lg">/month</span>
                  </div>
                </div>

                <ul className="flex-1 mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <div className="mt-0.5 flex-shrink-0 bg-lime-400/10 rounded-full p-1">
                        <Check size={14} className="text-lime-400" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    variant={plan.popular ? "primary" : "secondary"}
                    className={`w-full ${
                      plan.popular
                        ? "bg-lime-400 text-neutral-950 hover:bg-lime-500"
                        : "bg-neutral-800 text-white hover:bg-neutral-700 border-white/10"
                    } transition-all duration-300`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-white/50 text-sm mt-2">
            Need a custom plan?{" "}
            <a href="#" className="text-lime-400 hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
