import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    List,
    ListItemButton,
    ListItemText,
    MenuItem,
    Typography,
} from '@mui/material';
import { Product, ShopProps } from 'models';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'redux/Store';
import { deleteProduct, getProducts } from 'redux/actions';
import { DialogGroupButton } from 'components';

export const DeleteProductDialog = ({ shop }: ShopProps) => {
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

    const handleDelete = () => {
        dispatch(deleteProduct(state.product._id));
    };

    return (
        <div>
            <MenuItem onClick={handleOpen}>
                <Typography>
                    {t('pages.myShops.actions.deleteProduct')}
                </Typography>
            </MenuItem>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.product.delete.title')}</DialogTitle>
                <DialogContent>
                    <Grid
                        container
                        direction={'row'}
                        justifyContent={'center'}
                        alignItems="center"
                    >
                        <Grid item>
                            <List sx={{ maxHeight: 200 }}>
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
                    </Grid>
                    {state.productSelected && (
                        <Grid item>
                            <DialogContentText>
                                {t('forms.product.delete.message')}
                            </DialogContentText>
                        </Grid>
                    )}
                </DialogContent>
                <DialogGroupButton
                    handleClick={handleDelete}
                    handleCancel={handleOpen}
                    actionText={t('common.delete')}
                    cancelText={t('common.cancel')}
                />
            </Dialog>
        </div>
    );
};
