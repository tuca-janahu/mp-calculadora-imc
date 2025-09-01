import type { ButtonHTMLAttributes } from "react";

function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button className="mt-6 bg-rose-400 text-white rounded p-3 w-full hover:bg-rose-500 transition-colors"
     {...props}
     >
      {children}
    </button>
  );
}

export default Button;