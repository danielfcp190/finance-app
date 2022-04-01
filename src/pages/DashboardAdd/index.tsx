import InputText from "components/molecules/inputText";
import Button from "components/atoms/Button";
import Link from "components/molecules/Link";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMain,
} from "components/templates";
import Sidebar from "components/organism/Sidebar";

export default function DashboardAdd() {
  return (
    <TemplateContainer>
      <TemplateContent>
        <Sidebar />
        <TemplateMain>
          <h1 className="font-bold text-3xl">New Expense</h1>
          <form className="flex flex-col w-full gap-4 max-w-xs">
            <InputText label="Name" type="text" />
            <InputText label="Category" type="text" />
            <InputText label="Cost" type="number" />
            <Button>Create</Button>
          </form>
          <Link href="/dashboard">Go to Dashboard</Link>
        </TemplateMain>
      </TemplateContent>
    </TemplateContainer>
  );
}
