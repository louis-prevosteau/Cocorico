import { MoreVert, ShoppingBag } from '@mui/icons-material';
import {
    Avatar,
    Chip,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Menu,
    Typography,
} from '@mui/material';
import {
    AddProductDialog,
    CreateShopDialog,
    DeleteProductDialog,
    DeleteShopDialog,
    UpdateProductDialog,
    UpdateShopDialog,
} from 'components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getDepartments, getMyShops } from 'redux/actions';

export const MyShops = () => {
    const [state, setState] = useState({
        anchor: null,
    });
    const { shops } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getMyShops());
        dispatch(getDepartments());
    }, []);

    return (
        <div>
            <Typography
                variant="h4"
                align="center"
                sx={{ color: '#001D6E', marginBottom: 20 }}
            >
                {t('pages.myShops.title')}
            </Typography>
            <List sx={{ maxHeight: 650, overflow: 'auto' }}>
                {shops.map((shop) => (
                    <ListItem
                        key={shop._id}
                        secondaryAction={
                            <div>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#001D6E',
                                        color: 'white',
                                    }}
                                    aria-controls="actions-menu"
                                    onClick={(e: any) =>
                                        setState({
                                            ...state,
                                            anchor: e.currentTarget,
                                        })
                                    }
                                >
                                    <MoreVert />
                                </IconButton>
                                <Menu
                                    id="actions-menu"
                                    anchorEl={state.anchor}
                                    keepMounted
                                    open={Boolean(state.anchor)}
                                    onClose={() =>
                                        setState({ ...state, anchor: null })
                                    }
                                >
                                    <UpdateShopDialog shop={shop} />
                                    <DeleteShopDialog shop={shop} />
                                    <AddProductDialog shop={shop} />
                                    <UpdateProductDialog shop={shop} />
                                    <DeleteProductDialog shop={shop} />
                                </Menu>
                            </div>
                        }
                        sx={{
                            backgroundColor: '#DEE5E9',
                            marginBottom: 10,
                        }}
                    >
                        <ListItemAvatar>
                            {shop.image ? (
                                <Avatar alt={shop.name} src={shop.image} />
                            ) : (
                                <ShoppingBag
                                    sx={{ color: '#E6001F' }}
                                    fontSize="large"
                                />
                            )}
                        </ListItemAvatar>
                        <ListItemText
                            primary={shop.name}
                            secondary={
                                <Chip
                                    label={shop.category.name}
                                    sx={{ backgroundColor: '#E6001F', color: 'white' }}
                                />
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <CreateShopDialog />
        </div>
    );
};
