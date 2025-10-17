"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const logos = [
  { name: "Quantum", image: "/components/companies/acme-corp.svg" },
  { name: "Acme Corp", image: "/components/companies/apex.svg" },
  { name: "Echo Valley", image: "/components/companies/celestial.svg" },
  { name: "Pulse", image: "/components/companies/echo-valley.svg" },
  { name: "Outside", image: "/components/companies/outside.svg" },
  { name: "Apex", image: "/components/companies/pulse.svg" },
  { name: "Celestial", image: "/components/companies/quantum.svg" },
  { name: "Twice", image: "/components/companies/twice.svg" },
];

export default function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip flex justify-center">
      <div className="relative w-full max-w-6xl flex flex-col items-center text-center px-4">
        <h3 className="text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>

        <div className="flex overflow-hidden mt-12 w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex gap-16 md:gap-24 pr-24 items-center"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo) => (
                  <div key={logo.name} className="flex-shrink-0">
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={100}
                      height={40}
                      className="opacity-70 hover:opacity-100 transition-opacity duration-300 w-auto h-8 md:h-10 lg:h-12"
                      draggable={false}
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
