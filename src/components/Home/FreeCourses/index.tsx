"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";

import Text from "@/components/ui/Text";
// import course1 from "@/public/images/home/course1.png"
import clock from "@/public/icons/clock.svg";
import { Course } from "@/lib/constants/courses";
import { useCourseStore } from "@/app/store/useCourseStore";

import { db } from "@/firebase";
import Spinner from "@/components/ui/Spinner";

interface Product {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: "free" | "paid";
  imageSrc: StaticImageData;
  amount?: number;
}

const FreeCourses = () => {
  const router = useRouter();
  const { setSelectedCourse } = useCourseStore();
  const [Loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    router.push("/start-trading-course");
  };

  //fetch the courses from firestore
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
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
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const freeCourses = products.filter((course) => course.type === "free");
  const ToShowFreeCourses = freeCourses.slice(0, 4);
  // console.log("free courses", freeCourses);

  return (
    <div className="px-5 pb-20">
      <div className="w-full max-w-[1313px] mx-auto flex justify-between items-end">
        <Text as="h2">Free Courses</Text>
        {/* <Link href="/"></Link> */}
        <Text className="text-[14px] font-medium">View All</Text>
      </div>

      <div className="w-full max-w-[1313px] mx-auto flex flex-wrap items-center  mob:justify-center gap-[37px] mt-8">
        {Loading ? (
          <div className="mx-auto flex justify-center items-center">
            <Spinner fill="black" />
            {/* <Text className="text-black text-[200px]">Loading</Text> */}
          </div>
        ) : (
          <>
            {ToShowFreeCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course)}
                className="w-[300px] rounded-[20px] course-shadow relative cursor-pointer"
              >
                <button className="bg-[#FF0000] w-[39px] h-[21px] rounded-[3px] absolute top-[15px] right-[15px] uppercase text-[9px] font-helvetica font-normal text-white">
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
                    <Text className="text-[12px] font-bold">Free</Text>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FreeCourses;
