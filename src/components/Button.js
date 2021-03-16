import React from "react";
import "./Button.css";

const Button = ({ text, onClick, color, textColor }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<button
				className="button"
				onClick={onClick}
				style={{
					backgroundColor: color,
					color: textColor,
				}}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
