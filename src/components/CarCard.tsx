import React from "react";
import styled from "styled-components";

interface Car {
	marca: string;
	modelo: string;
	ano: number;
	preco: number;
	km: number;
	combustivel: string;
	usado: boolean;
	imagem: string;
}

interface CarCardProps {
	car: Car;
}

const CarCardDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 10px;
	background-color: #6e6e80;
	padding: 20px;
	cursor: pointer;
	
	img {
		width: 200px;
		height: 150px;
		border-radius: 5px;
	}
	h1 {
		text-align: center;
	}
	h2 {
		margin-top: 10px;
	}
`;

const CarCard: React.FC<CarCardProps> = ({ car }) => {
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
					<li>Quilometragem: {car.km.toLocaleString("pt-BR")} KM</li>
					<li>Combustível: {car.combustivel}</li>
				</ul>
			</div>
		</CarCardDiv>
	);
};

export default CarCard;
