"use client";

import { useUser, useClerk } from "@clerk/nextjs";

export default function HomePage() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold text-white mb-4">
          Signup Successful
        </h1>
        <p className="text-white/60 mb-8">
          Welcome {user?.firstName || "there"}! Your account has been created
          successfully.
        </p>

        <button
          onClick={() => signOut({ redirectUrl: "/" })}
          className="bg-lime-400 text-neutral-950 font-medium px-6 py-2 rounded-xl hover:bg-lime-500 transition-all"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
