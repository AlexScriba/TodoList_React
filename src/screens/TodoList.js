import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { getUserLists } from "../tools/db";

const TodoList = ({ uid }) => {
	const [lists, setLists] = useState([]);

	useEffect(() => {
		if (!uid) {
			window.history.pushState({}, "", "/");
			const navEvent = new PopStateEvent("popstate");
			window.dispatchEvent(navEvent);
			return;
		}

		const startSnapshots = async () => {
			const tmpList = await getUserLists(uid);
			setLists(tmpList);
			// const db = firebase.firestore();
			// const lsitCollection = db
			// 	.collection("users")
			// 	.doc(uid)
			// 	.collection("lists");

			// lsitCollection.onSnapshot((docs) => {
			// 	const retLists = [];
			// 	docs.forEach((doc) => {
			// 		retLists.push(doc.data());
			// 	});
			// 	setLists(retLists);
			// 	console.log(lists);
			// });
		};
		startSnapshots();
		// console.log(lists);
	}, [uid]);

	return <div>{uid}</div>;
};

export default TodoList;
