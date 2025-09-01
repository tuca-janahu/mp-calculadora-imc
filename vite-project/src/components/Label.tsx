import type { LabelHTMLAttributes } from "react";

function Label({children, ...props} : {children: React.ReactNode} & LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...props} className="block text-neutral-600 font-light">
      {children}
    </label>
  );
}

export default Label;
