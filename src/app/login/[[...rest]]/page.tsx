"use client";

import { FeatureItem } from "@/components/sections/auth/FeatureItem";
import LogoTicker from "@/components/sections/LogoTicker";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes"; // ✅ import dark
import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    title: "Secure authentication",
    description: "Your data is protected with industry-standard security.",
  },
  {
    title: "Seamless experience",
    description: "Pick up right where you left off across all devices.",
  },
  {
    title: "24/7 availability",
    description: "Access your projects anytime, anywhere in the world.",
  },
];

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Brand & Features */}
        <div className="hidden lg:block space-y-10">
          <Link href="/" className="inline-block">
            <Image
              src="/branding/logo.svg"
              alt="Logo"
              width={160}
              height={50}
            />
          </Link>
          <div>
            <h1 className="text-5xl font-bold text-white leading-tight">
              Welcome back to{" "}
              <span className="text-lime-400">your workspace</span>
            </h1>
            <p className="text-xl text-white/60 mt-4 leading-relaxed">
              Continue creating impactful designs with the tools you love.
            </p>
          </div>
          <div className="space-y-5">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>
          <LogoTicker />
        </div>

        {/* Right - Sign In Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-block">
              <Image
                src="/branding/logo.svg"
                alt="Logo"
                width={140}
                height={45}
              />
            </Link>
          </div>

          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Welcome back</h2>
              <p className="text-white/60 text-sm mt-2">
                Sign in to your account to continue
              </p>
            </div>

            <SignIn
              appearance={{
                baseTheme: dark, // ✅ use imported dark theme
                variables: {
                  colorPrimary: "#a3e635", // lime
                  colorTextOnPrimaryBackground: "#000000", // black on lime btn
                  colorBackground: "#0a0a0a",
                  colorText: "#ffffff",
                  colorTextSecondary: "#a3a3a3",
                  colorInputBackground: "#171717",
                  colorInputText: "#ffffff",
                  borderRadius: "0.75rem",
                  fontFamily: "inherit",
                  fontSize: "0.875rem",
                },
                elements: {
                  // social buttons
                  socialButtonsBlockButton:
                    "bg-neutral-800 border border-white/10 text-white hover:bg-neutral-700 hover:border-lime-400/50 transition-all duration-300 rounded-xl flex items-center justify-center",
                  socialButtonsBlockButtonText:
                    "text-white font-medium text-sm",
                  socialButtonsIconButton: "text-white",

                  // main form button
                  formButtonPrimary:
                    "bg-lime-400 hover:bg-lime-500 transition-all duration-300 rounded-xl font-semibold text-neutral-950 shadow-lg shadow-lime-400/20",

                  // inputs
                  formFieldInput:
                    "bg-neutral-800 border border-white/10 text-white placeholder:text-white/40 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 rounded-xl transition-all duration-300",
                  formFieldLabel: "text-white/80 font-medium text-sm",
                  formFieldLabelRow: "mb-2",
                  footerActionLink:
                    "text-lime-400 hover:text-lime-500 font-medium transition-colors",
                  footerActionText: "text-white/60 text-sm",
                  dividerLine: "bg-white/10",
                  dividerText:
                    "text-white/40 text-xs uppercase tracking-wider px-2 bg-neutral-900",
                  dividerRow: "my-6",
                  formFieldInputShowPasswordButton:
                    "text-white/60 hover:text-white transition-colors",
                  formFieldAction:
                    "text-lime-400 hover:text-lime-500 transition-colors",
                  otpCodeFieldInput:
                    "bg-neutral-800 border border-white/10 text-white focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 rounded-xl",
                  identityPreviewText: "text-white",
                  identityPreviewEditButton:
                    "text-lime-400 hover:text-lime-500",
                  formContainer: "gap-4",
                  alertText: "text-sm",
                  spinner: "border-lime-400",
                  formField: "mb-4",
                  backButton: "text-white/60 hover:text-white",
                  backRow: "mb-4",
                  main: "gap-6",
                  footer: "mt-6",
                },
              }}
              routing="path"
              path="/login"
              signUpUrl="/signup"
            />
          </div>

          <p className="text-center text-white/50 text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-lime-400 hover:text-lime-500 font-medium transition-colors"
            >
              Sign Up
            </Link>
          </p>

          <p className="text-center text-white/40 text-xs mt-4">
            Protected by industry-standard encryption
          </p>
        </div>
      </div>
    </div>
  );
}
