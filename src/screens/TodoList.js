import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./TodoList.css";
import Card from "../components/Card";

const TodoList = ({ user, lists }) => {
	useEffect(() => {
		if (!user) {
			window.history.pushState({}, "", "/");
			const navEvent = new PopStateEvent("popstate");
			window.dispatchEvent(navEvent);
			return;
		}
	}, [user]);

	const renderedList = lists.map((item) => {
		//TODO: add key to list items
		return <div className="item">{item.title}</div>;
	});

	if (!user) return null;

	return (
		<div className="todolist">
			<Card title="Lists for UserName" meta="Please select a Card">
				<div className="list">{renderedList}</div>
				<div className="footer">
					<button className="floating-action-button">+</button>
				</div>
			</Card>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return { user: state.user, lists: state.lists };
};

export default connect(mapStateToProps)(TodoList);
