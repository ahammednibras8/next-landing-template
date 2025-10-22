"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import LogoTicker from "@/components/sections/LogoTicker";
import { FeatureItem } from "@/components/sections/auth/FeatureItem";

const FEATURES = [
  {
    title: "Free 14-day trial",
    description: "No credit card required. Cancel anytime.",
  },
  {
    title: "Instant access",
    description: "Get started in seconds with all features unlocked.",
  },
  {
    title: "Premium support",
    description: "Get help from our team whenever you need it.",
  },
];

export default function SignUpPage() {
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
              Start building your{" "}
              <span className="text-lime-400">next big idea</span>
            </h1>
            <p className="text-xl text-white/60 mt-4 leading-relaxed">
              Join thousands of designers and developers creating impactful
              designs effortlessly.
            </p>
          </div>

          <div className="space-y-5">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>

          <LogoTicker />
        </div>

        {/* Right - Sign Up Form */}
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
              <h2 className="text-2xl font-bold text-white">
                Create your account
              </h2>
              <p className="text-white/60 text-sm mt-2">
                Sign up with your email or social account
              </p>
            </div>

            <SignUp
              appearance={{
                baseTheme: dark,
                variables: {
                  colorPrimary: "#a3e635",
                  colorBackground: "#0a0a0a",
                  colorText: "#ffffff",
                  colorTextSecondary: "#a3a3a3",
                  colorInputBackground: "#171717",
                  colorInputText: "#ffffff",
                  colorDanger: "#ef4444",
                  colorSuccess: "#a3e635",
                  colorNeutral: "#737373",
                  borderRadius: "0.75rem",
                  fontFamily: "inherit",
                  fontSize: "0.875rem",
                },
                elements: {
                  rootBox: "w-full",
                  card: "bg-transparent shadow-none p-0 w-full",

                  // Hide default headers
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",

                  // Social buttons
                  socialButtonsBlockButton:
                    "bg-neutral-800 border border-white/10 text-white hover:bg-neutral-700 hover:border-lime-400/50 transition-all duration-300 rounded-xl",
                  socialButtonsBlockButtonText:
                    "text-white font-medium text-sm",
                  socialButtonsIconButton: "text-white",

                  // Primary action button
                  formButtonPrimary:
                    "bg-lime-400 text-neutral-950 hover:bg-lime-500 transition-all duration-300 rounded-xl font-semibold shadow-lg shadow-lime-400/20",

                  // Form inputs
                  formFieldInput:
                    "bg-neutral-800 border border-white/10 text-white placeholder:text-white/40 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 rounded-xl transition-all duration-300",
                  formFieldLabel: "text-white/80 font-medium text-sm",
                  formFieldLabelRow: "mb-2",

                  // Footer & links
                  footerActionLink:
                    "text-lime-400 hover:text-lime-500 font-medium transition-colors",
                  footerActionText: "text-white/60 text-sm",

                  // Divider
                  dividerLine: "bg-white/10",
                  dividerText: "text-white/40 text-xs uppercase tracking-wider",
                  dividerRow: "my-6",

                  // Password field
                  formFieldInputShowPasswordButton:
                    "text-white/60 hover:text-white transition-colors",
                  formFieldAction:
                    "text-lime-400 hover:text-lime-500 transition-colors",

                  // OTP
                  otpCodeFieldInput:
                    "bg-neutral-800 border border-white/10 text-white focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 rounded-xl",

                  // Identity preview (email shown)
                  identityPreviewText: "text-white",
                  identityPreviewEditButton:
                    "text-lime-400 hover:text-lime-500",

                  // Form container
                  formContainer: "gap-4",

                  // Alert/Error messages
                  alertText: "text-sm",

                  // Loading
                  spinner: "border-lime-400",

                  // Form field
                  formField: "mb-4",

                  // Back button
                  backButton: "text-white/60 hover:text-white",
                  backRow: "mb-4",

                  // Main content
                  main: "gap-6",

                  // Footer
                  footer: "mt-6",
                },
              }}
              routing="path"
              path="/signup"
              signInUrl="/login"
            />
          </div>

          <p className="text-center text-white/50 text-sm mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-lime-400 hover:text-lime-500 font-medium transition-colors"
            >
              Sign In
            </Link>
          </p>

          <p className="text-center text-white/40 text-xs mt-4">
            By signing up, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-lime-400 transition-colors"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-lime-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
