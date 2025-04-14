import React, { useState, ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase' // adjust path if needed
import { useUserStore } from '@/app/store/user' // adjust path if needed

import Button from '../ui/Button'
import Text from '../ui/Text'

import user from "@/public/icons/user.svg"
import email from "@/public/icons/email.svg"
import password from "@/public/icons/password.svg"
import lock from "@/public/icons/lock.svg"
import { useRouter } from 'next/navigation'

// Define the type for form state
type FormData = {
    firstName: string
    lastName: string
    email: string
    password: string
}

interface SignupFormProps {
    onClose: () => void;
  }

const SignupForm: React.FC<SignupFormProps> = ({ onClose }) => {
    const currentPath = window.location.pathname;

    const setUser = useUserStore((state) => state.setUser)
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true);
        try {
            // Create user in Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            )
            const user = userCredential.user

            // Add user info to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                createdAt: new Date()
            })

            setUser({
                uid: user.uid,
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName
            })

            console.log('User created:', user)
            alert('Signup successful!')
            if (currentPath === "/checkout") {
               onClose(); // Close the modal if it's open
              } else {
                router.push("/my-account");
                onClose();
              }

        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Signup error:', error.message)
                alert(error.message)
            } else {
                console.error('Unknown signup error:', error)
                alert('An unexpected error occurred during signup.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-[390px] mt-[49px]">
                {/* First Name */}
                <div className="relative mb-[20px]">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Image src={user} alt="user icon" width={20} height={20} />
                    </span>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full max-w-[391px] placeholder:text-[#202630] pl-12 pr-4 py-3 border-b border-[#000000] focus:outline-none"
                    />
                </div>

                {/* Last Name */}
                <div className="relative mb-[20px]">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Image src={user} alt="user icon" width={20} height={20} />
                    </span>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full max-w-[391px] placeholder:text-[#202630] pl-12 pr-4 py-3 border-b border-[#000000] focus:outline-none"
                    />
                </div>

                {/* Email */}
                <div className="relative mb-[20px]">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Image src={email} alt="email icon" width={20} height={20} />
                    </span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full max-w-[391px] placeholder:text-[#202630] pl-12 pr-4 py-3 border-b border-[#000000] focus:outline-none"
                    />
                </div>

                {/* Password */}
                <div className="relative mb-[20px]">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Image src={password} alt="password icon" width={20} height={20} />
                    </span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full max-w-[391px] placeholder:text-[#202630] pl-12 pr-4 py-3 border-b border-[#000000] focus:outline-none"
                    />
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    disabled={loading}
                    className="w-[208px] mx-auto h-[42px] rounded-[56px] bg-[#000080] text-[13px] font-medium font-helvetica text-white mb-[27px] mt-[42px]"
                >
                    {loading ? "Loading" : "Get Started"}
                </Button>

                {/* Info Text */}
                <div className="flex gap-1 mb-[41px] justify-center items-center w-full max-w-[380px]">
                    <Text className="text-[14px] leading-[22px] font-normal">
                        By creating an account, you agree to the{" "}
                        <span className="text-[#0060FF]">
                            <Link href="/">privacy policy</Link>
                        </span>{" "}
                        and to receive economic and marketing communications from AvaTrade.
                        You can remove yourself from the mailing list at any time.
                    </Text>
                </div>

                {/* Security Info */}
                <div className="flex gap-2 mb-[19px] justify-center items-start">
                    <Image src={lock} alt="lock" />
                    <Text className="text-center text-[12px] text-[#202630]/70 font-bold">
                        Safe & Secure Sign Up
                    </Text>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
