import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Exercicio1 from "./pages/Exercicio1";
import Exercicio2 from "./pages/Exercicio2";
import Exercicio3 from "./pages/Exercicio3";
import Exercicio4 from "./pages/Exercicio4";
import Exercicio7 from "./pages/Exercicio7";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="tasks" element={<Tasks />} />
					<Route path="exercicio1" element={<Exercicio1 />} />
					<Route path="exercicio2" element={<Exercicio2 />} />
					<Route path="exercicio3" element={<Exercicio3 />} />
					<Route path="exercicio4" element={<Exercicio4 />} />
					<Route path="exercicio7" element={<Exercicio7 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
