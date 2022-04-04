import InputText from "components/molecules/inputText";
import Button from "components/atoms/Button";
import Link from "components/molecules/Link";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMain,
} from "components/templates";
import Sidebar from "components/organism/Sidebar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Store } from "../../../utils/Store";
import Router from "next/router";
import jsCookie from "js-cookie";

export default function Login() {
  const { state, dispatch } = useContext(Store);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      Router.push("/dashboard");
    }
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      dispatch({ type: "USER_LOGIN", payload: data });
      jsCookie.set("userInfo", data);
      Router.push("/dashboard");
    } catch (err) {
      alert(err.response.data ? err.response.data.message : err.message);
    }
  };
  return (
    <TemplateContainer>
      <TemplateContent>
        <Sidebar />
        <TemplateMain>
          <h1 className="font-bold text-3xl">Login to your Account</h1>
          <form
            onSubmit={submitHandler}
            className="flex flex-col w-full gap-4 max-w-xs"
          >
            <InputText
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Login</Button>
          </form>
          <Link href="/register">Sign Up</Link>
        </TemplateMain>
      </TemplateContent>
    </TemplateContainer>
  );
}
