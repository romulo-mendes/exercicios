import styled from "styled-components";
import CarCard from "../components/CarCard";
import { carros } from "../data";

const Task2 = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-auto-rows: minmax(200px, auto);
	grid-gap: 50px;
	justify-items: center;
`;

const CarCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Exercicio3 = () => {
	return (
		<Task2>
			{carros.map((carro, index) => {
				return (
					<CarCardsContainer key={index}>
						<CarCard car={carro} />
					</CarCardsContainer>
				);
			})}
		</Task2>
	);
};

export default Exercicio3;
