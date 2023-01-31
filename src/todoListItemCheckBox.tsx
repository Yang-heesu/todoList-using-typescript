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
    <div onClick={onClick}>
			<input type="checkbox" checked={itemChecked}/>
		</div>
  );
}

export default TodoListItemCheckBox;