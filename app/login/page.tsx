"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Logging in as ${email}`); // Replace with Supabase auth
  }

  return (
    <div className="min-h-screen flex bg-white text-gray-900">
      {/* Left side — login form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 lg:px-24">
        <h1 className="text-3xl font-semibold mb-2">Welcome back</h1>
        <p className="text-gray-500 mb-8">Sign in to your account</p>

        <form onSubmit={handleLogin} className="space-y-6">
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

          <div className="flex items-center justify-between">
            <a
              href="/forgot-password"
              className="text-sm text-gray-600 hover:text-black hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-medium rounded-lg py-3 transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-black font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* Right side — image with overlay text */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="/login-hero.png" // Add your own image in /public
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-10 left-10 text-white max-w-xs drop-shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Focus and flow.</h2>
          <p className="text-sm text-gray-200">
            Log in to continue where you left off and keep mastering smarter.
          </p>
        </div>
      </div>
    </div>
  );
}