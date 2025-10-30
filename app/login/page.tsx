"use client";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Sign-up with ${email}`); // Replace with Supabase auth later
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel — signup form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 lg:px-24 bg-white">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Sign up</h1>
        <p className="text-gray-500 mb-6">Create your free account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg py-3 transition-colors"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>

      {/* Right panel — image and text */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="/signup-hero.jpg" // Replace with your own image in /public/
          alt="Signup background"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-10 left-10 text-white max-w-xs drop-shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            Bring your ideas to life.
          </h2>
          <p className="text-sm text-gray-200">
            Sign up for free and access all features for 30 days. No credit
            card required.
          </p>
        </div>
      </div>
    </div>
  );
}