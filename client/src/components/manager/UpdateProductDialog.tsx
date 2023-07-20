import {
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    List,
    ListItemButton,
    ListItemText,
    MenuItem,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import { CreateProduct, Product, ShopProps } from 'models';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getProducts, updateProduct } from 'redux/actions';
// @ts-ignore
import FileBase from 'react-file-base64';
import { DialogGroupButton } from 'components';

export const UpdateProductDialog = ({ shop }: ShopProps) => {
    const [state, setState] = useState({
        open: false,
        productSelected: false,
        product: {} as Product,
    });
    const { products } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getProducts(shop._id));
    }, [shop]);

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSelectProduct = (e: any, product: Product) => {
        setState({ ...state, productSelected: true, product: product });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(
            updateProduct(
                state.product._id,
                state.product as unknown as CreateProduct,
            ),
        );
    };

    return (
        <div>
            <MenuItem onClick={handleOpen}>
                <Typography>
                    {t('pages.myShops.actions.updateProduct')}
                </Typography>
            </MenuItem>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.product.update')}</DialogTitle>
                <DialogContent>
                    <Grid
                        container
                        direction={'row'}
                        justifyContent={'center'}
                        alignItems="center"
                    >
                        <Grid item>
                            <List sx={{ maxWidth: 350 }}>
                                {products.map((product) => (
                                    <ListItemButton
                                        key={product._id}
                                        selected={
                                            state.product._id === product._id
                                        }
                                        onClick={(e) =>
                                            handleSelectProduct(e, product)
                                        }
                                    >
                                        <ListItemText primary={product.name} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Grid>
                        {state.productSelected && (
                            <Grid item>
                                <TextField
                                    type="text"
                                    label={t('forms.product.fields.name')}
                                    value={state.product.name}
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
                                <FormControl fullWidth sx={{ mb: 4 }}>
                                    <InputLabel>
                                        {t('forms.product.fields.image')}
                                    </InputLabel>
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
                                    label={t(
                                        'forms.product.fields.description',
                                    )}
                                    value={state.product.description}
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
                                    value={state.product.price}
                                    fullWidth
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            product: {
                                                ...state.product,
                                                price: parseFloat(
                                                    e.target.value,
                                                ),
                                            },
                                        })
                                    }
                                    sx={{ mb: 4 }}
                                />
                                <TextField
                                    type="text"
                                    label={t('forms.product.fields.madeIn')}
                                    value={state.product.madeIn}
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
                                            value={state.product.available}
                                            onChange={() =>
                                                setState({
                                                    ...state,
                                                    product: {
                                                        ...state.product,
                                                        available:
                                                            !state.product
                                                                .available,
                                                    },
                                                })
                                            }
                                        />
                                    }
                                    sx={{
                                        color: state.product.available
                                            ? 'green'
                                            : 'red',
                                    }}
                                />
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
                                            value={state.product.returnable}
                                            onChange={() =>
                                                setState({
                                                    ...state,
                                                    product: {
                                                        ...state.product,
                                                        returnable:
                                                            !state.product
                                                                .returnable,
                                                    },
                                                })
                                            }
                                        />
                                    }
                                    sx={{
                                        color: state.product.returnable
                                            ? 'green'
                                            : 'red',
                                    }}
                                />
                            </Grid>
                        )}
                    </Grid>
                </DialogContent>
                <DialogGroupButton
                    handleClick={handleSubmit}
                    handleCancel={handleOpen}
                    actionText={t('common.update')}
                    cancelText={t('common.cancel')}
                />
            </Dialog>
        </div>
    );
};
