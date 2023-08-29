import { Circle, Recycling } from '@mui/icons-material';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Rating,
    Typography,
} from '@mui/material';
import { ProductProps } from 'models';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }: ProductProps) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ height: 350 }}>
            <CardActionArea
                onClick={() => navigate(`/products/${product._id}`)}
            >
                <CardMedia
                    component="img"
                    alt={product.name}
                    height="140"
                    image={product.image ? product.image : './images/logo.png'}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2">
                        {product.description}
                    </Typography>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={1}
                        mt={2}
                    >
                        <Grid item>
                            <Typography variant="h6">
                                {product.price} €
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Rating
                                readOnly
                                precision={0.1}
                                value={product.averageNote}
                            />
                        </Grid>
                    </Grid>
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
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
