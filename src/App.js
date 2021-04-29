import Welcome from "./components/welcome";
import HomePage from "./pages/home";
import TodoHome from "./pages/todo";
import Counter from "./pages/counter";

import Navigation from "./components/navigation";
import "./App.css";

import { useState } from "react";
import { object } from "prop-types";

function App() {
  const [page, setPage] = useState({
    homePage: true,
    todoHome: false,
    counter: false,
  });

  const onPageChange = (pageKey) => {
    const updatePages = { ...page };
    // Object.keys(page).forEach((key) => {
    //   if (key === pageKey) {
    //     updatePages[pageKey] = true;
    //   } else {
    //     updatePages[key] = false;
    //   }
    // });

    for (let key of Object.keys(updatePages)) {
      if (key === pageKey) {
        updatePages[pageKey] = true;
      } else {
        updatePages[key] = false;
      }
    }

    setPage(updatePages);
  };

  return (
    <div className="container">
      {/* <Welcome /> */}
      <Navigation onPageChange={onPageChange} pages={page} />
      <hr />

      {page.homePage && <HomePage />}
      {page.todoHome && <TodoHome />}
      {page.counter && <Counter />}
    </div>
  );
}

export default App;
