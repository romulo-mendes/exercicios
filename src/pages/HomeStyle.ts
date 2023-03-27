import styled from "styled-components";

export const CardsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: 50px;
	justify-content: center;
	padding-top: 75px;
	position: relative;
	.selected-cars {
		position: absolute;
		display: flex;
		align-items: center;
		gap: 5px;
		color: #fff;
		span {
			font-size: 20px;
		}
	}
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
	.standard-deviation{
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
			}
		}
	}
	.form-div {
		border: 1px solid #272727;
		padding: 20px;
		min-width: 350px;
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
	}
	.calcs-div {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
`;