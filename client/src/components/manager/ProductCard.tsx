import { Circle, Recycling } from '@mui/icons-material';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Rating,
    Tooltip,
    Typography,
} from '@mui/material';
import { ProductProps } from 'models';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }: ProductProps) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ display: 'flex', m: 2 }}>
            <CardActionArea
                onClick={() => navigate(`/products/${product._id}`)}
            >
                <CardMedia
                    component={'img'}
                    alt={product.name}
                    src={product.image ? product.image : './images/logo.png'}
                    sx={{ width: 90 }}
                />
                <CardContent>
                    <Typography variant="h5">{product.name}</Typography>
                    <Typography variant="body2">
                        {product.description}
                    </Typography>
                    <Grid container direction="row" spacing={2}>
                        <Grid item>
                            <Typography variant="h4" fontWeight="bolder">
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
                    <Grid container direction="row" spacing={6}>
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

export default ProductCard;
