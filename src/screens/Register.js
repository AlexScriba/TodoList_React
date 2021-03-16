import React, { useState } from "react";
import { connect } from "react-redux";

import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import { createUserWithEmailAndPassword } from "../tools/auth";
import { selectUser } from "../actions";

const Register = ({ selectUser }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const attemptRegister = () => {
		if (!validate()) return;

		const attemptCreate = async () => {
			const response = await createUserWithEmailAndPassword(username, password);

			if (response.errorCode) {
				setErrorMessage("Invalid Email or Password");
			} else {
				selectUser({ uid: response.userId });
			}
		};

		attemptCreate();
	};

	const validate = () => {
		if (!username.includes("@") && !username.includes(".")) {
			setErrorMessage("Please enter a valid Email");
			return false;
		}

		if (password.length < 7) {
			setErrorMessage("Password must be at least 7 digits long!");
			return false;
		}

		if (password !== verifyPassword) {
			setErrorMessage("Passwords must be equal");
			return false;
		}

		return true;
	};

	const goToLogin = () => {
		window.history.pushState({}, "", "/");
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};

	return (
		<div className="container">
			<Card title="Welcome to TodoList" meta="Please Register" width="300px">
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
						<Input
							id="verify_password"
							label="Retype Password"
							value={verifyPassword}
							onChange={setVerifyPassword}
							placeholder="Password"
							type="password"
						/>
						<div className="center">
							<div className="errorMessage">{errorMessage}</div>
						</div>
						<Button text="Register" onClick={attemptRegister} />
						<div className="center">
							<div className="register">Already a User?</div>
						</div>
						<Button
							text="Login"
							onClick={goToLogin}
							color="white"
							textColor="teal"
						/>
					</form>
				</div>
			</Card>
		</div>
	);
};

export default connect(null, { selectUser })(Register);
