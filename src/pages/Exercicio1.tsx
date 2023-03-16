import React from "react";
import styled from "styled-components";
import { carros } from "../data";

const CarCardDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 10px;
	background-color: #6e6e80;
	padding: 20px;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	img {
		width: 256px;
		height: 192px;
		border-radius: 5px;
	}
	h1 {
		text-align: center;
	}
	h2 {
		margin-top: 10px;
	}
	:hover {
		transform: scale(1.05);
	}
`;

const Exercicio1 = () => {
	const car = carros[0];
	return (
		<CarCardDiv>
			<img src={car.imagem} alt={car.modelo} />
			<div>
				<h1>{car.modelo}</h1>
				<h1>
					<strong>
						{car.preco.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
					</strong>
				</h1>
				<h2>{car.marca}</h2>
			</div>
			<div>
				<ul>
					<li>Ano: {car.ano}</li>
					<li>Quilometragem: {car.km} km</li>
					<li>Combustível: {car.combustivel}</li>
				</ul>
			</div>
		</CarCardDiv>
	);
};

export default Exercicio1;
