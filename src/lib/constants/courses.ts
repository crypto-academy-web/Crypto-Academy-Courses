import course1 from "@/public/images/home/course1.png";
import { StaticImageData } from "next/image";

export type CourseType = 'free' | 'paid';


export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: CourseType;
  amount?: number; // Only for paid courses
  imageSrc: StaticImageData; // 👈 Added image type
}

export const courses: Course[] = [
  {
    id: "course-1",
    title: "All Assets Trading Course",
    description: "Start Trading Course Now... Quick & Dirty",
    duration: "80min",
    type: "free",
    imageSrc: course1
  },
  {
    id: "course-2",
    title: "Advanced Day Trading Strategies",
    description: "Master the art of day trading and maximize profits.",
    duration: "120min",
    type: "paid",
    amount: 49.99,
    imageSrc: course1
  },
  {
    id: "course-3",
    title: "Crypto & Forex Secrets",
    description: "Insider tricks and tools for crypto and forex success.",
    duration: "95min",
    type: "paid",
    amount: 59.99,
    imageSrc: course1
  },
  {
    id: "course-4",
    title: "Advanced Day Trading Strategies",
    description: "Master the art of day trading and maximize profits.",
    duration: "120min",
    type: "paid",
    amount: 49.99,
    imageSrc: course1
  },
  {
    id: "course-5",
    title: "Crypto & Forex Secrets",
    description: "Insider tricks and tools for crypto and forex success.",
    duration: "95min",
    type: "paid",
    amount: 59.99,
    imageSrc: course1
  },
  {
    id: "course-6",
    title: "Advanced Day Trading Strategies",
    description: "Master the art of day trading and maximize profits.",
    duration: "120min",
    type: "paid",
    amount: 49.99,
    imageSrc: course1
  },
  {
    id: "course-7",
    title: "Crypto & Forex Secrets",
    description: "Insider tricks and tools for crypto and forex success.",
    duration: "95min",
    type: "paid",
    amount: 59.99,
    imageSrc: course1
  },
  {
    id: "course-8",
    title: "Basics of Stock Market",
    description: "Perfect for beginners stepping into the trading world.",
    duration: "60min",
    type: "free",
    imageSrc: course1
  },
  {
    id: "course-9",
    title: "Basics of Stock Market",
    description: "Perfect for beginners stepping into the trading world.",
    duration: "60min",
    type: "free",
    imageSrc: course1
  },
  {
    id: "course-10",
    title: "Basics of Stock Market",
    description: "Perfect for beginners stepping into the trading world.",
    duration: "60min",
    type: "free",
    imageSrc: course1
  }
];
