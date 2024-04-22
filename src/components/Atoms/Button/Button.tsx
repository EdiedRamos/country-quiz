import type { ButtonHTMLAttributes, ReactNode } from "react";

import "./Button.scss";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
};
