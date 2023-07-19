import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Typography,
} from '@mui/material';
import { ShopProps } from 'models';
import React from 'react';

export const ShopCard = ({ shop }: ShopProps) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component={'img'}
                image={shop.image ? shop.image : './images/shop.png'}
                alt={shop.name}
                sx={{ width: 90 }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '0 1 auto' }}>
                    <Typography variant="h5">{shop.name}</Typography>
                    <Typography variant="subtitle1">{shop.city}</Typography>
                    <Chip label={shop.category?.name} />
                </CardContent>
            </Box>
        </Card>
    );
};
