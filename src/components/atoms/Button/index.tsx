import { ButtonHTMLAttributes, ReactNode } from "react";
import tw from "tailwind-styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "ghost";
}

export default function Button({ children, variant, ...props }: Props) {
  if (variant === "ghost") {
    return <GhostButton {...props}>{children}</GhostButton>;
  }
  return <MainButton {...props}>{children}</MainButton>;
}

export const BaseButton = tw.button`
 h-10 px-8 text-white font-bold  disabled:cursor-not-allowed disabled:bg-gray-200
`;

export const MainButton = tw(BaseButton)`
bg-purple-500 hover:bg-purple-400
`;

export const GhostButton = tw(BaseButton)`
bg-transparent hover:bg-purple-100 text-purple-500
`;
