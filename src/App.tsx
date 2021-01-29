import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import { products } from "./products";

import "./App.scss";

function App() {
	const cart = {};
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path='/' exact>
					<Home productsList={products} />
				</Route>
				<Route path='/cart'>
					<Cart addedProducts={cart} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
