import { Paper, CardMedia, Typography } from '@mui/material';
import { ProductProps } from 'models';
import React from 'react';

export const ProductDetails = ({ product }: ProductProps) => {
    return (
        <Paper
            sx={{
                maxWidth: 300,
                margin: 'auto',
                marginTop: 20,
                padding: 16,
                backgroundColor: '#DEE5E9',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px',
            }}
            elevation={3}
        >
            <CardMedia
                sx={{
                    height: 200,
                }}
                image={product.image ? product.image : './images/logo.png'}
                title={product.name}
            />
            <Typography
                variant="h5"
                component="div"
                sx={{
                    color: '#001D6E',
                }}
            >
                {product.name}
            </Typography>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: '#E6001F',
                }}
            >
                {product.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {product.price} €
            </Typography>
        </Paper>
    );
};
