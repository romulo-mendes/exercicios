import styled from "styled-components";

export const CardsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: 50px;
	justify-content: center;
	padding-top: 75px;
	position: relative;
	.total-cars {
		left: 30px;
		top: -35px;
	}
	.total {
		left: 30px;
		top: -5px;
	}
	.total-value {
		right: 30px;
		top: -35px;
	}
	.median-years {
		right: 30px;
		top: -5px;
	}
	.standard-deviation {
		left: 30px;
		top: 25px;
	}
	.car-card-div {
		transition: 0.2s ease-in-out;
		:hover {
			transform: scale(1.05);
		}
	}
	.selected {
		position: relative;
		&::before {
			content: "";
			position: absolute;
			top: -10px;
			left: -10px;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background-color: #4caf50;
			z-index: 2;
			display: inline-block;
			font-size: 12px;
			font-weight: bolder;
			color: white;
			text-align: center;
			content: "\u2713";
		}
	}
`;
export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 100%;
	position: relative;
	.main-search {
		width: 100%;
		.show-more {
			display: flex;
			gap: 5px;
			margin: 5px;
			cursor: pointer;
			color: #3b8ced;
			p {
				color: #3b8ced;
			}
		}
	}
	.second-search {
		width: 100%;
	}
	.order-div {
		margin-top: 20px;
		display: flex;
		width: 100%;
		justify-content: space-between;
		.order-asc-desc {
			position: relative;
			padding: 5px 10px;
			border-radius: 5px;
			border: 2px solid #242424;
			display: flex;
			gap: 10px;
			width: 60%;
			justify-content: space-between;
			.label-order-div {
				position: absolute;
				top: -10px;
				left: 10px;
				background-color: #353740;
				padding: 0 10px;
				p {
					font-weight: 700;
				}
			}
			.MuiFormControl-root {
				max-width: 40%;
				@media screen and (max-width: 509px) {
					max-width: 100%;
				}
			}
			@media screen and (max-width: 767px) {
				width: 100%;
			}
			@media screen and (max-width: 525px) {
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			.checkbox-div {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
			}
		}
	}
	.form-div {
		border: 1px solid #272727;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;

		form {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.MuiInputBase-input,
		.MuiFormControlLabel-label {
			color: #fff;
		}
	}
	.row-year-brand {
		display: flex;
		gap: 20px;
		margin-top: 20px;
		width: 100%;
	}

	.row-price-km {
		display: flex;
		gap: 20px;
		margin-top: 20px;
		width: 100%;
	}
	.buttons-form {
		margin-top: 20px;
		display: flex;
		gap: 20px;
		@media (max-width: 380px) {
			flex-direction: column;
		}
	}
	.calcs-div {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
	.show-more-less-about-selected-cars {
		cursor: pointer;
		display: flex;

		margin-top: 15px;
		color: #3b8ced;
		p {
			color: #3b8ced;
		}
	}
	.selected-cars {
		display: flex;
		gap: 5px;
		span {
			color: #fff;
		}
	}
	@media (max-width: 767px) {
		.row-year-brand,
		.row-price-km,
		.order-div {
			flex-direction: column;
		}
		.order-asc-desc {
			width: 100%;
		}
	}
	.banner-div {
		position: fixed;
		right: 0;
		cursor: pointer;
	}
	.banner-border-div {
		position: fixed;
		right: 0;
		cursor: pointer;
		border: 4px solid red;
		border-right: 0;
		background-color: #f5f5f5;
		border-radius: 8px 0 0 8px;
		width: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		p {
			color: #cc0000;
			transform: rotate(90deg);
			font-weight: bold;
			font-size: 16px;
		}
	}
`;
