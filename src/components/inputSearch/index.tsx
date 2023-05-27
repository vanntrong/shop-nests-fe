import { InputHTMLAttributes, forwardRef } from "react";
import { BsSearch } from "react-icons/bs";

import Button from "../button";

interface IInputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

const InputSearch = forwardRef<HTMLInputElement, IInputSearchProps>(
  ({ onSearch, ...props }, ref) => {
    return (
      <div className="flex items-center rounded-3xl border-[1px] border-white px-4 py-2">
        <input
          type="text"
          ref={ref}
          {...props}
          className="h-full w-full bg-transparent text-sm text-gray-200 outline-none placeholder:text-gray-200"
        />

        <Button>
          <BsSearch color="white" />
        </Button>
      </div>
    );
  }
);

InputSearch.displayName = "InputSearch";

export default InputSearch;
