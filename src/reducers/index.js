import { bindActionCreators, combineReducers } from "redux";

export const selectUserReducer = (selectedUser = null, action) => {
	if (action.type === "SELECT_USER") {
		return action.payload;
	}

	return selectedUser;
};

export const selectListsReducer = (todoLists = [], action) => {
	if (action.type === "SELECT_LISTS") {
		return action.payload;
	}

	return todoLists;
};

export const selectTodoListReducer = (activeList = [], action) => {
	if (action.type === "SELECT_TODOLIST") {
		return action.payload;
	}

	return activeList;
};

export const selectTodoItemReducer = (selectedTodoItem = null, action) => {
	if (action.type === "SELECT_TODO") {
		return action.payload;
	}

	return selectedTodoItem;
};

export default combineReducers({
	user: selectUserReducer,
	lists: selectListsReducer,
	todoList: selectTodoListReducer,
	todo: selectTodoItemReducer,
});
