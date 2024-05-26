import React from "react";
import { CustomButton } from "./Button.style";
interface ButtonProps {
  title: string;
}
const Button = ({ title }: ButtonProps) => {
  return <CustomButton>{title}</CustomButton>;
};

export default Button;
