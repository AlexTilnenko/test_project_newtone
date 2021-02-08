import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import { ICart } from "../App";
import { Avatar } from "@material-ui/core";
interface CartProps {
	addedProducts: ICart;
	onCartClear: () => void;
}

export const Cart: React.FC<CartProps> = ({ addedProducts, onCartClear }) => {
	const addedProductsArr = Object.keys(addedProducts.productsList).map(
		(key) => addedProducts.productsList[key].item
	);

	return (
		<div className='cart'>
			<Container maxWidth='md'>
				{addedProducts.totalPrice === 0 && (
					<div className='cart-empty'>
						<h1>Cart is empty..</h1>
					</div>
				)}

				<div className='cart__list'>
					{addedProductsArr.map((item) => {
						return (
							<div key={item.id} className='cart__list-item cart-item'>
								<Avatar src={item.img} alt={item.name} />
								<div className='cart-item__label'>{item.name}</div>
								<div className='cart-item__label'>
									{addedProducts.productsList[item.id].count}kg
								</div>
								<div className='cart-item__label'>
									{addedProducts.productsList[item.id].price}$
								</div>
							</div>
						);
					})}
				</div>

				<div className='cart__actions'>
					<Link to='/'>
						<Button variant='contained' color='primary'>
							Return to products list
						</Button>
					</Link>
					{addedProducts.totalPrice !== 0 && (
						<Button color='primary' onClick={onCartClear}>
							Clear cart
						</Button>
					)}
				</div>
			</Container>
		</div>
	);
};
