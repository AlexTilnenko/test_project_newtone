import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import { Product, products } from "./products";

import "./App.scss";

export type ProductInCart = {
	[key: string]: {
		item: Product;
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
			const getTotalPrice = (itemsList: ProductInCart): number => {
				return Object.values(itemsList).reduce((sum: number, item) => sum + item.price, 0);
			};

			let newCount = state.productsList[product.id]
				? state.productsList[product.id].count + 1
				: 1;

			let newPrice = state.productsList[product.id]
				? state.productsList[product.id].price + product.price
				: product.price;

			const addDiscount = (price: number): number => {
				let priceWithDiscount: number = price;
				if (product.discountPerWeight && newCount % product.discountPerWeight === 0) {
					priceWithDiscount = price - product.discountSize;
				}
				return priceWithDiscount;
			};

			const newProductList: ProductInCart = {
				...state.productsList,
				[product.id]: {
					item: product,
					count: newCount,
					price: addDiscount(newPrice)
				}
			};

			return {
				...state,
				productsList: newProductList,
				totalPrice: getTotalPrice(newProductList),
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
