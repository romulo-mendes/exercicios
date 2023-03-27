import { Outlet } from "react-router-dom";
import styled from "styled-components";

const HeaderStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 20px;
	gap: 30px;
	align-items: center;
	position: relative;
	.back-tasks {
		border: 1px solid #26272e;
		padding: 15px 20px;
		border-radius: 5px;
		font-size: 18px;
		transition: 0.4s;
		:hover {
			background-color: #26272e;
			border: 1px solid #6e6e80;
		}
	}
	.tasks-div {
		display: flex;
		width: 100%;
		padding: 20px;
		justify-content: center;
	}
`;

const Header = () => {
	return (
		<HeaderStyles>
			<div className="title-div">
				<h1>Venda de novos e usados</h1>
			</div>
			<div className="tasks-div">
				<Outlet />
			</div>
		</HeaderStyles>
	);
};

export default Header;
