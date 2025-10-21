"use client";

import { motion, useAnimate } from "motion/react";
import Image from "next/image";
import Pointer from "../elements/Pointer";
import React, { useEffect } from "react";
import Button from "../ui/Button";
import posthog from "posthog-js";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [
        leftDesignScope.current,
        { opacity: 1, x: -88, y: -24 },
        { duration: 0.5 },
      ],
    ]);
    leftPointerAnimate([
      [
        leftPointerScope.current,
        { opacity: 1, x: -100, y: 0 },
        { duration: 0.8 },
      ],
      [
        leftPointerScope.current,
        { y: [0, 16, 0] },
        { duration: 0.8, ease: "easeInOut" },
      ],
    ]);
    rightDesignAnimate([
      [
        rightDesignScope.current,
        { opacity: 1, x: 225, y: -146 },
        { duration: 0.5, delay: 1 },
      ],
    ]);
    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1, x: 175, y: 0 },
        { duration: 0.8, delay: 1 },
      ],
      [
        rightPointerScope.current,
        { y: [0, 20, 0] },
        { duration: 0.8, ease: "easeInOut" },
      ],
    ]);
  }, [
    leftDesignAnimate,
    leftDesignScope,
    leftPointerAnimate,
    leftPointerScope,
    rightDesignAnimate,
    rightDesignScope,
    rightPointerAnimate,
    rightPointerScope,
  ]);

  const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    )?.value;

    if (email) {
      posthog.capture("email_submit", {
        email,
        utm_source: new URLSearchParams(window.location.search).get(
          "utm_source"
        ),
      });
    }
  };

  return (
    <section
      className="py-24 overflow-x-clip flex justify-center"
      style={{ cursor: 'url("/illustrations/cursor-you.svg"), auto' }}
    >
      <div className="relative w-full max-w-5xl flex flex-col items-center text-center">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, x: -150, y: 50 }}
          className="absolute -left-32 top-16 hidden lg:block"
          drag
        >
          <Image
            src="/components/hero/design-example-1.png"
            width={318}
            height={467}
            alt="DE1"
            draggable={false}
          />
        </motion.div>

        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, x: -100, y: 50 }}
          className="absolute top-96 left-56 hidden lg:block"
        >
          <Pointer name="Nibras" />
        </motion.div>

        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 300, y: -100 }}
          className="absolute -right-32 top-16 hidden lg:block"
          drag
        >
          <Image
            src="/components/hero/design-example-2.png"
            width={440}
            height={592}
            alt="DE2"
            draggable={false}
          />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 175, y: 0 }}
          className="absolute top-24 right-80 hidden lg:block"
        >
          <Pointer color="red" name="Abu" />
        </motion.div>

        <div className="flex flex-col items-center px-4 w-full">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950">
            ✨ $7.5M seed round raised
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mt-6">
            Impactful design, created effortlessly
          </h1>
          <p className="text-xl text-white/50 mt-8 max-w-2xl">
            Design tool shouldn&apos;t slow you down. Create, Prototype, and
            test with ease
          </p>

          <motion.form
            onSubmit={handleEmail}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex w-full max-w-lg border border-white/50 rounded-full overflow-hidden shadow-lg hover:shadow-xl focus-within:ring-2 focus-within:ring-lime-400 transition-all duration-300"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/50 focus:outline-none"
            />
            <Button
              size="sm"
              type="submit"
              variant="primary"
              className="rounded-r-full px-6 hover:text-lime-400 hover:bg-black transition-colors duration-300"
            >
              Sign Up
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
