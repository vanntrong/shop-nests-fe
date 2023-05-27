import clsx from "clsx";
import React, { FC, ButtonHTMLAttributes } from "react";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<TButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={clsx(className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
