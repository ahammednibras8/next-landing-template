"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
    { label: "Changelog", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "Templates", href: "#" },
    { label: "API Reference", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
            {/* Brand Column - Spans 2 columns on desktop */}
            <div className="col-span-2 md:col-span-2">
              <Image
                src="/branding/logo.svg"
                alt="Logo"
                width={140}
                height={45}
                className="mb-6"
              />
              <p className="text-white/50 text-sm mb-6 max-w-xs leading-relaxed">
                The design tool that empowers teams to create impactful designs
                effortlessly.
              </p>

              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="text-white font-medium text-sm mb-3">
                  Stay updated
                </h4>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-lime-400 transition-colors"
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    className="bg-lime-400 text-neutral-950 px-4 py-2 rounded-lg text-sm font-medium hover:bg-lime-500 transition-colors flex items-center gap-1"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div className="col-span-1">
              <h4 className="text-white font-medium text-sm mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-lime-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="col-span-1">
              <h4 className="text-white font-medium text-sm mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-lime-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="col-span-1">
              <h4 className="text-white font-medium text-sm mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-lime-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="col-span-1">
              <h4 className="text-white font-medium text-sm mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-lime-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-neutral-900 border border-white/10 rounded-full p-2 hover:border-lime-400 hover:bg-neutral-800 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon
                    size={18}
                    className="text-white/50 group-hover:text-lime-400 transition-colors"
                  />
                </motion.a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-4 text-sm">
              <a
                href="#"
                className="text-white/40 hover:text-lime-400 transition-colors"
              >
                Status
              </a>
              <span className="text-white/20">•</span>
              <a
                href="#"
                className="text-white/40 hover:text-lime-400 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
