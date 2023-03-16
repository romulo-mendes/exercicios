import React from "react";
import styled from "styled-components";
import MainButton from "../components/MainButton";

const MainButtonsDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	width: 100%;
	justify-content: center;
`;

const Tasks = () => {
	return (
		<MainButtonsDiv>
			<MainButton link="exercicio1" text="Exercício 1" />
			<MainButton link="exercicio2" text="Exercício 2" />
			<MainButton link="exercicio3" text="Exercício 3" />
			<MainButton link="exercicio4" text="Exercício 4" />
			<MainButton link="exercicio7" text="Exercício 7" />
		</MainButtonsDiv>
	);
};

export default Tasks;
