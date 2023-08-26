import { InventoryOutlined } from '@mui/icons-material';
import {
    Button,
    ButtonGroup,
    Chip,
    FormControlLabel,
    Grid,
    List,
    ListItem,
    ListItemText,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material';
import {
    CreateShopDialog,
    DeleteShopDialog,
    ProductsList,
    UpdateShopDialog,
} from 'components';
import { Shop } from 'models';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState, AppDispatch } from 'redux/Store';
import { getMyShops } from 'redux/actions';

export const Inventory = () => {
    const [state, setState] = useState({
        shop: '',
    });
    const { shops } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getMyShops());
    }, []);

    return (
        <div>
            <Typography
                variant="h4"
                align="center"
                style={{ color: '#E6001F', marginBottom: '1rem' }}
            >
                {t('pages.inventory.title')}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        style={{ color: '#001D6E', marginBottom: '1rem' }}
                    >
                        {t('pages.inventory.shops')}
                    </Typography>
                    <RadioGroup
                        value={state.shop}
                        onChange={(e) =>
                            setState({ ...state, shop: e.target.value })
                        }
                    >
                        <List>
                            {shops.map((shop: Shop) => (
                                <ListItem
                                    key={shop._id}
                                    secondaryAction={
                                        <ButtonGroup>
                                            <UpdateShopDialog shop={shop} />
                                            <DeleteShopDialog shop={shop} />
                                        </ButtonGroup>
                                    }
                                    style={{
                                        backgroundColor: '#DEE5E9',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Radio
                                                style={{ color: '#001D6E' }}
                                            />
                                        }
                                        value={shop._id}
                                        label={
                                            <ListItemText
                                                primary={shop.name}
                                                secondary={
                                                    <Chip label={shop.city} />
                                                }
                                            />
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </RadioGroup>
                    <CreateShopDialog />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        style={{ color: '#001D6E', marginBottom: '1rem' }}
                    >
                        {t('pages.inventory.products')}
                    </Typography>
                    {state.shop && <ProductsList shopId={state.shop} />}
                    <NavLink
                        to={`/shops/add-product`}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            startIcon={<InventoryOutlined />}
                            variant="contained"
                            style={{
                                backgroundColor: '#001D6E',
                                color: '#DEE5E9',
                                textTransform: 'none',
                                width: '100%',
                            }}
                        >
                            {t('pages.inventory.actions.addProduct')}
                        </Button>
                    </NavLink>
                </Grid>
            </Grid>
        </div>
    );
};
