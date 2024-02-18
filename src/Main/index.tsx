import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const onTodoListClick = () => {
    navigate("/todo");
  };

  return (
    <div>
      <h1>메인 페이지</h1>

      <h3>투두리스트</h3>
      <button onClick={onTodoListClick}>투두리스트</button>
    </div>
  );
}

export default MainPage;
