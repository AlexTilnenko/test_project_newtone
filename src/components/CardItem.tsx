import React, { FC } from "react";
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Badge
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Product } from "../products";
import { ProductInCart } from "../App";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles({
	root: {
		width: 345,
		margin: "15px"
	},
	media: {
		height: 200
	},
	btn: {
		width: "100%"
	},
	btnLabel: {
		marginRight: "3px"
	}
});

interface CardItemProps {
	productItem: Product;
	onAddProductToCart: (product: Product) => void;
	addedProducts: ProductInCart;
}

export const CardItem: FC<CardItemProps> = ({ productItem, onAddProductToCart, addedProducts }) => {
	const classes = useStyles();

	const currentProductCount = addedProducts[productItem.id]
		? addedProducts[productItem.id].count
		: 0;

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={productItem.img} title={productItem.name} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{productItem.name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{productItem.price} $ (per kg)
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					variant='contained'
					color='primary'
					className={classes.btn}
					onClick={() => onAddProductToCart(productItem)}
				>
					<span className={classes.btnLabel}>Add to cart</span>
					<Badge color='secondary' badgeContent={currentProductCount}>
						<AddCircleOutlineIcon />
					</Badge>
				</Button>
			</CardActions>
		</Card>
	);
};
