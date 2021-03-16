import React, { useState } from "react";
import { connect } from "react-redux";

import "./Login.css";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

import { signInWithEmailAndPassword } from "../tools/auth";
import { selectUser } from "../actions";

const Login = ({ selectUser }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const attemptLogin = () => {
		const doLogin = async () => {
			if (username.length === 0 && password.length === 0) {
				setErrorMessage("Please fill in all fields");
				return;
			}

			const response = await signInWithEmailAndPassword(username, password);
			if (response.errorCode && response.errorCode === "error") {
				setErrorMessage("Username or Password Incorrect");
			} else {
				setErrorMessage("");
				console.log(response.userId);
				selectUser({ uid: response.userId });
			}
		};

		doLogin();
	};
	const registerNewUser = () => {
		window.history.pushState({}, "", "/register");
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};

	const testLogin = () => {
		setPassword("test1234");
		setUsername("test@gmail.com");
	};

	return (
		<div className="container">
			<Card title="Welcome To TodoList" meta="Please Log in:" width="300px">
				<div className="content">
					<form onSubmit={(e) => e.preventDefault()}>
						<Input
							id="username"
							label="Email"
							value={username}
							onChange={setUsername}
							placeholder="Email"
						/>
						<Input
							id="password"
							label="Password"
							value={password}
							onChange={setPassword}
							placeholder="Password"
							type="password"
						/>
						<div className="center">
							<div className="errorMessage">{errorMessage}</div>
						</div>
						<Button text="Login" onClick={attemptLogin} />
						<div className="center">
							<div className="register">Not a User Yet?</div>
						</div>
						<Button
							text="Register"
							onClick={registerNewUser}
							color="white"
							textColor="teal"
						/>
						<Button text="Debug Login" onClick={testLogin} />
					</form>
				</div>
			</Card>
		</div>
	);
};

export default connect(null, { selectUser })(Login);
