import {
    Button,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { createProduct, getShops } from 'redux/actions';
// @ts-ignore
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';

export const AddProduct = () => {
    const { shops } = useSelector((state: RootState) => state);
    const [state, setState] = useState({
        product: {
            name: '',
            image: '',
            description: '',
            price: 0,
            shop: '',
            madeIn: '',
            available: true,
            returnable: false,
        },
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getShops());
    }, []);

    const handleSubmit = () => {
        dispatch(createProduct(state.product));
        navigate(-1);
    };
    return (
        <Paper

            elevation={3}
            sx={{
                p: 3,
                mt: 4,
                mb: 4,
                border: '10px solid',
                borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                borderRadius: 5,
            }}
        >
            <Typography variant="h5" sx={{ mb: 3, color: '#001D6E' }}>
                {t('pages.inventory.actions.addProduct')}
            </Typography>
            <TextField
                type="text"
                label={t('forms.product.fields.name')}
                required
                fullWidth
                onChange={(e) =>
                    setState({
                        ...state,
                        product: {
                            ...state.product,
                            name: e.target.value,
                        },
                    })
                }
                sx={{ mb: 4 }}
            />
            <InputLabel sx={{ ml: 1 }}>
                {t('forms.product.fields.image')}
            </InputLabel>
            <FormControl fullWidth sx={{ mb: 4 }}>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }: { base64: any }) =>
                        setState({
                            ...state,
                            product: {
                                ...state.product,
                                image: base64,
                            },
                        })
                    }
                />
            </FormControl>
            <TextField
                type="text"
                label={t('forms.product.fields.description')}
                required
                multiline
                fullWidth
                onChange={(e) =>
                    setState({
                        ...state,
                        product: {
                            ...state.product,
                            description: e.target.value,
                        },
                    })
                }
                sx={{ mb: 4 }}
            />
            <TextField
                type="number"
                label={t('forms.product.fields.price')}
                required
                fullWidth
                onChange={(e) =>
                    setState({
                        ...state,
                        product: {
                            ...state.product,
                            price: parseFloat(e.target.value),
                        },
                    })
                }
                sx={{ mb: 4 }}
            />
            <FormControl fullWidth sx={{ mb: 4 }}>
                <InputLabel>{t('forms.product.fields.shop')}</InputLabel>
                <Select
                    onChange={(e) =>
                        setState({
                            ...state,
                            product: {
                                ...state.product,
                                shop: e.target.value as string,
                            },
                        })
                    }
                    required
                >
                    {shops.map((shop) => (
                        <MenuItem key={shop._id} value={shop._id}>
                            {shop.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                type="text"
                label={t('forms.product.fields.madeIn')}
                required
                fullWidth
                onChange={(e) =>
                    setState({
                        ...state,
                        product: {
                            ...state.product,
                            madeIn: e.target.value,
                        },
                    })
                }
                sx={{ mb: 4 }}
            />
            <Grid container direction="row" justifyContent={'space-between'}>
                <Grid item>
                    <FormControlLabel
                        label={
                            <Typography fontWeight={'bolder'}>
                                {t(
                                    `forms.product.fields.${
                                        state.product.available
                                            ? 'available'
                                            : 'unavailable'
                                    }`,
                                )}
                            </Typography>
                        }
                        control={
                            <Switch
                                checked={state.product.available}
                                onChange={() =>
                                    setState({
                                        ...state,
                                        product: {
                                            ...state.product,
                                            available: !state.product.available,
                                        },
                                    })
                                }
                            />
                        }
                        sx={{
                            color: state.product.available ? 'green' : 'red',
                        }}
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                        label={
                            <Typography fontWeight={'bolder'}>
                                {t(
                                    `forms.product.fields.${
                                        state.product.returnable
                                            ? 'returnable'
                                            : 'unreturnable'
                                    }`,
                                )}
                            </Typography>
                        }
                        control={
                            <Switch
                                checked={state.product.returnable}
                                onChange={() =>
                                    setState({
                                        ...state,
                                        product: {
                                            ...state.product,
                                            returnable:
                                                !state.product.returnable,
                                        },
                                    })
                                }
                            />
                        }
                        sx={{
                            color: state.product.returnable ? 'green' : 'red',
                        }}
                    />
                </Grid>
            </Grid>
            <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                    backgroundColor: '#001D6E',
                    '&:hover': { backgroundColor: '#001D6E' },
                }}
            >
                {t('pages.inventory.actions.addProduct')}
            </Button>
        </Paper>
    );
};
