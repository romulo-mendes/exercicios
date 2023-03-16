import styled from "styled-components";
import CarCard from "../components/CarCard";
import { carros } from "../data";

const Task4 = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: minmax(200px, auto);
	grid-gap: 50px;
	justify-items: center;
	overflow-y: auto;

	@media (min-width: 426px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1440px) {
		grid-template-columns: repeat(6, 1fr);
	}
`;

const CarCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Exercicio4 = () => {
	return (
		<Task4>
			{carros.map((carro, index) => {
				return (
					<CarCardsContainer key={index}>
						<CarCard car={carro} />
					</CarCardsContainer>
				);
			})}
		</Task4>
	);
};

export default Exercicio4;
