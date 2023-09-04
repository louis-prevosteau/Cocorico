import { Circle, Recycling } from '@mui/icons-material';
import { Paper, CardMedia, Typography, Grid } from '@mui/material';
import { ProductProps } from 'models';
import React from 'react';

export const ProductDetails = ({ product }: ProductProps) => {
    return (
        <Paper
            sx={{
                maxWidth: 300,
                padding: 3,
                backgroundColor: '#DEE5E9',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px',
            }}
            elevation={3}
        >
            <CardMedia
                sx={{
                    height: 300,
                }}
                image={product.image ? product.image : './images/logo.png'}
                title={product.name}
            />
            <Typography
                variant="h5"
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
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                mt={1}
            >
                <Grid item>
                    <Circle
                        fontSize="small"
                        color={product.available ? 'success' : 'error'}
                    />
                </Grid>
                <Grid item>
                    <Recycling
                        fontSize="small"
                        color={product.returnable ? 'success' : 'error'}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};
