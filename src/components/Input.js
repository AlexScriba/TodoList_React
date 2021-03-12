import React from "react";
import "./Input.css";

const Input = ({
	value,
	onChange,
	type = "text",
	label,
	id,
	placeholder = "",
}) => {
	return (
		<div className="input">
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				type={type}
				placeholder={placeholder}
			></input>
		</div>
	);
};

export default Input;
