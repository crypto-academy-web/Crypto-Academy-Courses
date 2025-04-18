"use client";

import React, { useState } from "react";

import Text from "@/components/ui/Text";

interface Props {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<Props> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      onLoginSuccess();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-[30px] shadow-md w-full max-w-[1313px] flex flex-col justify-center items-center min-h-[500px]"
      >
        <Text as="h1" className="text-black font-bold mb-4 text-center">
          Admin Login
        </Text>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full max-w-[500px] h-[60px] mb-3 p-2 border  rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-[500px] h-[60px] mb-3 p-2 border font-helvetica rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-accent text-white rounded-md max-w-[500px] h-[60px] my-3 p-2 border font-helvetica"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
