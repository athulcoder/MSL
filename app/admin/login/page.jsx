"use client";

import { useState } from "react";
import Image from "next/image";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Connect backend later
    console.log({ username, password });

    alert("Login submitted (connect backend next)");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-50 p-3 rounded-full border">

            <Image
              src="/logo.png"
              alt="MITS Logo"
              width={60}
              height={60}
            />

          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-black text-center text-emerald-900 mb-1">
          MITS Super League
        </h1>

        <p className="text-center text-sm text-gray-500 mb-8">
          Admin Login Panel
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-black"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-lg transition shadow-lg"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} MITS Super League
        </p>

      </div>

    </main>
  );
}
