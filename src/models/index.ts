export type CarsByBrandType = {
	marca: string;
	quantidade: number;
};

export enum orderByEnum {
	marca = "marca",
	modelo = "modelo",
	preco = "preco",
	ano = "ano",
	km = "km",
}

export type CarType = {
	marca: string;
	modelo: string;
	ano: number;
	preco: number;
	km: number;
	combustivel: string;
	usado: boolean;
	imagem: string;
};

export type mostCommonYearType = [string, number];