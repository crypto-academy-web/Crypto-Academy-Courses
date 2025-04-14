"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/app/store/user"; // 🟡 import store

interface LogOutProps {
  className?: string;
}

const LogOutButton: React.FC<LogOutProps> = ({ className }) => {
  const router = useRouter();
  const clearUser = useUserStore((state) => state.clearUser); // 🟢 get the clearUser function

  const handleLogout = async () => {
    try {
      await signOut(auth);
      clearUser(); // ✅ clear Zustand user state
      router.push("/");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <div>
      <button
        className={cn(
          "group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10",
          className
        )}
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOutButton;
