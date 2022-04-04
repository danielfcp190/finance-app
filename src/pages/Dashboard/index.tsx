import Button from "components/atoms/Button";
import { TemplateContainer } from "components/templates";
import Router from "next/router";
import { useContext } from "react";
import { Store } from "../../../utils/Store";
import Card from "./components/Card";
import jsCookie from "js-cookie";

export default function Dashboard() {
  const array = [
    { id: "0", expense: "Netflix", category: "streamming", cost: "39.99" },
    { id: "1", expense: "Amazon", category: "streamming", cost: "29.99" },
    { id: "2", expense: "Internet", category: "services", cost: "89.99" },
    { id: "3", expense: "Car", category: "utilities", cost: "100.00" },
    { id: "4", expense: "Food", category: "essentials", cost: "400.00" },
    { id: "5", expense: "Pets", category: "essentials", cost: "100.00" },
  ];

  const { state, dispatch } = useContext(Store);

  const handleNavigateToAddNewExpense = () => {
    Router.push("/dashboard/add");
  };

  const handleLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
    jsCookie.remove("userInfo");
    Router.push("/");
  };

  return (
    <TemplateContainer>
      <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6">
        <span className="font-bold text-2xl">Expense tracker</span>
        <nav className="flex gap-4">
          <Button onClick={handleNavigateToAddNewExpense}>
            Add new expense
          </Button>
          <Button variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
        </nav>
      </header>
      <main className="w-full bg-purple-50 max-w-screen-lg h-5/6 grid grid-cols-3 overflow-y-scroll content-start bg-purple-50 gap-4 p-4">
        {array?.map((item) => (
          <Card
            key={item.id}
            expense={item.expense}
            category={item.category}
            cost={item.cost}
          />
        ))}
      </main>
    </TemplateContainer>
  );
}
