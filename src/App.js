import "./App.css";
import Todos from "./component/Todos";
import Todo from "./component/Todo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos />}></Route>
        <Route path="/todo/:id" element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
