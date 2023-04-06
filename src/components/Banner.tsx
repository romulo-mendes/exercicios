import styled from "styled-components";
import { CarType } from "../models";

const BannerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #f5f5f5;
	padding: 10px;
	border-radius: 8px 0 0 8px;
	border: 4px solid red;
	border-right: 0;
`;

const CarLowestPriceContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	p {
		margin: 0;
		font-size: 18px;
		font-weight: bold;
		line-height: 1.2;
		color: #444444;
	}

	.original-price {
		margin-right: 10px;
		text-decoration: line-through;
		color: #888888;
	}

	.discounted-price {
		color: #cc0000;
		font-size: 22px;
		font-weight: bold;
	}
`;

const CountdownTimerContainer = styled.div`
	display: flex;
	align-items: center;

	p {
		margin: 0;
		font-size: 18px;
		font-weight: bold;
		line-height: 1.2;
		color: #cc0000;
		margin-left: 20px;
	}
`;

const BannerOffers = ({
	carros,
	countdown,
}: {
	carros: CarType[];
	countdown: number;
}) => {
	

	const carWithLowestPrice = carros.reduce((lowestPriceCar, currentCar) => {
		if (currentCar.preco < lowestPriceCar.preco) {
			return currentCar;
		}
		return lowestPriceCar;
	});

	const discountedPrice = carWithLowestPrice.preco * 0.75;
	const originalPriceFormatted = carWithLowestPrice.preco.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	const discountedPriceFormatted = discountedPrice.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	const hoursLeft = Math.floor(countdown / 3600);
	const minutesLeft = Math.floor((countdown % 3600) / 60);
	const secondsLeft = countdown % 60;

	return (
		<BannerContainer>
			<CarLowestPriceContainer>
				<p>{`${carWithLowestPrice.modelo} - ${carWithLowestPrice.marca}`}</p>
				<p>
					<span className="original-price">{originalPriceFormatted}</span>
					<span className="discounted-price">{discountedPriceFormatted}</span>
				</p>
			</CarLowestPriceContainer>
			<CountdownTimerContainer>
				<p>{`Corra! Ofertas válidas por ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`}</p>
			</CountdownTimerContainer>
		</BannerContainer>
	);
};

export default BannerOffers;
