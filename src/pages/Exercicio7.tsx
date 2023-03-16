import styled from "styled-components";
import CarCard from "../components/CarCard";
import { carros } from "../data";

const Task7 = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: 50px;
	justify-content: center;
`;

const Exercicio7 = () => {
	return (
		<>
			<div></div>
			<Task7>
				{carros.map((carro, index) => {
					return <CarCard key={index} car={carro} />;
				})}
			</Task7>
		</>
	);
};

export default Exercicio7;
