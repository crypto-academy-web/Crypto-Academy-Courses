"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import Button from "@/components/ui/Button";
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
      <Button
        className={cn(
          "bg-accent text-white w-[200px] rounded-[12px]",
          className
        )}
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOutButton;
