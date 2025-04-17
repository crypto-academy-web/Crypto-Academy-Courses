"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

import Button from "../ui/Button";
import Text from "../ui/Text";
import { cn } from "@/lib/utils";
import Drawer from "../ui/Drawer";
import Modal from "../ui/Modal";
import { useUser, useUserId } from "@/app/store/user";
// import LogOutButton from "../Auth/Logout";
import DropDown from "./DropDown";
import logo from "@/public/icons/logo.svg";

import searchbar from "@/public/icons/searchbar.svg";
import SearchModal from "../ui/SerchModal";
// import linkedinsvg from "../../../public/linkedin.svg";
// import linkedinsvgmob from "../../../public/linkedin1.svg";
// import usersvg from "../../../public/user.svg";
// import loginsvg from "../../../public/login.svg";

const navLinksMob = [
  { label: "Home", path: "/" },
  { label: "Trading Courses", path: "/trading-courses" },
  { label: "Trading Guides", path: "/trading-guides" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const userId = useUserId();
  const user = useUser();

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [initialView, setInitialView] = useState<
    "login" | "getStarted" | "search"
  >("search");
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

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

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on mount and on resize
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Initial
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✨ Conditional nav class based on screen size and path
  const navClass = isMobile
    ? cn(
        "min-h-[80px] bg-cover z-50 w-full",
        pathname === "/" ? "absolute" : "relative bg-black"
      )
    : cn(
        "top-0 z-50 w-full h-[120px] transition-all duration-500 ease-in-out flex justify-center items-center",
        pathname === "/" && !scrolled
          ? "sticky bg-transparent"
          : "sticky bg-black ",
        pathname === "/" && scrolled ? "backdrop-blur-md shadow-md" : "",
        "md:transition-all"
      );

  return (
    <>
      <nav className={navClass}>
        <div className="flex justify-center items-center w-full min-h-[80px] overflow-hidden">
          <div
            className={cn(
              "relative max-w-[1300px] min-h-[80px] w-full flex flex-wrap items-center justify-between mx-auto py-4"
            )}
          >
            <div className="flex justify-between items-center w-full mob:px-5 overflow-hidden">
              {/* dekstop navbar */}
              <div>
                <Link
                  href="/"
                  className="flex mob:justify-start xl:hidden space-x-3 mob:w-[140px] rtl:space-x-reverse"
                >
                  <Image src={logo} alt="logo" className="w-[150px]"></Image>
                </Link>
              </div>

              <ul className="font-normal mob:absolute xl:hidden mob:top-[100px] items-center mob:px-4 mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[32px] md:flex-row rtl:space-x-reverse md:mt-0 tab:bg-black">
                <li>
                  <Link
                    href="trading-courses"
                    onClick={() => handleTabChange("#")}
                    className={`block text-[14px] font-helvitica font-bold leading-[100%] text-white ${
                      activeTab === "#" ? " " : "text-white"
                    }`}
                  >
                    Trading Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="trading-guides"
                    onClick={() => handleTabChange("/product-and-services")}
                    className={`block text-[14px] font-helvitica font-bold leading-[100%] text-white ${
                      activeTab === "#" ? " " : "text-white"
                    }`}
                  >
                    Trading Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    onClick={() => handleTabChange("/news")}
                    className={`block text-[14px] font-helvitica font-bold leading-[100%] text-white ${
                      activeTab === "#" ? " " : "text-white"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    onClick={() => handleTabChange("/awareness-and-advocacy")}
                    className={`block text-[14px] font-helvitica font-bold leading-[100%] text-white ${
                      activeTab === "#" ? " " : "text-white"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>

                <button
                  className="w-[60px] h-[50px]"
                  onClick={() => setSearchModalOpen(true)}
                >
                  <Image src={searchbar} alt="searchbar" />
                </button>
                {/* <SearchModal
                isOpen={isSearchModalOpen}
                onClose={() => setSearchModalOpen(false)}
              >
                <Text className="text-xl font-bold mb-4">Search</Text>
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full font-helvetica"
                />
              </SearchModal> */}
              </ul>

              <div className="flex items-center gap-4 xl:hidden">
                {userId ? (
                  <div className=" flex gap-4 items-center">
                    {/* <Button className="w-[124px] rounded-[30px] text-white border-accent bg-accent cursor-text">Hey, {user?.firstName}</Button> */}
                    {/* <LogOutButton className="w-[124px] rounded-[30px] text-white border-accent bg-accent "/> */}
                    <DropDown userName={user?.firstName} />
                  </div>
                ) : (
                  <>
                    <div
                      onClick={() => {
                        setInitialView("login");
                        setIsOpenModal(true);
                      }}
                      className="w-[109px]"
                    >
                      <Button className="border-accent">Login</Button>
                    </div>

                    <div
                      className="w-[109px]"
                      onClick={() => {
                        setInitialView("getStarted");
                        setIsOpenModal(true);
                      }}
                    >
                      <Button className="max-w-[124px] text-white border-accent bg-accent">
                        Get Started
                      </Button>
                    </div>
                  </>
                )}

                <Modal
                  isOpenModal={isOpenModal}
                  onClose={() => setIsOpenModal(false)}
                  initialView={initialView}
                />
                {/* <SidebarUser /> */}
              </div>
              {/* dekstop navbar */}

              {/* mobile navbar */}
              <div className="hidden xl:block w-full">
                <div className="flex w-full justify-between items-center">
                  <Image src={logo} alt="logo" className="w-[160px] h-[60px]" />
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
                  {/* logo */}
                </div>
                <Drawer isOpen={isOpen} onClose={onClose}>
                  <ul className="font-normal w-full z-50 flex flex-col py-4 gap-0">
                    {navLinksMob.map(({ label, path }) => (
                      <a
                        href={path}
                        key={path}
                        onClick={() => handleTabChange(path)}
                        className={`block text-[14px] font-helvitica font-bold leading-[100%] text-white ${
                          activeTab === path ? "text-white" : "text-white"
                        }`}
                      >
                        <li className="flex justify-start py-[15px] list-items mob:px-[25px]">
                          {label}
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
      {/* ✅ SearchModal placed at root of Navbar so it's not affected by scroll */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      >
        <Text className="text-xl font-bold mb-4">Search</Text>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full font-helvetica"
        />
      </SearchModal>
    </>
  );
};

export default Navbar;
