'use client'

import React, { useState } from "react";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const WriteUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/api/sendForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log("API response:", result);
  
      if (result.error) {
        alert("Failed to send message. Please try again.");
      } else {
        alert("Your message has been sent!");
        // Clear the form
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="w-full flex justify-center items-center">
      <form className="w-full max-w-[1242px] px-5" onSubmit={handleSubmit}>
        <Text className="text-black text-[21px] font-bold mb-[23px]">
          Write to us:
        </Text>

        <div className="flex justify-between items-center mb-[18px] mob:flex-col mob:gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-[#202630]/10 w-full max-w-[590px] h-[80px] px-[30px] focus:outline-none mob:max-w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#202630]/10 w-full max-w-[590px] h-[80px] px-[30px] focus:outline-none mob:max-w-full"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-[#202630]/10 w-full h-[260px] p-[30px] focus:outline-none mb-[45px]"
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            className="max-w-[186px] bg-primary h-[46px] rounded-[7px] mb-[45px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WriteUs;
