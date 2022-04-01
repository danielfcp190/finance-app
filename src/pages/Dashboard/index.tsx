import Button from "components/atoms/Button";
import { TemplateContainer } from "components/templates";

export default function Dashboard() {
  return (
    <TemplateContainer>
      <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6">
        <span className="font-bold text-2xl">Expense tracker</span>
        <nav className="flex ">
          <Button>Add new expense</Button>
          <Button variant="ghost">Logout</Button>
        </nav>
      </header>
    </TemplateContainer>
  );
}
