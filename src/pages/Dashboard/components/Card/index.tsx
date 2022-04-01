import Button from "components/atoms/Button";
import tw from "tailwind-styled-components";

export default function Card({ expense, category, cost }) {
  return (
    <CardContainer>
      <h2 className="font-bold text-xl ">{expense}</h2>
      <p className="px-4 h-8 flex items-center justify-center text-purple-900 bg-purple-100 rounded-full self-start">
        {category}
      </p>
      <p className="font-medium">{cost}</p>
      <footer className="w-full flex justify-between">
        <Button variant="ghost">Edit</Button>
        <Button variant="ghost">Delete</Button>
      </footer>
    </CardContainer>
  );
}

export const CardContainer = tw.article`
bg-white p-4 shadow-md  relative flex flex-col justify-between gap-4
`;
