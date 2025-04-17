"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@/firebase";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import clock from "@/public/icons/clock.svg";
import { Course } from "@/lib/constants/courses";
import { useCourseStore } from "@/app/store/useCourseStore";
import { useRouter } from "next/navigation";
import { useUserId } from "@/app/store/user";
import { doc, getDoc } from "firebase/firestore";
// import Products from "@/components/TradingCourse/Products";

interface Product {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: "free" | "paid";
  imageSrc: StaticImageData;
  amount?: number;
}

const PaidCourse = () => {
  const router = useRouter();
  const userId = useUserId();
  const { setSelectedCourse } = useCourseStore();

  const [purchasedCourseIds, setPurchasedCourseIds] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState("");
  // const [Loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  //fetch the courses from firestore
  useEffect(() => {
    const fetchProducts = async () => {
      // setLoading(true);
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">),
        }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const paidCourses = products.filter((course) => course.type === "paid");

  // 👇 Load More logic state
  const [visibleCount, setVisibleCount] = useState(4);
  const [showAll, setShowAll] = useState(false);

  const visibleCourses = paidCourses.slice(0, visibleCount);

  const handleToggleCourses = () => {
    if (showAll) {
      setVisibleCount(4);
      setShowAll(false);
    } else {
      setVisibleCount(paidCourses.length);
      setShowAll(true);
    }
  };

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      if (!userId) return;

      try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          const purchased = data.purchasedCourses || [];
          const ids = purchased.map((course: Course) => course.id);
          setPurchasedCourseIds(ids);
        }
      } catch (error) {
        console.error("Error fetching purchased courses:", error);
      }
    };

    fetchPurchasedCourses();
  }, [userId]);

  const handleCourseClick = (course: Course, isPurchased: boolean) => {
    setSelectedCourse(course);
    router.push(isPurchased ? "/start-trading-course" : "/checkout");
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="pt-14 pb-12  bg-[#2026301A] px-5">
      <div className="max-w-[1313px] w-full mx-auto">
        <div className="flex justify-between">
          <Text as="h2">Explore Our Course Categories</Text>
          <div className="w-[302px] h-[57px]">
            <div className="relative">
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 h-[57px] bg-white border-[0.2px] rounded-none border-[#000000]/20 focus:outline-none appearance-none pr-8 text-[14px]"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="option1">Forex Trading</option>
                <option value="option2">Crypto Trading</option>
                <option value="option2">Advanced Day Trading Strategies</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-[37px] mt-12 mob:justify-center">
          {visibleCourses.map((course) => {
            const isPurchased = purchasedCourseIds.includes(course.id);

            return (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course, isPurchased)}
                className="w-[300px] rounded-[20px] course-shadow bg-white relative cursor-pointer"
              >
                <button className="bg-[#FF0000] w-[39px] h-[21px] rounded-[3px] absolute top-[15px] right-[15px] uppercase text-[9px] text-white">
                  HOT
                </button>
                <Image
                  className="w-full h-[154px] object-cover rounded-t-[20px]"
                  src={course.imageSrc}
                  alt={course.title}
                  width={300}
                  height={154}
                />
                <div className="px-[23px] py-[16px]">
                  <Text className="text-[#0000004D] text-[13px] font-light">
                    {course.title}
                  </Text>
                  <Text className="text-[15px] font-bold leading-[20px] mb-5">
                    {course.description}
                  </Text>
                  <hr className="h-[0.8px] w-full bg-black" />
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center gap-2">
                      <Image src={clock} alt="clock" width={10} height={10} />
                      <Text className="text-[9px] text-black">
                        {course.duration}
                      </Text>
                    </div>
                    <Text className="text-[12px] font-bold">
                      {isPurchased ? "Purchased" : course.amount}
                    </Text>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 👇 Load More / See Less Toggle */}
        <Button
          onClick={handleToggleCourses}
          className="mx-auto mt-20 bg-primary text-white rounded-[7px] max-w-[186px] h-[45px] text-[17px] font-medium"
        >
          {showAll ? "See Less" : "Load More"}
        </Button>
      </div>
    </div>
  );
};

export default PaidCourse;
