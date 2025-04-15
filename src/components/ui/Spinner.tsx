import React from "react";
import { ImSpinner } from "react-icons/im";

interface SpinnerProps {
  fill?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ fill = "#fff" }) => {
  return <ImSpinner fill={fill} className="animate-spin text-[38px]" />;
};

export default Spinner;
