"use client";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Sign-up with ${email}`);
  }

  return (
    <div className="min-h-screen flex bg-white text-gray-900">
      {/* Left side — form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 lg:px-24">
        <h1 className="text-3xl font-semibold mb-2">Sign up now</h1>
        <p className="text-gray-500 mb-8">Create a free account</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label
              htmlFor="confirm"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Repeat password
            </label>
            <input
              id="confirm"
              type="password"
              placeholder="Repeat password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-medium rounded-lg py-3 transition-colors"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-black font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>

      {/* Right side — image with overlay text */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="/signup-hero.jpg" // replace with your own image in /public
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-10 left-10 text-white max-w-xs drop-shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            Bring your ideas to life.
          </h2>
          <p className="text-sm text-gray-200">
            Sign up for free and enjoy access to all features for 30 days. No
            credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}