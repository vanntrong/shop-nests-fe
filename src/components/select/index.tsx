import clsx from "clsx";
import React, { ComponentProps, forwardRef } from "react";

import { TOption } from "./option.type";

interface ISelectProps extends ComponentProps<"select"> {
  id: string;
  label?: string;
  inputClassName?: string;
  options: TOption[];
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, label, className, options, error, required, ..._props } = props;

  return (
    <div className={clsx("relative mb-3 flex flex-col", className)}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black-900 transition-all duration-200 ease-out motion-reduce:transition-none"
        >
          {label}
          {required && <span> *</span>}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        {..._props}
        data-te-select-init
        data-te-select-placeholder="Example placeholder"
        className="peer block min-h-[40px] w-full rounded border border-solid border-gray-200 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:shadow-md"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="mt-3 text-sm text-red-500">{error}</span>}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
