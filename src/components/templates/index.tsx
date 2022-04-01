import tw from "tailwind-styled-components";

export const TemplateContainer = tw.div`
w-screen h-screen bg-gray-50 flex justify-center
`;

export const TemplateContent = tw.div`
w-full h-full max-w-screen-lg grid grid-cols-2
`;

export const TemplateMain = tw.main`
flex flex-col justify-center items-center gap-16
`;
