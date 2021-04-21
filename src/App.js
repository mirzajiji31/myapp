import Welcome from "./components/welcome";
import HomePage from "./pages/home";

import "./App.css";
import TodoHome from "./pages/todo";

function App() {
  return (
    <div className="container">
      {/* <Welcome /> */}
      {/* <HomePage /> */}

      <TodoHome />
    </div>
  );
}

export default App;
