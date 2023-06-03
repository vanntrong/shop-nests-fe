"use client";

import { ChangeEvent, FC, useCallback } from "react";

import Button from "../button";

interface IQuantityInputProps {
  value: number;
  onChange?: (value: number) => void;
}

const QuantityInput: FC<IQuantityInputProps> = props => {
  const { value, onChange } = props;

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(Number(e.currentTarget.value));
    },
    [onChange]
  );

  const handleDecrease = useCallback(() => {
    if (value <= 1) return;
    onChange?.(value - 1);
  }, [onChange, value]);

  const handleIncrease = useCallback(() => {
    onChange?.(value + 1);
  }, [onChange, value]);

  return (
    <div className="flex items-stretch rounded-sm">
      <Button
        className="rounded-bl-md rounded-tl-md border border-r-0 border-solid border-[#ddd] bg-[#f9f9f9] px-1"
        onClick={handleDecrease}
      >
        -
      </Button>
      <input
        type="number"
        className="w-6 border border-solid border-[#ddd] py-1 text-center"
        value={value}
        onChange={handleInputChange}
      />
      <Button
        className="rounded-br-md rounded-tr-md border border-l-0 border-solid border-[#ddd] bg-[#f9f9f9] px-1"
        onClick={handleIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default QuantityInput;
