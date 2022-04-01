import InputText from "components/molecules/inputText";
import Button from "components/atoms/Button";
import Link from "components/molecules/Link";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMain,
} from "components/templates";
import Sidebar from "components/organism/Sidebar";

export default function Register() {
  return (
    <TemplateContainer>
      <TemplateContent>
        <Sidebar />
        <TemplateMain>
          <h1 className="font-bold text-3xl">Create your Account</h1>
          <form className="flex flex-col w-full gap-4 max-w-xs">
            <InputText label="Email" type="email" />
            <InputText label="Password" type="password" />
            <Button>Create Account</Button>
          </form>
          <Link href="/">Already have an account?</Link>
        </TemplateMain>
      </TemplateContent>
    </TemplateContainer>
  );
}
