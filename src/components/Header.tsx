import React, {FC} from 'react'
import {Container, IconButton, Badge} from '@material-ui/core';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }),
)(Badge);


interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {
   return (
      <div className='header'>
         <Container maxWidth="md">
            <div className="header__inner">
               <Link to='/'>
               <div className="logo">
                  FruitShop
               </div>
               </Link>
               <Link to='/cart'>
               <div className="cart">
                  <IconButton aria-label="cart">
                     <StyledBadge badgeContent={0} color="secondary">
                        <ShoppingCartIcon />
                     </StyledBadge>
                  </IconButton>
               </div>
               </Link>
            </div>
         </Container>
      </div>
   )
}


