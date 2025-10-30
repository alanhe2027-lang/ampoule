"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert(error.message);
    else alert("Check your email for the login link!");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20%" }}>
      <h1>ampoule</h1>
      <p>Sign in with magic link</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Magic Link</button>
      </form>
    </div>
  );
}