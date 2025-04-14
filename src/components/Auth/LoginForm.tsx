"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import Button from '../ui/Button'
import Text from '../ui/Text'

import email from "@/public/icons/email.svg"
import password from "@/public/icons/password.svg"
import lock from "@/public/icons/lock.svg"
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '@/firebase'
import { useUserStore } from '@/app/store/user'
import { doc, getDoc } from 'firebase/firestore'

const LoginForm = () => {

    const [loginEmail, setLoginEmail] = useState<string>("");
    const [loginPassword, setLoginPassword] = useState<string>("");
    const [, setLoginError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoginError("");
        setLoading(true);
      
        try {
          const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
          const user = userCredential.user;
      
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
      
          if (docSnap.exists()) {
            const userData = docSnap.data();
      
            // Set user to Zustand
            useUserStore.getState().setUser({
              uid: user.uid,
              email: user.email ?? "",
              firstName: userData.firstName,
              lastName: userData.lastName,
            });
      
            alert("Login successful");
            router.push("/my-account");
          } else {
            alert("User document does not exist.");
          }
      
        } catch (error: unknown) {
          if (error instanceof Error) {
            setLoginError(error.message);
            alert("Error in login");
            console.log("error in login", error.message);
          } else {
            setLoginError("An unknown error occurred.");
            console.log("error in login", error);
          }
        } finally {
          setLoading(false);
        }
      };
      


    return (
        <>
            <div className="w-full flex justify-center items-center">
                <form  onSubmit={handleSubmit} className="w-full mx-auto max-w-[390px] mt-[49px]">
                    {/* Email Input with Icon */}
                    <div className="relative mb-[20px]">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            <Image src={email} alt="email icon" width={20} height={20} />
                        </span>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full max-w-[391px] pl-12 pr-4 py-3 
            border-b border-[#000000] placeholder:text-[#202630]
            focus:outline-none focus:ring-0 focus:border-[#000000] 
            border-t-0 border-l-0 border-r-0"
                            required
                            onChange={(e) => {
                                setLoginEmail(e.target.value);
                            }}
                        />
                    </div>

                    {/* Password Input with Icon */}
                    <div className="relative mb-[20px]">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            <Image
                                src={password}
                                alt="password icon"
                                width={20}
                                height={20}
                            />
                        </span>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full max-w-[391px] pl-12 pr-4 py-3 
            border-b border-[#000000] 
            focus:outline-none focus:ring-0 focus:border-[#000000] placeholder:text-[#202630]
            border-t-0 border-l-0 border-r-0"
                            required
                            onChange={(e) => {
                                setLoginPassword(e.target.value);
                            }}
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-[208px] mx-auto h-[42px] rounded-[56px] bg-[#000080] text-[13px] font-bold font-helvetica text-white mb-[20px] mt-[29px]">
                        {loading ? "Loading" : "Log In"}
                    </Button>
                    <div className="flex gap-1 mb-[48px] justify-center items-center">
                        <Image src={lock} alt="lock" />
                        <Text className="text-[10px] text-[#202630]/70">
                            Please use your AvaTrade credentials to log in
                        </Text>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-center underline font-helvetica mx-auto text-[12px] text-[#202630]/70 mb-[60px]">
                            Forget Your Password?
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm
