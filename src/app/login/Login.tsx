"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   try{
    const response = await fetch("/api/auth/login", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: identifier,
        password,
      }),
    });
    const data = await response.json();

    if (!response.ok){
      alert(data.error);
      return;
    }

    alert("Login succesful!")

    window.location.href = "/";
    } catch (error) {
      console.error(error)
      alert("Unable to connect to server.");
    }
  };


  return (
    <div className="flex items-start justify-center min-h-screen pt-24">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-10">
        <h1 className="text-4xl font-bold text-center mb-15">Login Page</h1>

        
        <form onSubmit={handleLogin}>
          <input
            
            type="text"
            placeholder="Username or Email"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? "👁️‍🗨️" : "👁️"}
          </button>
          </div>

          <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          You do not have an account?{" "}
                  <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}