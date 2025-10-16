"use client";

import { motion, useAnimate } from "motion/react";
import Image from "next/image";
import Pointer from "../elements/Pointer";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{
        cursor: 'url("/illustrations/cursor-you.svg"), auto',
      }}
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="absolute -left-32 top-16 hidden lg:block"
          drag
        >
          <Image
            draggable={false}
            src="/components/hero/design-example-1.png"
            alt="DE1"
            width={318}
            height={467}
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute top-96 left-56 hidded lg:block"
        >
          <Pointer name="Nibras" />
        </motion.div>
      </div>
    </section>
  );
}
