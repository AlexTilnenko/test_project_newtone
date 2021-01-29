import React, { FC } from "react";
import { Container } from "@material-ui/core";
import { CardItem } from "../components";
import { Product } from "../products";

interface HomeProps {
	productsList: Array<Product>;
}

export const Home: FC<HomeProps> = ({ productsList }) => {
	return (
		<div className='home'>
			<Container maxWidth='md'>
				<div className='home__inner'>
					{productsList.map((product) => {
						return <CardItem productItem={product} key={product.id} />;
					})}
				</div>
			</Container>
		</div>
	);
};
