import React from "react";
import clsx from "clsx";

export function Button({
  children,
  className,
  variant = "default",
  size = "md",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",
        {
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":
            variant === "default",
          "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400":
            variant === "secondary",
          "px-4 py-2 text-sm": size === "sm",
          "px-5 py-2.5 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
