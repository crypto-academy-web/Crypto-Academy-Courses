"use client";
import React, { useEffect, useState } from "react";
import { useUserStore } from "../store/user";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const { user } = useUserStore();
  const router = useRouter();
  const [checking, setChecking] = useState(true); // wait for Zustand to load

  useEffect(() => {
    if (user) {
      if (user.email !== "admin@gmail.com") {
        router.replace("/");
      } else {
        setChecking(false); // user is admin
      }
    } else {
      // No user — wait briefly, or assume not logged in after timeout
      const timeout = setTimeout(() => {
        router.replace("/");
      }, 1000); // adjust timeout if needed

      return () => clearTimeout(timeout);
    }
  }, [user, router]);

  if (checking) return null; // or show spinner

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;
