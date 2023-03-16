import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
type MainButtonProps = {
	text: string;
	link: string;
};
const MainButtonStyles = styled.div`
	padding: 10px 15px;
	cursor: pointer;
	border-radius: 5px;
	border: 1px solid #202123;
	:hover {
		background-color: #6e6e80;
	}
`;

const MainButton = ({ text, link }: MainButtonProps) => {
	return (
		<Link to={"/" + link}>
			<MainButtonStyles>
				<h3>{text}</h3>
			</MainButtonStyles>
		</Link>
	);
};

export default MainButton;
