import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore();
const usersCollection = db.collection("users");

const getUser = async (uid) => {
	console.log(uid);
	const doc = await usersCollection.doc(uid).get();
	console.log(doc.data());
};

const getUserLists = async (uid) => {
	const docs = await usersCollection.doc(uid).collection("lists").get();
	const list = [];
	docs.forEach((doc) => {
		list.push(doc.data());
	});
	return list;
};

export { getUser, getUserLists };
