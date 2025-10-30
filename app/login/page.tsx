"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert(error.message);
    else alert("Check your email for the login link!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-orange-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          ampoule
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Sign in to continue
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="Enter your email"
            className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg py-3 transition-colors"
          >
            Send magic link
          </button>
        </form>
      </div>
    </div>
  );
}