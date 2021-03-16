import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { connect } from "react-redux";

const TodoList = ({ user, lists }) => {
	useEffect(() => {
		console.log(lists);
		if (!user) {
			window.history.pushState({}, "", "/");
			const navEvent = new PopStateEvent("popstate");
			window.dispatchEvent(navEvent);
			return;
		}
	}, [user]);

	return <div>{user ? user.uid : null}</div>;
};

const mapStateToProps = (state) => {
	console.log(state);
	return { user: state.user, lists: state.lists };
};

export default connect(mapStateToProps)(TodoList);
