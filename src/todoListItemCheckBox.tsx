import React from "react";

interface TodoListItemCheckBoxProps {
	itemChecked: boolean;
	onClick?(): void;
}

const TodoListItemCheckBox = ({
	itemChecked,
	onClick
}: TodoListItemCheckBoxProps) => {
  return (
    <span>
		<input type="checkbox" defaultChecked={itemChecked} onClick={onClick}/>
	</span>
  );
}

export default TodoListItemCheckBox;