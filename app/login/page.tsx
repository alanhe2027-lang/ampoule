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
    <form onSubmit={handleLogin} className="flex flex-col gap-3">
      <input
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        placeholder="Enter your email"
        className="border rounded p-2"
      />
      <button type="submit" className="bg-orange-500 text-white rounded p-2">
        Send magic link
      </button>
    </form>
  );
}