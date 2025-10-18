"use client";

import { useState } from "react";
import Tag from "../elements/Tag";
import { Plus } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 flex justify-center text-center">
      <div className="container">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <Tag>FAQs</Tag>
        </div>

        {/* Heading */}
        <h2 className="text-6xl font-medium leading-tight text-center max-w-2xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400 font-bold">Answers</span>
        </h2>

        {/* FAQ List */}
        <div className="mt-12 flex flex-col gap-4 max-w-2xl mx-auto text-left">
          {faqs.map((faq, index) => {
            const isOpen = selectedIndex === index;
            return (
              <div
                key={faq.question}
                onClick={() => setSelectedIndex(isOpen ? null : index)}
                className={twMerge(
                  "bg-neutral-900 border border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-lime-400/40",
                  isOpen && "border-lime-400/60"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-medium text-lg">{faq.question}</h3>
                  <Plus
                    size={26}
                    className={twMerge(
                      "text-lime-400 transition-transform duration-300 flex-shrink-0",
                      isOpen && "rotate-45"
                    )}
                  />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/50 mt-4 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
