import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";

interface CartProps {
	addedProducts: any;
}

export const Cart: React.FC<CartProps> = (addedProducts) => {
	return (
		<Container maxWidth='md'>
			{!addedProducts && (
				<div className='cart-empty'>
					<h1>Cart is empty..</h1>
					<Link to='/'>
						<Button variant='contained' color='primary'>
							Return to products list
						</Button>
					</Link>
				</div>
			)}
		</Container>
	);
};
