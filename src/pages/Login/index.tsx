import InputText from "components/molecules/inputText";
import Button from "components/atoms/Button";
import Link from "components/molecules/Link";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMain,
} from "components/templates";
import Sidebar from "components/organism/Sidebar";

export default function Login() {
  return (
    <TemplateContainer>
      <TemplateContent>
        <Sidebar />
        <TemplateMain>
          <h1 className="font-bold text-3xl">Login to your Account</h1>
          <form className="flex flex-col w-full gap-4 max-w-xs">
            <InputText label="Email" type="email" />
            <InputText label="Password" type="password" />
            <Button>Login</Button>
          </form>
          <Link href="/register">Sign Up</Link>
        </TemplateMain>
      </TemplateContent>
    </TemplateContainer>
  );
}
