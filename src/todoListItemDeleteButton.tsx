import React from "react";

interface TodoListItemDeleteButtonProps {
  onClick?(): void;
}

const TodoListItemDeleteButton = ({
  onClick
}: TodoListItemDeleteButtonProps) => {
  return (
    <span>
      <button onClick={onClick}>삭제</button>
		</span>
  );
}

export default TodoListItemDeleteButton;