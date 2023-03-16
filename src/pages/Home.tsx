import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const HomeStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 20px;
	gap: 30px;
	align-items: center;
	position: relative;
	.tasks-div {
		display: flex;
		width: 100%;
		padding: 20px;
		justify-content: center;
	}
`;

const Home = () => {
	return (
		<HomeStyles>
			<div className="title-div">
				<h1>Exercícios</h1>
			</div>
			<div className="back-tasks">
				<Link to="/tasks">
					<p>Voltar</p>
				</Link>
			</div>
			<div className="tasks-div">
				<Outlet />
			</div>
		</HomeStyles>
	);
};

export default Home;
