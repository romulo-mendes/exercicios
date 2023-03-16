import React from "react";
import styled from "styled-components";
import CarCard from "../components/CarCard";
import { carros } from "../data";

const Task2 = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: 50px;
	justify-content: center;
`;

const Exercicio2 = () => {
	return (
		<Task2>
			{carros.map((carro, index) => {
				return <CarCard key={index} car={carro} />;
			})}
		</Task2>
	);
};

export default Exercicio2;
