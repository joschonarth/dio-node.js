import React from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';
import './Card.css';

const Card = ({ product, children }) => {
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    return(
        <Grid item xs={3}>
            <Paper className="card-paper">
                <Grid container direction='column'>
                    <Grid item>
                        <img className="card-image" src={product.image} alt={product.name_product}/>
                        <Typography variant='h6' className="card-title">
                            {children}
                        </Typography>
                        <Typography variant='subtitle1' className="card-price">
                            R$ {product.price.toFixed(2)}
                        </Typography>
                    </Grid>
                    <Button
                        variant="contained"
                        className="card-button"
                        onClick={() => dispatch(cartActions.Add(cart, product))}
                    >
                        Adicionar
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default Card;
