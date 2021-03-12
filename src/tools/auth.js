import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDvtFu1mtmTmx1nJzflrd9FCDg0CGGoGg8",
	authDomain: "todo-d5a51.firebaseapp.com",
	projectId: "todo-d5a51",
	storageBucket: "todo-d5a51.appspot.com",
	messagingSenderId: "512861504027",
	appId: "1:512861504027:web:ba4c9481f08ddc91c3aebe",
	measurementId: "G-V04J3TPVP9",
};

firebase.initializeApp(firebaseConfig);

const signInWithEmailAndPassword = async (email, password) => {
	const response = {
		errorCode: "",
		userId: "",
	};

	try {
		const userCredentials = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		response.userId = userCredentials.user.uid;
	} catch (e) {
		response.errorCode = "error";
		// = e.code;
	}

	return response;
};

const createUserWithEmailAndPassword = async (email, password) => {
	const response = {
		errorCode: "",
		userId: "",
	};

	try {
		const userCredentials = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		response.userId = userCredentials.user.uid;
	} catch (e) {
		response.errorCode = "error";
	}

	return response;
};

export { signInWithEmailAndPassword, createUserWithEmailAndPassword };
