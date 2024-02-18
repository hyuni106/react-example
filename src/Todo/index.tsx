import React, { useRef } from "react";
import { useImmer } from "use-immer";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // useImmer를 사용하여 초기 상태를 생성
  const [todos, updateTodos] = useImmer<Todo[]>([]);

  // todo를 추가하는 함수
  const addTodo = (text?: string) => {
    if (!text) return;

    updateTodos((draft) => {
      // 새로운 todo 객체를 생성하고 배열에 추가
      draft.push({ id: Math.random(), text: text, completed: false });
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {/* todos 배열을 매핑하여 각각의 todo 아이템을 렌더링 */}
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      {/* todo를 추가하는 버튼과 입력 필드 */}
      <input ref={inputRef} type="text" placeholder="Add todo" />
      <button onClick={() => addTodo(inputRef?.current?.value)}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;
