import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import './Header.css';

const Header = () => {
    return (
        <Grid container className="header-container" direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3' className="header-title">
                Netshirts
            </Typography>
            <div>
                <Link to="/" className="header-button">
                    <Button color="primary">Home</Button>
                </Link>
                <Link to="/contato" className="header-button">
                    <Button color="primary">Contato</Button>
                </Link>
            </div>
            <div className="header-cart">
                <Cart />
            </div>
        </Grid>
    )
}

export default Header;
