"use client";

import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import AdminLogin from "@/components/Admin-Panel/AdminLogin";
import AdminPanelComponent from "@/components/Admin-Panel";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  // const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdmin");
    if (loggedIn === "true") {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem("isAdmin", "true");
    setIsAuthenticated(true);
  };

  if (isChecking) return null; // or loading state

  return isAuthenticated ? (
    <AdminPanelComponent />
  ) : (
    <AdminLogin onLoginSuccess={handleLoginSuccess} />
  );
};

export default AdminPage;
