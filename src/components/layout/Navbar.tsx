"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import posthog from "posthog-js";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    posthog.capture("login_clicked");
  };

  const handleSignup = () => {
    posthog.capture("signup_clicked");
  };

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border border-white/15 rounded-[27px] lg:rounded-full bg-neutral-950/70 backdrop-blur">
            <figure className="flex items-center justify-between py-2 lg:px-2 px-4">
              <div>
                <Image
                  src="branding/logo.svg"
                  alt="Logo"
                  width={120}
                  height={40}
                  priority
                />
              </div>

              <div className="hidden lg:flex justify-center flex-1">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((nav) => (
                    <a
                      className="hover:text-lime-400 transition-colors duration-300"
                      href={nav.href}
                      key={nav.href}
                      onClick={() =>
                        posthog.capture(`Nav: ${nav.label}`, {
                          label: nav.label,
                        })
                      }
                    >
                      {nav.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Right: Buttons / Menu */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    posthog.capture("menu_toggle", { isOpen: !isOpen });
                  }}
                  className="lg:hidden"
                >
                  {isOpen ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="text-white" size={30} />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="text-white" size={30} />
                    </motion.div>
                  )}
                </button>
                <Button
                  onClick={handleLogin}
                  variant="secondary"
                  className="hidden lg:inline-flex items-center hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Log In
                </Button>
                <Button
                  onClick={handleSignup}
                  variant="primary"
                  className="hidden lg:inline-flex items-center hover:bg-black hover:text-lime-400 transition-colors duration-300"
                >
                  Sign Up
                </Button>
              </div>
            </figure>

            <AnimatePresence>
              {isOpen && (
                <motion.figure
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4 font-semibold">
                    {navLinks.map((link) => (
                      <a href={link.href} key={link.href}>
                        {link.label}
                      </a>
                    ))}
                    <Button className="w-3/4" variant="secondary">
                      Login
                    </Button>
                    <Button className="w-3/4" variant="primary">
                      Signup
                    </Button>
                  </div>
                </motion.figure>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px]"></div>
    </>
  );
}
