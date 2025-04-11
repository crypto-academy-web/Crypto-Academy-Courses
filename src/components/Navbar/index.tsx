"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

import Button from "../ui/Button";
import { cn } from "@/lib/utils";
import Drawer from "../ui/Drawer";
import SidebarUser from "../SidebarUser";
// import logo from "../../../public/logo.svg";
// import linkedinsvg from "../../../public/linkedin.svg";
// import linkedinsvgmob from "../../../public/linkedin1.svg";
// import usersvg from "../../../public/user.svg";
// import loginsvg from "../../../public/login.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const pathname = usePathname();

  // Load activeTab from local storage on component mount
  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  // Save activeTab to local storage whenever it changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
  };

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      const listItems = document.querySelectorAll(".list-items");
      gsap.set(listItems, { opacity: 0, x: 20 });
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <nav
        className={cn(
          "min-h-[80px] bg-cover z-50 w-full",
          pathname === "/" ? "absolute" : "relative bg-black"
        )}
      >
        <div className="flex justify-center items-center w-full min-h-[80px]">
          <div className="relative max-w-[1300px] min-h-[80px] w-full flex flex-wrap items-center justify-between mx-auto py-4">
            <div className="flex justify-between items-center w-full mob:px-5 ">
              {/* dekstop navbar */}
              <Link
                href="/"
                className="flex mob:justify-start xl:hidden space-x-3 mob:w-[140px] rtl:space-x-reverse"
              ></Link>

              <ul className="font-normal mob:absolute xl:hidden mob:top-[100px] items-center mob:px-4 mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[32px] md:flex-row rtl:space-x-reverse md:mt-0 tab:bg-black">
                <li>
                  <Link
                    href="trading-courses"
                    onClick={() => handleTabChange("#")}
                    className={`block text-[14px] font-helvitica font-bold leading-[100%] text-white ${activeTab === "#" ? " " : "text-white"
                      }`}
                  >
                    Trading Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="trading-guides"
                    onClick={() => handleTabChange("/product-and-services")}
                    className={`block text-[14px] font-helvitica font-bold leading-[100%] text-white ${activeTab === "#" ? " " : "text-white"
                      }`}
                  >
                    Trading Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    onClick={() => handleTabChange("/news")}
                    className={`block text-[14px] font-helvitica font-bold leading-[100%] text-white ${activeTab === "#" ? " " : "text-white"
                      }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    onClick={() => handleTabChange("/awareness-and-advocacy")}
                    className={`block text-[14px] font-helvitica font-bold leading-[100%] text-white ${activeTab === "#" ? " " : "text-white"
                      }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="flex items-center gap-4 xl:hidden">
                <Link
                  href="/signup"
                  onClick={() => handleTabChange("/signup")}
                  className="w-[109px] "
                >
                  <Button className="border-accent">Login</Button>
                </Link>

                <Link
                  href="/login"
                  className="w-[109px]"
                  onClick={() => handleTabChange("/login")}
                >
                  <Button className="max-w-[124px] text-white border-accent bg-accent">
                    Get Started
                  </Button>
                </Link>

                <SidebarUser />
              </div>
              {/* dekstop navbar */}

              {/* mobile navbar */}
              <div className="hidden xl:block w-full">
                <div className="flex w-full justify-between items-center flex-row-reverse">
                  <div
                    className="relative cursor-pointer flex"
                    onClick={onOpen}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center w-10 h-10 justify-center text-sm  text-[#fff] rounded-lg"
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="w-[30px] h-[30px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h15M1 7h15M1 13h15"
                        />
                      </svg>
                    </button>
                  </div>
                  logo
                </div>
                <Drawer isOpen={isOpen} onClose={onClose}>
                  <ul className="font-normal w-full z-50 flex flex-col py-4 gap-0">
                    {[
                      "/",
                      "/Trading Courses",
                      "/Trading Guides",
                      "/About Us",
                      "/Contact Us",
                    ].map((path) => (
                      <a
                        href={path}
                        key={path}
                        onClick={() => handleTabChange(path)}
                        className={`block text-[14px] font-helvitica font-bold leading-[100%] text-white  ${activeTab === path ? "text-white" : "text-white"
                          }`}
                      >
                        <li className="flex justify-start py-[15px] list-items mob:px-[25px]">
                          {path === "/" ? "Home" : path.slice(1).toUpperCase()}
                        </li>
                      </a>
                    ))}
                  </ul>
                </Drawer>
              </div>

              {/* mobile navbar end*/}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
