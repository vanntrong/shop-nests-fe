import { useSearchParams } from "next/navigation";
import React, { InputHTMLAttributes, forwardRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

import { useForwardRef } from "@/hooks/useForwardRef";

import Button from "../button";

interface IInputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

const InputSearch = forwardRef<HTMLInputElement, IInputSearchProps>(
  ({ onSearch, ...props }, ref) => {
    const innerRef = useForwardRef<HTMLInputElement>(ref);
    const searchParams = useSearchParams();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!innerRef?.current) return;
      if (e.key === "Enter") {
        onSearch?.(innerRef?.current?.value);
      }
    };

    const onClickSearch = () => {
      if (!innerRef?.current) return;
      onSearch?.(innerRef?.current?.value);
    };

    useEffect(() => {
      if (!innerRef?.current) return;
      if (!searchParams.get("keyword") || searchParams.get("keyword") === "")
        innerRef.current.value = "";
    }, [searchParams, innerRef]);

    return (
      <>
        <Button className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg border-[1px] border-white px-0 py-0 lg:hidden">
          <BsSearch color="white" />
        </Button>

        <div className="hidden items-center rounded-3xl border-[1px] border-white px-4 py-2 lg:flex">
          <input
            type="text"
            ref={innerRef}
            {...props}
            className="h-full w-full bg-transparent text-sm text-gray-200 outline-none placeholder:text-gray-200"
            onKeyDown={handleKeyDown}
          />

          <Button onClick={onClickSearch}>
            <BsSearch color="white" />
          </Button>
        </div>
      </>
    );
  }
);

InputSearch.displayName = "InputSearch";

export default InputSearch;
