import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import { Product, products } from "./products";

import "./App.scss";

export type ProductInCart = {
	[key: string]: {
		items: Array<Product>;
		price: number;
		count: number;
	};
};

export interface ICart {
	productsList: ProductInCart;
	totalPrice: number;
	totalCount: number;
}

function App() {
	const cartInitialState = {
		productsList: {},
		totalPrice: 0,
		totalCount: 0
	};

	const [cart, setCart] = useState<ICart>(cartInitialState);

	const addProductToCartHandler = (product: Product) => {
		setCart((state) => {
			const getTotalPrice = (arr: Array<Product>): number => {
				return arr.reduce((sum, item) => sum + item.price, 0);
			};

			const currentProductItems: Array<Product> = state.productsList[product.id]
				? [...state.productsList[product.id].items, product]
				: [product];

			const currentProductCount: number = currentProductItems.length;

			const newProductList: ProductInCart = {
				...state.productsList,
				[product.id]: {
					items: currentProductItems,
					count: currentProductCount,
					price:
						// если на товар не действует скидка тогда прост осчитаем сумму данного товара иначе если количество тавара кратно количеству
						// на который распространяется скидка тогда из общей суммы товара вычитаем скидку, если количество товара не кратное нужному
						// количеству для скидки тогда проверям существует ли такой товар в корзине если да - добавляем его цену к предыдущей цене иначе
						// ставим цену товара
						product.discountSize === 0
							? getTotalPrice(currentProductItems)
							: currentProductCount % product.discountPerWeight === 0
							? getTotalPrice(currentProductItems) -
							  (currentProductCount / product.discountPerWeight) * product.discountSize
							: state.productsList[product.id]
							? state.productsList[product.id].price + product.price
							: product.price
				}
			};
			console.log(state);
			return {
				...state,
				productsList: newProductList,
				totalPrice: Object.values(newProductList).reduce((sum, item) => sum + item.price, 0),
				totalCount: Object.values(newProductList).length
			};
		});
	};

	const clearCartHandler = () => {
		if (window.confirm("Are you sure?")) {
			setCart(cartInitialState);
		}
	};

	return (
		<div className='App'>
			<Header totalCount={cart.totalCount} totalPrice={cart.totalPrice} />
			<Switch>
				<Route path='/' exact>
					<Home
						productsList={products}
						onAddProductToCart={addProductToCartHandler}
						addedProducts={cart.productsList}
					/>
				</Route>
				<Route path='/cart'>
					<Cart addedProducts={cart} onCartClear={clearCartHandler} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
