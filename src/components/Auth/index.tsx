"use client"
import React, { useState } from 'react'
import clsx from 'clsx';

import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
interface AuthProps {
    initialView: 'login' | 'getStarted'; // 👈 new prop
    onClose: () => void;

}


const Auth: React.FC<AuthProps> = ({ initialView, onClose }) => {

    const [selected, setSelected] = useState<'login' | 'getStarted'>(initialView);

    return (
        <div className="w-full  mx-auto space-y-4  max-h-[98vh]  overflow-y-auto scrollbar-hidden">
            {/* Toggle Buttons */}
            <div className="flex">
                <button
                    onClick={() => setSelected('login')}
                    className={clsx(
                        'text-[15px] font-medium font-helvetica w-[50%] h-[87px] rounded-tl-[56px] py-2 transition',
                        selected === 'login'
                            ? 'bg-gray-200 text-primary'
                            : 'bg-transparent text-primary hover:bg-gray-100'
                    )}
                >
                    Login
                </button>
                <button
                    onClick={() => setSelected('getStarted')}
                    className={clsx(
                        'text-[15px] font-medium font-helvetica w-[50%] py-2 rounded-tr-[56px] transition',
                        selected === 'getStarted'
                            ? 'bg-gray-200 text-primary'
                            : 'bg-transparent text-primary hover:bg-gray-100'
                    )}
                >
                    Get Started
                </button>
            </div>

            {/* Conditional Content */}
            {selected === 'login' && (
                <LoginForm onClose={onClose} />
            )}

            {selected === 'getStarted' && (
                <SignupForm onClose={onClose} />
            )}
        </div>
    )
}

export default Auth
