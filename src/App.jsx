import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./Main";
import TodoList from "./Todo";

export default function App() {
  const movePage = () => {};

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
