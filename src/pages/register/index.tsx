import InputText from "components/molecules/inputText";
import Button from "components/atoms/Button";
import Link from "components/molecules/Link";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMain,
} from "components/templates";
import Sidebar from "components/organism/Sidebar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Store } from "../../../utils/Store";
import Router from "next/router";
import jsCookie from "js-cookie";

export default function Register() {
  const { state, dispatch } = useContext(Store);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      Router.push("/dashboard");
    }
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`passwords don't match`);
    }
    try {
      const { data } = await axios.post("/api/users/signup", {
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
          <h1 className="font-bold text-3xl">Create your Account</h1>
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
            <InputText
              label="Confirm Password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit">Create Account</Button>
          </form>
          <Link href="/">Already have an account?</Link>
        </TemplateMain>
      </TemplateContent>
    </TemplateContainer>
  );
}
