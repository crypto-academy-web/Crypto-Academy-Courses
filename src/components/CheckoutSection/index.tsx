"use client";
import React, { useState, useEffect } from "react";
import Text from "../ui/Text";
import PlaceOrder from "./PlaceOrder";
import { useCourseStore } from "@/app/store/useCourseStore";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useUser, useUserId } from "@/app/store/user";
import { db } from "@/firebase"; // Adjust if needed
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeForm from "./Stripe";
import axios from "axios";
import Spinner from "../ui/Spinner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  streetAddress: string;
  aptNumber: string;
  state: string;
  zipCode: string;
}


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);


const CheckoutSection = () => {
  const { selectedCourse } = useCourseStore();
  const user = useUser();
  const userId = useUserId();
  const router = useRouter(); // Initialize the router

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [stateName, setStateName] = useState("");
  const [zip, setZip] = useState("");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [initialView, setInitialView] = useState<"login" | "getStarted">("login");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
    }
  }, [user]);

  if (!selectedCourse) return <div>No course selected.</div>;

  const formData: FormData = {
    firstName,
    lastName,
    email,
    streetAddress: street,
    aptNumber: apt,
    state: stateName,
    zipCode: zip,
  };

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !street || !apt || !stateName || !zip) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!userId) {
      alert("User not logged in.");
      return;
    }

    try {
      // Step 1: Save course to Firestore
      const userRef = doc(db, "users", userId);
      const courseToStore = {
        ...selectedCourse,
        purchasedAt: new Date().toISOString(),
      };

      await updateDoc(userRef, {
        purchasedCourses: arrayUnion(courseToStore),
      });

      // Step 2: Prepare data for /api/order
      const orderPayload = {
        firstName,
        lastName,
        email,
        streetAddress: street,
        aptNumber: apt,
        state: stateName,
        zipCode: zip,
        courseTitle: selectedCourse.title,
        price: selectedCourse.amount,
        metadata: {
          courseId: selectedCourse.id,
          userId,
        },
      };
      console.log("orderPayload", orderPayload);

      // Step 3: Call /api/order using axios

      alert("Course purchased successfully!");
      setLoading(false);

      router.push("/my-account");

      const response = await axios.post("/api/order", orderPayload);
      console.log("Stripe response:", response.data);

    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    }
  };



  return (
    <div className="flex justify-center items-center px-5 mt-24 mb-16 relative">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <Spinner fill="#000" />
        </div>
      )}

      <div className="w-full max-w-[1194px]">
        <div className="flex flex-wrap gap-[23px] relative">
          {/* Left Section */}
          <div className="flex-col w-full max-w-[656.74px]">
            <Text as="h2" className="text-[22px] text-primary font-helvetica font-normal mb-5">
              Shipping Address
            </Text>

            <form className="w-full border border-black/30 rounded-[7.19px] px-[30px] py-[25px]">
              <div className="flex gap-[16px] mb-3">
                <Text as="p" className="text-[22px] text-primary font-helvetica font-normal">
                  Add New Address
                </Text>
              </div>

              <div className="flex mob:block w-full justify-between mb-2">
                <div className="w-full max-w-[272.22px] mob:max-w-full">
                  <Text as="p" className="text-[16px] text-primary mb-2">First Name</Text>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                  />
                </div>
                <div className="w-full max-w-[272.22px] mob:max-w-full">
                  <Text as="p" className="text-[16px] text-primary mb-2">Last Name</Text>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                  />
                </div>
              </div>

              <div className="mb-2">
                <Text as="p" className="text-[16px] text-primary mb-2">Email</Text>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                />
              </div>

              <div className="mb-2">
                <Text as="p" className="text-[16px] text-primary mb-2">Street Address</Text>
                <input
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="123 Main St"
                  className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                />
              </div>

              <div className="flex mob:block w-full justify-between mb-5">
                <div className="w-full max-w-[182.38px] mob:max-w-full">
                  <Text as="p" className="text-[16px] text-primary mb-2">Apt Number</Text>
                  <input
                    value={apt}
                    onChange={(e) => setApt(e.target.value)}
                    placeholder="12B"
                    className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                  />
                </div>
                <div className="w-full max-w-[182.38px] mob:max-w-full">
                  <Text as="p" className="text-[16px] text-primary mb-2">State</Text>
                  <input
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    placeholder="California"
                    className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                  />
                </div>
                <div className="w-full max-w-[182.38px] mob:max-w-full">
                  <Text as="p" className="text-[16px] text-primary mb-2">Zip</Text>
                  <input
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="90001"
                    className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                  />
                </div>
              </div>
            </form>

            {userId ? (
              <>
                <Text as="h2" className="text-[22px] text-primary font-helvetica font-normal mb-5 mt-7">
                  Payment Method
                </Text>
                {/* <Button onClick={handleSubmit} className="bg-primary w-full h-[70px] rounded-[7.19px] text-[22px]">
                  Submit
                </Button> */}
                <Elements stripe={stripePromise}>
                  <StripeForm formData={formData} handleSubmit={handleSubmit} setLoading={setLoading} loading={loading} />
                </Elements>
              </>
            ) : (
              <div className="mb-5 mt-7">
                <Text as="h2" className="text-[22px] text-primary font-helvetica font-normal mb-5">
                  Login first to purchase the course
                </Text>
                <div className="flex gap-6 justify-between">
                  <div className="w-full" onClick={() => { setInitialView("login"); setIsOpenModal(true); }}>
                    <Button className="bg-primary w-full h-[70px] rounded-[7.19px] text-[22px]">Login</Button>
                  </div>
                  <div className="w-full" onClick={() => { setInitialView("getStarted"); setIsOpenModal(true); }}>
                    <Button className="bg-primary w-full h-[70px] rounded-[7.19px] text-[22px]">Get Started</Button>
                  </div>
                </div>
              </div>
            )}

            <Modal isOpenModal={isOpenModal} onClose={() => setIsOpenModal(false)} initialView={initialView} />
          </div>

          {/* Right Section */}
          <div className="flex-col w-full max-w-[514px]">
            <PlaceOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
