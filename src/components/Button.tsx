import type { ReactElement } from 'react';

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600"
};

const defaultStyles =
  "px-4 py-2 rounded-md font-light flex items-center transition-opacity active:opacity-70";

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading
}: ButtonProps) {
  return (
    <button
      onClick={loading ? undefined : onClick}
      disabled={loading}
      className={
        variantClasses[variant] +
        " " +
        defaultStyles +
        (fullWidth ? " w-full justify-center" : "") +
        (loading ? " opacity-60 cursor-not-allowed" : "")
      }
    >
      {startIcon && !loading && <div className="pr-2">{startIcon}</div>}
      {loading ? "Loading..." : text}
    </button>
  );
}
