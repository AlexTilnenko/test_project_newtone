import React, { FC } from "react";
import { Container } from "@material-ui/core";
import { CardItem } from "../components";
import { Product } from "../products";
import { ProductInCart } from "../App";

interface HomeProps {
	productsList: Array<Product>;
	onAddProductToCart: (product: Product) => void;
	addedProducts: ProductInCart;
}

export const Home: FC<HomeProps> = ({ productsList, onAddProductToCart, addedProducts }) => {
	return (
		<div className='home'>
			<Container maxWidth='md'>
				<div className='home__inner'>
					{productsList.map((product) => {
						return (
							<CardItem
								key={product.id}
								productItem={product}
								onAddProductToCart={onAddProductToCart}
								addedProducts={addedProducts}
							/>
						);
					})}
				</div>
			</Container>
		</div>
	);
};
