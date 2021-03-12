import React from "react";
import "./Card.css";

const Card = ({ title, meta, children, width }) => {
	return (
		<div className="card">
			<div className="head">
				<div className="title">{title}</div>
				{meta ? <div className="meta">{meta}</div> : null}
			</div>
			<div className="content">{children}</div>
		</div>
	);
};

export default Card;
