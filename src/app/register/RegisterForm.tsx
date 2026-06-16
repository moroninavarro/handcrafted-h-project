"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("buyer");


  const [error, setError] = useState("");
  const [success, setSucess] = useState("");


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSucess("");


    try{
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Const-Type": "application/json",
        },

        body: JSON.stringify(
          {
            username,
            email,
            password,
            confirmPassword,
            role,
       }),
      });

      const data = await response.json();

      if(!response.ok){
        setError(data.error || "Something went wrong.");
        return;
      }

      setSucess(data.message);

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("buyer");
    } catch (err) {
      setError("Unable to connect to the server.");
    }
  }




  return (
    <div className="flex items-start justify-center min-h-screen pt-24">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

      

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
        type="text"
        placeholder="Username"
        className="w-full p-3 border rounded-lg"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />

        <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />

        <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border rounded-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full p-3 border rounded-lg"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        />

        <div>
          <label className="block mb-2 font-medium">
          Account Type
          </label>
            
          <select
          className="w-full p-3 border rounded-lg"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
       
       {success && (
        <p className="text-green-600 text-sm">{success}</p>
       )}


        <button 
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition cursor-pointer"
        >
          Create Account
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link
        href="/login"
        className="text-blue-500 hover:underline"
        >
          Login
        </Link>
      </p>
      </div>
    </div>
  );
}
