import React from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';
import './Card.css';

const Card = ({ product, children }) => {
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    return (
        <Grid item xs={6} sm={6} md={4} lg={3}>
            <Paper className="card-paper">
                <Grid container direction='column' spacing={2} alignItems="center" justifyContent="center">
                    <Grid item>
                        <img className="card-image" src={product.image} alt={product.name_product} />
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' className="card-title">
                            {children}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' className="card-price">
                            R$ {product.price.toFixed(2)}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            className="card-button"
                            onClick={() => dispatch(cartActions.Add(cart, product))}
                        >
                            Adicionar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Card;
