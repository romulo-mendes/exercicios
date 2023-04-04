import CarCard from "../components/CarCard";
import { carros } from "../data";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
	FormControl,
	TextField,
	InputLabel,
	Select,
	Button,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import MenuItem from "@mui/material/MenuItem";
import { CardsContainer, HomeContainer } from "./HomeStyle";
import {
	CarsByBrandType,
	CarType,
	mostCommonYearType,
	orderByEnum,
} from "../models";
import BannerOffers from "../components/Banner";

const Home = () => {
	const [cars, setCars] = useState(carros);
	const [allBrand, setAllBrand] = useState<CarsByBrandType[]>([]);
	const [allYears, setAllYears] = useState<number[]>([]);
	const [allYearsMax, setAllYearsMax] = useState<number[]>([]);
	const [allYearsMin, setAllYearsMin] = useState<number[]>([]);
	const [allFuel, setAllFuel] = useState<string[]>([]);
	const [totalCars, setTotalCars] = useState(0);
	const [mostCommonYear, setMostCommonYear] = useState<mostCommonYearType>(["", 0]);
	const [totalSelectCars, setTotalSelectCars] = useState<CarType[]>([]);
	const [selectedMedian, setSelectedMedian] = useState<number>();
	const [SelectedStandardDeviation, setSelectedStandardDeviation] =
		useState<number>();
	const [showFilters, setShowFilters] = useState(false);
	const [showAboutCars, setShowAboutCars] = useState(false);
	const [showBanner, setShowBanner] = useState(true);
	const bannerRef = useRef<HTMLDivElement>(null);
	const [bannerHeight, setBannerHeight] = useState<number | null>(null);
	const [countdown, setCountdown] = useState<number>(10800);

	const [search, setSearch] = useState("");
	const [maxYear, setMaxYear] = useState("");
	const [minYear, setMinYear] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [brand, setBrand] = useState("");
	const [fuel, setFuel] = useState("");
	const [minKm, setMinKm] = useState("");
	const [maxKm, setMaxKm] = useState("");
	const [isNew, setIsNew] = useState(false);
	const [order, setOrder] = useState(true);
	const [orderBy, setOrderBy] = useState<orderByEnum>(orderByEnum.modelo);
	const [averagePrice, setAveragePrice] = useState(0);

	function normalizeString(str: string) {
		return str
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase();
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		if (bannerRef.current) {
			setBannerHeight(bannerRef.current.clientHeight);
		}
	}, [showBanner]);

	useEffect(() => {
		const uniqueYears = cars.reduce<number[]>((currentYear, car) => {
			if (!currentYear.includes(car.ano)) {
				currentYear.push(car.ano);
			}
			return currentYear;
		}, []);

		const uniqueFuel = cars.reduce<string[]>(
			(currentFuel, car) =>
				currentFuel.includes(car.combustivel)
					? currentFuel
					: [...currentFuel, car.combustivel],
			[]
		);
		const carsByBrand = cars.reduce<{ [brand: string]: number }>((counts, car) => {
			const currentCount = counts[car.marca] || 0;
			return { ...counts, [car.marca]: currentCount + 1 };
		}, {});

		const carsByBrandArray = Object.entries(carsByBrand).map(
			([marca, quantidade]) => ({ marca, quantidade })
		);

		uniqueYears.sort((a, b) => b - a);

		setAllYears(uniqueYears);
		setAllYearsMax(uniqueYears);
		setAllYearsMin(uniqueYears);
		setAllBrand(carsByBrandArray);
		setAllFuel(uniqueFuel.sort());
		setTotalCars(cars.length);
	}, []);

	useEffect(() => {
		if (maxYear) {
			const filteredYears = allYears.filter((year) => year <= Number(maxYear));
			setAllYearsMin(filteredYears);
		}
	}, [maxYear]);
	useEffect(() => {
		if (minYear) {
			const filteredYears = allYears.filter((year) => year >= Number(minYear));
			setAllYearsMax(filteredYears);
		}
	}, [minYear]);
	useEffect(() => {
		if (order) {
			if (orderBy !== orderByEnum.marca && orderBy !== orderByEnum.modelo) {
				setCars(cars.sort((a, b) => a[orderBy] - b[orderBy]));
			} else {
				setCars(cars.sort((a, b) => a[orderBy].localeCompare(b[orderBy])));
			}
		} else {
			if (orderBy !== orderByEnum.marca && orderBy !== orderByEnum.modelo) {
				setCars(cars.sort((a, b) => b[orderBy] - a[orderBy]));
			} else {
				setCars(cars.sort((a, b) => b[orderBy].localeCompare(a[orderBy])));
			}
		}
	}, [order, orderBy]);
	useEffect(() => {
		if (totalSelectCars.length > 0) {
			const years = totalSelectCars.map((carro) => carro.ano);
			years.sort((a, b) => a - b);
			const lengthYear = years.length;
			let median;

			if (lengthYear % 2 === 0) {
				const middleIndex = lengthYear / 2;
				median = (years[middleIndex - 1] + years[middleIndex]) / 2;
			} else {
				const middleIndex = Math.floor(lengthYear / 2);
				median = years[middleIndex];
			}
			setSelectedMedian(median);

			const kms = totalSelectCars.map((carro) => carro.km);
			const lengthKm = kms.length;
			const average = kms.reduce((total, km) => total + km, 0) / lengthKm;
			let SumSquares = 0;

			for (let i = 0; i < lengthKm; i++) {
				const difference = kms[i] - average;
				const square = difference * difference;
				SumSquares += square;
			}

			const standardDeviation = Math.sqrt(SumSquares / lengthKm);
			setSelectedStandardDeviation(standardDeviation);
		} else {
			setSelectedMedian(0);
			setSelectedStandardDeviation(0);
		}
	}, [totalSelectCars]);

	function calcAveragePrice() {
		const total = cars.reduce((acc, car) => acc + car.preco, 0);
		const average = total / cars.length;
		setAveragePrice(average);
	}

	function calcMostCommonYear() {
		const yearCount: { [year: number]: number } = {};
		cars.forEach((car) => {
			if (yearCount[car.ano]) {
				yearCount[car.ano]++;
			} else {
				yearCount[car.ano] = 1;
			}
		});

		const mostCommonYearCurrent = Object.entries(yearCount).reduce(
			([mostCommonYearCurrent, mostCommonCount], [year, count]) => {
				if (count > mostCommonCount) {
					return [year, count];
				} else {
					return [mostCommonYearCurrent, mostCommonCount];
				}
			},
			["", 0]
		);
		setMostCommonYear(mostCommonYearCurrent);
	}

	function handleClickCard(
		carro: CarType,
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) {
		const cardDiv = e.currentTarget as HTMLElement;
		const isSelected = cardDiv?.classList.toggle("selected");
		if (isSelected) {
			setTotalSelectCars([...totalSelectCars, carro]);
		} else {
			const updatedCars = totalSelectCars.filter((c) => c !== carro);
			setTotalSelectCars(updatedCars);
		}
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		const filteredCars = carros.filter((car) => {
			if (
				normalizeString(search) &&
				!normalizeString(car.modelo).includes(normalizeString(search))
			)
				return false;
			if (
				normalizeString(brand) &&
				normalizeString(car.marca) !== normalizeString(brand)
			)
				return false;
			if (
				normalizeString(fuel) &&
				normalizeString(car.combustivel) !== normalizeString(fuel)
			)
				return false;
			if (minYear && car.ano < Number(minYear)) return false;
			if (maxYear && car.ano > Number(maxYear)) return false;
			if (minPrice && car.preco < Number(minPrice)) return false;
			if (maxPrice && car.preco > Number(maxPrice)) return false;
			if (minKm && car.km < Number(minKm)) return false;
			if (maxKm && car.km > Number(maxKm)) return false;
			if (isNew && car.usado === true) return false;
			setTotalCars(totalCars + 1);
			return true;
		});
		setCars(filteredCars);
	}

	return (
		<HomeContainer>
			<div className="form-div">
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="main-search">
						<TextField
							sx={{ backgroundColor: "#6e6e807f", borderRadius: "5px" }}
							id="search"
							fullWidth
							label="Pesquisar"
							placeholder="Digite o modelo ou marca..."
							onChange={(e) => setSearch(e.target.value)}
							value={search}
							InputLabelProps={{ style: { color: "#fff" } }}
						/>
						<div className="show-more" onClick={() => setShowFilters(!showFilters)}>
							<p>{showFilters ? "Exibir menos filtros" : "Exibir mais filtros"}</p>
							{showFilters ? (
								<KeyboardDoubleArrowUpIcon fontSize="small" />
							) : (
								<KeyboardDoubleArrowDownIcon fontSize="small" />
							)}
						</div>
					</div>
					{showFilters && (
						<div className="second-search">
							<div className="row-year-brand">
								<FormControl fullWidth>
									<InputLabel sx={{ color: "#fff" }} id="year-min-select-label">
										Ano mínimo
									</InputLabel>
									<Select
										sx={{
											backgroundColor: "#6e6e807f",
											borderRadius: "5px",
											color: "#fff",
										}}
										labelId="year-min-select-label"
										id="year-min"
										fullWidth
										onChange={(e) => setMinYear(e.target.value)}
										value={minYear}
									>
										{allYearsMin.map((year, index) => {
											return (
												<MenuItem key={`${index}-${year}`} value={year}>
													{year}
												</MenuItem>
											);
										})}
									</Select>
								</FormControl>
								<FormControl fullWidth>
									<InputLabel sx={{ color: "#fff" }} id="year-max-select-label">
										Ano máximo
									</InputLabel>
									<Select
										sx={{
											backgroundColor: "#6e6e807f",
											borderRadius: "5px",
											color: "#fff",
										}}
										labelId="year-max-select-label"
										id="year-max"
										fullWidth
										onChange={(e) => setMaxYear(e.target.value)}
										value={maxYear}
									>
										{allYearsMax.map((year, index) => {
											return (
												<MenuItem key={`${index}-${year}`} value={year}>
													{year}
												</MenuItem>
											);
										})}
									</Select>
								</FormControl>
								<FormControl fullWidth>
									<InputLabel sx={{ color: "#fff" }} id="brand-select-label">
										Marca
									</InputLabel>
									<Select
										sx={{
											backgroundColor: "#6e6e807f",
											borderRadius: "5px",
											color: "#fff",
										}}
										labelId="brand-select-label"
										id="select-brand"
										value={brand}
										label="Age"
										onChange={(e) => setBrand(e.target.value)}
									>
										{allBrand.map((brand, index) => {
											return (
												<MenuItem
													key={`${index}-${brand.marca}`}
													value={brand.marca}
												>
													{`${brand.marca} (${brand.quantidade})`}
												</MenuItem>
											);
										})}
									</Select>
								</FormControl>
								<FormControl fullWidth>
									<InputLabel sx={{ color: "#fff" }} id="fuel-select-label">
										Combustível
									</InputLabel>
									<Select
										sx={{
											backgroundColor: "#6e6e807f",
											borderRadius: "5px",
											color: "#fff",
										}}
										labelId="fuel-select-label"
										id="select-fuel"
										value={fuel}
										label="Age"
										onChange={(e) => setFuel(e.target.value)}
									>
										{allFuel.map((fuel, index) => {
											return (
												<MenuItem key={`${index}-${fuel}`} value={fuel}>
													{fuel}
												</MenuItem>
											);
										})}
									</Select>
								</FormControl>
							</div>
							<div className="row-price-km">
								<TextField
									sx={{ backgroundColor: "#6e6e807f", borderRadius: "5px" }}
									id="min-price"
									fullWidth
									label="Preço mínimo"
									onChange={(e) => setMinPrice(e.target.value)}
									value={minPrice}
									InputLabelProps={{ style: { color: "#fff" } }}
								/>
								<TextField
									sx={{ backgroundColor: "#6e6e807f", borderRadius: "5px" }}
									id="max-price"
									fullWidth
									label="Preço máximo"
									onChange={(e) => setMaxPrice(e.target.value)}
									value={maxPrice}
									InputLabelProps={{ style: { color: "#fff" } }}
								/>
								<TextField
									sx={{ backgroundColor: "#6e6e807f", borderRadius: "5px" }}
									id="min-km"
									fullWidth
									label="Km mínimo"
									onChange={(e) => setMinKm(e.target.value)}
									value={minKm}
									InputLabelProps={{ style: { color: "#fff" } }}
								/>
								<TextField
									sx={{ backgroundColor: "#6e6e807f", borderRadius: "5px" }}
									id="max-km"
									fullWidth
									label="Km máximo"
									onChange={(e) => setMaxKm(e.target.value)}
									value={maxKm}
									InputLabelProps={{ style: { color: "#fff" } }}
								/>
							</div>
							<div className="order-div">
								<FormControlLabel
									control={
										<Checkbox
											checked={isNew}
											onChange={(e) => setIsNew(e.target.checked)}
										/>
									}
									label="Apenas novos"
								/>
								<div className="order-asc-desc">
									<div className="label-order-div">
										<p>Ordem:</p>
									</div>
									<div className="checkbox-div">
										<FormControlLabel
											control={
												<Checkbox checked={order} onChange={() => setOrder(true)} />
											}
											label="Ascendente"
										/>
										<FormControlLabel
											control={
												<Checkbox
													checked={!order}
													onChange={() => setOrder(false)}
												/>
											}
											label="Decrescente"
										/>
									</div>
									<FormControl fullWidth>
										<InputLabel sx={{ color: "#fff" }} id="order-by-select-label">
											Ordenar por:
										</InputLabel>
										<Select
											sx={{
												backgroundColor: "#6e6e807f",
												borderRadius: "5px",
												color: "#fff",
											}}
											labelId="order-by-select-label"
											id="select-order-by"
											value={orderBy}
											onChange={(e) => setOrderBy(e.target.value as orderByEnum)}
										>
											<MenuItem value={orderByEnum.marca}>Marca</MenuItem>
											<MenuItem value={orderByEnum.modelo}>Modelo</MenuItem>
											<MenuItem value={orderByEnum.preco}>Preço</MenuItem>
											<MenuItem value={orderByEnum.ano}>Ano</MenuItem>
											<MenuItem value={orderByEnum.km}>Quilometragem</MenuItem>
										</Select>
									</FormControl>
								</div>
							</div>
						</div>
					)}
					<div className="buttons-form">
						<Button type="reset" variant="outlined" size="large">
							Limpar
						</Button>
						<Button type="submit" variant="outlined" size="large">
							Pesquisar
						</Button>
					</div>
				</form>
			</div>
			<div className="calcs-div">
				<div className="average-price">
					<h3>
						Média de preço dos carros:{" "}
						{averagePrice > 0 &&
							averagePrice.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
					</h3>
					<Button variant="outlined" onClick={() => calcAveragePrice()}>
						Calcular
					</Button>
				</div>
				<div className="most-cars-years">
					<h3>
						Ano com maior quantidade de carros:{" "}
						{mostCommonYear[0] && mostCommonYear[1]
							? `${mostCommonYear[0]} com ${mostCommonYear[1]} carros`
							: ""}
					</h3>
					<Button variant="outlined" onClick={() => calcMostCommonYear()}>
						Calcular
					</Button>
				</div>
				{showAboutCars ? (
					<div className="about-selected-cars">
						<div className="total-cars selected-cars">
							<p>Total de carros encontrados: </p>
							<span>{totalCars}</span>
						</div>
						<div className="total selected-cars">
							<p>Total de carros selecionados: </p>
							<span>{totalSelectCars.length}</span>
						</div>
						<div className="total-value selected-cars">
							<p>Valor total dos carros selecionados: </p>
							<span>
								{totalSelectCars
									.reduce(
										(accumulator, currentCar) => accumulator + currentCar.preco,
										0
									)
									.toLocaleString("pt-BR", {
										style: "currency",
										currency: "BRL",
									})}
							</span>
						</div>
						<div className="median-years selected-cars">
							<p>Mediana dos carros selecionados: </p>
							<span>{selectedMedian && selectedMedian}</span>
						</div>
						<div className="standard-deviation selected-cars">
							<p>Desvio padrão de quilometragem dos carros selecionados: </p>
							<span>
								{SelectedStandardDeviation && SelectedStandardDeviation.toFixed(2)}
							</span>
						</div>
						<div
							onClick={() => {
								setShowAboutCars(!showAboutCars);
							}}
							className="show-more-less-about-selected-cars"
						>
							<p>Esconder informações dos carros selecionados</p>
							<KeyboardDoubleArrowUpIcon fontSize="small" />
						</div>
					</div>
				) : (
					<div
						onClick={() => {
							setShowAboutCars(!showAboutCars);
						}}
						className="show-more-less-about-selected-cars"
					>
						<p>Mostrar informações dos carros selecionados</p>
						<KeyboardDoubleArrowDownIcon fontSize="small" />
					</div>
				)}
			</div>
			<CardsContainer>
				{cars.map((carro, index) => {
					return (
						<div
							className="car-card-div"
							key={`${index}${carro}`}
							onClick={(e) => handleClickCard(carro, e)}
						>
							<CarCard car={carro} />
						</div>
					);
				})}
			</CardsContainer>
			{showBanner ? (
				<div
					className="banner-div"
					onClick={() => setShowBanner(!showBanner)}
					ref={bannerRef}
				>
					<BannerOffers countdown={countdown} carros={carros} />
				</div>
			) : (
				bannerHeight && (
					<div
						className="banner-border-div"
						onClick={() => setShowBanner(!showBanner)}
						style={{ height: bannerHeight }}
					>
						<p>OFERTA!!</p>
					</div>
				)
			)}
		</HomeContainer>
	);
};

export default Home;
