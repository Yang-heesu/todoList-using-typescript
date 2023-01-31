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
    <div>
		<input type="checkbox" defaultChecked={itemChecked} onClick={onClick}/>
	</div>
  );
}

export default TodoListItemCheckBox;