import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="bg-purple-500 h-10 text-white font-bold hover:bg-purple-400 disabled:cursor-not-allowed disabled:bg-gray-200"
    >
      {children}
    </button>
  );
}
