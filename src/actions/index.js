export const selectUser = (user) => {
	return {
		type: "SELECT_USER",
		payload: user,
	};
};

export const selectLists = (lists) => {
	return {
		type: "SELECT_LISTS",
		payload: lists,
	};
};

export const selectTodoList = (todoList) => {
	return {
		type: "SELECT_TODOLIST",
		payload: todoList,
	};
};

export const selectTodo = (todo) => {
	return {
		type: "SELECT_TODO",
		payload: todo,
	};
};
