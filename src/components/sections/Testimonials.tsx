"use client";

import { easeOut, motion } from "motion/react";
import Tag from "../elements/Tag";
import { Star } from "lucide-react";
import Avatar from "../elements/Avatar";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Design Lead at TechFlow",
    avatar: "/components/feature/people.jpg",
    content:
      "This tool has completely transformed our design workflow. The real-time collaboration features are game-changing, and our team's productivity has increased by 300%.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Freelance Designer",
    avatar: "/components/feature/person.jpg",
    content:
      "I've tried every design tool out there, and this is by far the most intuitive. The keyboard shortcuts save me hours every week. Absolutely love it!",
    rating: 5,
  },
  {
    name: "Ahammed Nibras",
    role: "Developer",
    avatar: "/components/feature/me.jpeg",
    content:
      "The prototyping capabilities are incredible. I can create interactive demos in minutes instead of hours. Our clients are always impressed.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Creative Director",
    avatar: "/components/feature/people.jpg",
    content:
      "Best investment we've made this year. The asset library and smart sync features have streamlined our entire creative process.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "UI/UX Designer",
    avatar: "/components/feature/person.jpg",
    content:
      "Finally, a design tool that doesn't get in the way. The flow mode is pure magic, and the auto layout saves so much manual work.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Design Manager at Innovation Labs",
    avatar: "/components/feature/me.jpeg",
    content:
      "Our design team won't work with anything else. The collaboration features make remote work feel seamless, and the performance is outstanding.",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function Testimonials() {
  return (
    <section className="py-24 flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col items-center px-4">
        <div className="flex justify-center">
          <Tag>Testimonials</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-3xl">
          Loved by designers{" "}
          <span className="text-lime-400 font-bold">worldwide</span>
        </h2>
        <p className="text-xl text-white/50 mt-6 text-center max-w-2xl">
          Join thousands of designers who have transformed their workflow
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 h-full flex flex-col hover:border-lime-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)]">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-lime-400" />
                  ))}
                </div>

                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <Avatar className="ring-2 ring-transparent group-hover:ring-lime-400/50 transition-all duration-500">
                    <Image
                      width={200}
                      height={200}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                  </Avatar>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-white/50 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-lime-400">50K+</div>
            <p className="text-white/50 mt-2">Active Users</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-lime-400">4.9/5</div>
            <p className="text-white/50 mt-2">Average Rating</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-lime-400">2M+</div>
            <p className="text-white/50 mt-2">Projects Created</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
