import React, { useEffect } from "react";
import { connect } from "react-redux";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Route from "./components/Route";
import "./App.css";
import TodoList from "./screens/TodoList";
import { getUserLists } from "./tools/db";
import { selectLists } from "./actions";

const App = ({ user, selectLists }) => {
	useEffect(() => {
		if (user) {
			const fetchLists = async () => {
				const tmpList = await getUserLists(user.uid);
				selectLists(tmpList);

				window.history.pushState({}, "", "/todolist");
				const navEvent = new PopStateEvent("popstate");
				window.dispatchEvent(navEvent);
			};

			fetchLists();
		}
	}, [user, selectLists]);

	return (
		<div>
			<Route path="/">
				<Login />
			</Route>
			<Route path="/register">
				<Register />
			</Route>
			<Route path="/todolist">
				<TodoList />:
			</Route>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return { user: state.user };
};

export default connect(mapStateToProps, { selectLists })(App);
