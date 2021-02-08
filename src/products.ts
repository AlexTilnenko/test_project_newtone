export type Product = {
	id: number;
	name: string;
	price: number;
	img: string;
	discountSize: number;
	discountPerWeight: number;
};

export const products: Array<Product> = [
	{
		id: 1,
		name: "Banana",
		price: 10,
		img: "https://www.gastronom.ru/binfiles/images/20151029/bddcbbce.jpg",
		discountSize: 0,
		discountPerWeight: 0
	},
	{
		id: 2,
		name: "Apple",
		price: 8,
		img: "https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_1000.jpg",
		discountSize: 0,
		discountPerWeight: 0
	},
	{
		id: 3,
		name: "Papaya",
		price: 10,
		img: "https://www.fructo.com.ua/image/cache/catalog/fruct/papaya-1400x1400.png",
		discountSize: 5,
		discountPerWeight: 3
	}
];
