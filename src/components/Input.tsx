import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = "text" }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          placeholder={placeholder}
          type={type}
          className="px-4 py-2 m-2 rounded-lg border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
    );
  }
);

Input.displayName = "Input";
