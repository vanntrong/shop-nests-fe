import clsx from "clsx";
import React, { FC } from "react";

import Button from "@/components/button";
import { TVariant } from "@/types/variant";

interface IButtonVariantProps extends React.ComponentProps<"button"> {
  variant: TVariant;
  isActive?: boolean;
  handleSelected?: (value: string) => void;
}

const ButtonVariant: FC<IButtonVariantProps> = ({
  variant,
  isActive,
  handleSelected,
  ...props
}) => {
  return (
    <Button
      className={clsx(
        "flex-center h-[45px] w-[110px] bg-no-repeat text-[17px] transition-all duration-300",
        isActive &&
          "button-select-type-product-bg rounded-bl-[5px] rounded-tr-[5px] border-[1px] border-yellow-300 bg-primary-300 text-white"
      )}
      onClick={() => handleSelected?.(variant.value)}
      {...props}
    >
      {variant.title}
    </Button>
  );
};

export default ButtonVariant;
