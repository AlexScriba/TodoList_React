import React, { useEffect, useState } from "react";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Route from "./components/Route";
import "./App.css";
import { getUser, getUserLists } from "./tools/db";
import TodoList from "./screens/TodoList";

const App = () => {
	const [uid, setUid] = useState("");

	useEffect(() => {
		if (uid) {
			window.history.pushState({}, "", "/todolist");
			const navEvent = new PopStateEvent("popstate");
			window.dispatchEvent(navEvent);
		}
	}, [uid]);

	return (
		<div>
			<Route path="/">
				<Login onLogin={setUid} />
			</Route>
			<Route path="/register">
				<Register onLogin={setUid} />
			</Route>
			<Route path="/todolist">
				<TodoList uid={uid} />:
			</Route>
		</div>
	);
};

export default App;
