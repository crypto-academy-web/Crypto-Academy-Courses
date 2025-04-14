"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/store/user";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser(); // get user from Zustand
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/"); // or your modal-based path
    }
  }, [user, router]);

  if (!user) {
    return null; // or a loading spinner if preferred
  }

  return <>{children}</>;
};

export default ProtectedRoute;
