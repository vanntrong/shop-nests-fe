import clsx from "clsx";
import React, { FC, ButtonHTMLAttributes } from "react";
import { FaSpinner } from "react-icons/fa";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: FC<IButtonProps> = ({ children, className, isLoading, ...props }) => {
  return (
    <button className={clsx(className)} {...props} disabled={props.disabled || isLoading}>
      {isLoading && <FaSpinner className="animate-spin text-primary" />}
      {children}
    </button>
  );
};

export default Button;
