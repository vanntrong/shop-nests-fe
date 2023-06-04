import clsx from "clsx";
import React, { ComponentProps, forwardRef } from "react";

interface ITextareaProps extends ComponentProps<"textarea"> {
  id: string;
  label?: string;
  inputClassName?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, label, className, inputClassName, required, error, ..._props } = props;

  return (
    <div className={clsx("relative mb-3", className)} data-te-input-wrapper-init>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black-900 transition-all duration-200 ease-out motion-reduce:transition-none"
        >
          {label}
          {required && <span> *</span>}
        </label>
      )}
      <textarea
        className={clsx(
          "peer block min-h-[40px] w-full rounded border border-solid border-gray-200 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:shadow-md",
          inputClassName
        )}
        id={id}
        ref={ref}
        {..._props}
      />
      {error && <span className="mt-3 text-sm text-red-500">{error}</span>}
    </div>
  );
});

Textarea.displayName = "Input";

export default Textarea;
