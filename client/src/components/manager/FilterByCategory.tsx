import { Cached, Tune } from '@mui/icons-material';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Menu,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getCategories, getShops } from 'redux/actions';

export const FilterByCategory = () => {
    const [state, setState] = useState({
        category: '',
        anchorEl: null,
    });
    const dispatch = useDispatch<AppDispatch>();
    const { categories } = useSelector((state: RootState) => state);
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const handleOpenFilter = (event: any) => {
        setState({ ...state, anchorEl: event.currentTarget });
    };

    const handleCloseFilter = () => {
        setState({ ...state, anchorEl: null });
    };

    const handleChange = (value: any) => {
        setState({ ...state, category: value });
        dispatch(getShops(value));
    };

    return (
        <Box>
            <Button
                startIcon={<Tune />}
                onClick={handleOpenFilter}
                aria-controls="categoryFilter"
                sx={{
                    borderRadius: 10,
                    backgroundColor: '#001D6E',
                    color: 'white',
                    '&:hover': { backgroundColor: '#001D6E' },
                }}
            >
                {t('pages.shops.shopsFilter.byCategory')}
            </Button>
            <Menu
                id="categoryFilter"
                anchorEl={state.anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(state.anchorEl)}
                onClose={handleCloseFilter}
                sx={{
                    display: 'flex',
                }}
            >
                <RadioGroup
                    value={state.category}
                    onChange={(e) => handleChange(e.target.value)}
                >
                    <FormControl sx={{ mt: 2 }}>
                        <FormControlLabel
                            value=""
                            control={<Radio />}
                            label={
                                <Typography
                                    variant="body1"
                                    sx={{ color: '#333' }}
                                >
                                    {t('pages.shops.shopsFilter.allCategories')}
                                </Typography>
                            }
                        />
                        {categories.map((category) => (
                            <FormControlLabel
                                key={category._id}
                                value={category._id}
                                label={
                                    <Typography
                                        variant="body1"
                                        sx={{ color: '#333' }}
                                    >
                                        {category.name}
                                    </Typography>
                                }
                                control={<Radio />}
                            />
                        ))}
                    </FormControl>
                </RadioGroup>
            </Menu>
        </Box>
    );
};
