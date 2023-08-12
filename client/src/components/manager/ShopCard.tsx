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
        <Card
            sx={{
                display: 'flex',
                bgcolor: '#DEE5E9',
                marginBottom: 3,
                width: '90vw',
                maxWidth: 300, 
            }}
        >
            <CardMedia
                component={'img'}
                image={shop.image ? shop.image : './images/logo.png'}
                alt={shop.name}
                sx={{
                    width: '30%',
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                }}
            >
                <CardContent sx={{ flex: '0 1 auto' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#E6001F',
                            marginBottom: 1,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {shop.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: '#001D6E',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {shop.city}
                    </Typography>
                    <Chip
                        label={shop.category?.name}
                        sx={{
                            bgcolor: '#E6001F',
                            color: '#DEE5E9',
                        }}
                    />
                </CardContent>
            </Box>
        </Card>
    );
};
