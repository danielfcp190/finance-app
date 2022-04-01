import Image from "next/image";
import loginBanner from "@assets/login-banner.svg";
import InputText from "components/molecules/inputText";
import Button from "components/atoms/Button";
import Link from "components/molecules/Link";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center">
      <div className="w-full h-full max-w-screen-lg grid grid-cols-2">
        <aside className="flex">
          <Image
            src={loginBanner}
            alt=""
            layout="fixed"
            width={974}
            height={714.52}
          />
        </aside>
        <main className="flex flex-col justify-center items-center gap-16">
          <h1 className="font-bold text-3xl">Control your expenses</h1>
          <form className="flex flex-col w-full gap-4">
            <InputText label="Email" type="email" />
            <InputText label="Password" type="password" />
            <Button>Login</Button>
          </form>
          <Link href="/register">Sign Up</Link>
        </main>
      </div>
    </div>
  );
}
