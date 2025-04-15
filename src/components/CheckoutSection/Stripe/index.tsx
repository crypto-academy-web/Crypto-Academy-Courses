import React, { FormEvent } from "react";
import CreditCardInput from "./CreditCardInput";
import useStripePayment from "./useStripePayment";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  streetAddress: string;
  aptNumber: string;
  state: string;
  zipCode: string;
}


interface StripeFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  formData: FormData;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}


const Stripe: React.FC<StripeFormProps> = ({ handleSubmit, formData, setLoading, loading }) => {


  const { onStripeSubmit } = useStripePayment();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      // Exclude additionalInfo from validation check
      const { ...formDataWithoutAdditionalInfo } = formData;
      const allFieldsFilled = Object.values(formDataWithoutAdditionalInfo).every(
        (value) => value.trim() !== ""
      );
  
      if (!allFieldsFilled) {
        alert("Please fill all required fields.");
        return;
      }
  
      setLoading(true);
  
      const res = await onStripeSubmit();
  
      if (res?.success) {
        handleSubmit(e);
        // alert("payment success");
      } else {
        setLoading(false); //  Stop loader on failed stripe result
        // alert("Payment failed. Please check your card details.");
      }
    } catch (error) {
      console.error("An error occurred during submission:", error);
      alert("An error occurred. Please try again.");
      setLoading(false); // Stop loader on error
    }
  };
  
  return (
    <div>
      <form className="w-full border border-[#EADCBE] rounded-[7.19px] px-[30px] py-[25px] mb-10" onSubmit={(e) => onSubmit(e)}>
        <CreditCardInput />
        <input
          className="w-full  h-[60px] mb-[14px] border border-[#C8C8C8] outline-none rounded-[7.19px] px-5 placeholder:text-[#000000]  font-inter"
          type="text"
          placeholder="Name on card"
        />

        <Button className="w-full h-[60.19px] rounded-[7.19px] mb-3 bg-black text-white">
          {loading ? "Submitting..." : " Place Order"}
        </Button>

        <Text
          as="p"
          className="text-[16px] text-[#000000] font-futuraBT font-normal  "
        >
          {" "}
          By placing your order, you agree to our company{" "}
          <span className="font-medium"> Privacy policy </span> and{" "}
          <span className="font-medium"> Conditions of use.</span>
        </Text>
        {/* 
        <button
          type="submit"
          disabled={loading}
          className="w-full uppercase my-14  h-[59px] rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata"
        >
        {loading ? "Submitting..." : "Pay Now"}
        </button> */}


      </form>
    </div>
  );
};

export default Stripe;
