import React, { useState, useEffect } from "react";
import { CarType } from "../models";

function BannerOffers({ carros }: { carros: CarType[] }) {
	const [countdown, setCountdown] = useState<number>(10800);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const carWithLowestPrice = carros.reduce((lowestPriceCar, currentCar) => {
		if (currentCar.preco < lowestPriceCar.preco) {
			return currentCar;
		}
		return lowestPriceCar;
	}, carros[0]);

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
		<div className="banner-offers">
			<div className="car-lowest-price">
				<p>{`${carWithLowestPrice.modelo} - ${carWithLowestPrice.marca}`}</p>
				<p>
					<span className="original-price">{originalPriceFormatted}</span>
					<span className="discounted-price">{discountedPriceFormatted}</span>
				</p>
			</div>
			<div className="countdown-timer">
				<p>Offer for a limited time only</p>
				<p>{`Corra! Ofertas validas por ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s apenas`}</p>
			</div>
		</div>
	);
}
