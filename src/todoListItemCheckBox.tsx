import React from "react";

interface TodoListItemCheckBoxProps {
	id: number;
	itemChecked: boolean;
	onClick?(): void;
}

const TodoListItemCheckBox = ({
	id,
	itemChecked,
	onClick
}: TodoListItemCheckBoxProps) => {
  return (
    <div onClick={onClick}>
		<input type="checkbox" defaultChecked={itemChecked}/>
	</div>
  );
}

export default TodoListItemCheckBox;