import React from "react";

interface TodoListItemDeleteButtonProps {
  onClick?(): void;
}

const TodoListItemDeleteButton = ({
  onClick
}: TodoListItemDeleteButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>삭제</button>
		</div>
  );
}

export default TodoListItemDeleteButton;