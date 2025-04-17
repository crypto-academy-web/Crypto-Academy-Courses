"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import SideCategory from "./SideCategory";
import clock from "@/public/icons/clock.svg";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useUserId } from "@/app/store/user";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useCourseStore } from "@/app/store/useCourseStore";
import { courses as allCourses, Course } from "@/lib/constants/courses";

const Products = () => {
  const [visibleCourses, setVisibleCourses] = useState(6);
  const [isAllCoursesVisible, setIsAllCoursesVisible] = useState(false);

  const [purchasedCourseIds, setPurchasedCourseIds] = useState<string[]>([]);
  const userId = useUserId();
  const router = useRouter();
  const { setSelectedCourse } = useCourseStore();

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      if (!userId) return;

      try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          const purchased = data.purchasedCourses || [];
          const ids = purchased.map((course: Course) => course.id); // assuming each course has an `id`
          setPurchasedCourseIds(ids);
        }
      } catch (error) {
        console.error("Error fetching purchased courses:", error);
      }
    };

    fetchPurchasedCourses();
  }, [userId]);

  const handleCourseClick = (course: Course) => {
    const isPurchased = purchasedCourseIds.includes(course.id);
    setSelectedCourse(course);
    router.push(
      isPurchased || course.type === "free"
        ? "/start-trading-course"
        : "/checkout"
    );
  };

  const handleLoadMore = () => {
    setVisibleCourses(allCourses.length);
    setIsAllCoursesVisible(true);
  };

  const handleShowLess = () => {
    setVisibleCourses(9);
    setIsAllCoursesVisible(false);
  };

  return (
    <div className="w-full px-5">
      <div className="max-w-[1313px] mx-auto w-full">
        <div className="flex justify-between">
          <Text as="h1" className="text-black text-[36px] mob:hidden">
            Trading Courses
          </Text>
          {/* <div className="flex items-center space-x-[2px] max-w-[199px] w-full">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow focus:outline-none font-helvetica text-[12px] text-primary border mr-[-5px] border-[#00000066] px-3 py-2 w-full max-w-[175px] h-[50px]"
            />
          </div> */}
          <div className="flex items-center">
            <button className="bg-primary w-[80px] h-[50px] flex items-center justify-center text-[12px] font-helvetica font-medium text-white">
              Sort By
            </button>
            <select className="flex-grow focus:outline-none font-helvetica text-[12px] text-primary border border-[#00000066] px-3 py-2 w-full max-w-[195px] h-[50px] bg-white">
              <option value="release_date_desc">Forex Trading</option>
              <option value="release_date_asc">Crypto Trading</option>
              <option value="price_desc">
                {" "}
                Advanced Day Trading Strategies
              </option>
            </select>
          </div>
        </div>

        <Text as="h1" className="text-black text-[36px] mob:block hidden mt-8">
          Trading Courses
        </Text>

        <Text className="text-[14px] font-helvetica font-normal leading-[133%] max-w-[1187px] my-8 mob:my-4">
          Unlock your trading potential with AvaAcademy! Register for free and
          gain exclusive access to advanced courses on trading platforms...
        </Text>

        <div className="flex mob:flex-wrap mob:justify-center justify-between w-full gap-12 mt-14">
          <div className="w-full max-w-[251px]">
            <SideCategory />
          </div>

          <div className="">
            <div className="w-full max-w-[914px] flex flex-wrap items-center mob:justify-center gap-12">
              {allCourses.slice(0, visibleCourses).map((course) => {
                const isPurchased = purchasedCourseIds.includes(course.id);
                const displayPrice =
                  course.type === "free"
                    ? "Free"
                    : isPurchased
                    ? "Purchased"
                    : `$${course.amount?.toFixed(2)}`;

                return (
                  <div
                    key={course.id}
                    onClick={() => handleCourseClick(course)}
                    className="w-[272.07px] rounded-[20px] course-shadow relative cursor-pointer"
                  >
                    {course.type === "paid" && (
                      <button className="bg-[#FF0000] w-[39px] h-[21px] rounded-[3px] absolute top-[15px] right-[15px] uppercase text-[9px] font-helvetica font-normal text-white">
                        HOT
                      </button>
                    )}
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
                          <Image
                            src={clock}
                            alt="clock"
                            width={10}
                            height={10}
                          />
                          <Text className="text-[9px] text-black">
                            {course.duration}
                          </Text>
                        </div>
                        <Text className="text-[12px] font-bold">
                          {displayPrice}
                        </Text>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {isAllCoursesVisible ? (
              <Button
                className="mx-auto w-[186px] h-[45px] bg-primary my-12"
                onClick={handleShowLess}
              >
                Show Less
              </Button>
            ) : (
              <Button
                className="mx-auto w-[186px] h-[45px] bg-primary my-12"
                onClick={handleLoadMore}
              >
                Load More
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
