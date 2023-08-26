import { ProductsListProps } from 'models';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getProducts } from 'redux/actions';
import {
    List,
    ListItem,
    ButtonGroup,
    Typography,
    ListItemText,
    Button,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Circle, Inventory } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { DeleteProductDialog, UpdateProductDialog } from 'components';

export const ProductsList = ({ shopId }: ProductsListProps) => {
    const { products } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getProducts(shopId));
    }, [shopId]);
    return (
        <div>
            <List>
                {products.length !== 0 ? (
                    products.map((product) => (
                        <ListItem
                            key={product._id}
                            secondaryAction={
                                <ButtonGroup>
                                    <UpdateProductDialog product={product} />
                                    <DeleteProductDialog product={product} />
                                </ButtonGroup>
                            }
                            style={{
                                backgroundColor: '#DEE5E9',
                                marginBottom: '1rem',
                            }}
                        >
                            <ListItemText
                                primary={product.name}
                                secondary={
                                    <Fragment>
                                        <Typography>
                                            {product.price} €
                                        </Typography>
                                        <Circle
                                            fontSize="small"
                                            color={
                                                product.available
                                                    ? 'success'
                                                    : 'error'
                                            }
                                        />
                                    </Fragment>
                                }
                            />
                        </ListItem>
                    ))
                ) : (
                    <Typography variant="body1" align="center">
                        {t('pages.inventory.noProducts')}
                    </Typography>
                )}
            </List>
        </div>
    );
};
