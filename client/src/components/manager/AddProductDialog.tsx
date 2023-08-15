import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import { ShopProps } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { createProduct } from 'redux/actions';
import { DialogGroupButton } from 'components';
// @ts-ignore
import FileBase from 'react-file-base64';

export const AddProductDialog = ({ shop }: ShopProps) => {
    const [state, setState] = useState({
        open: false,
        product: {
            name: '',
            image: '',
            description: '',
            price: 0,
            shop: shop._id,
            madeIn: shop.city,
            available: true,
            returnable: false,
        },
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = () => {
        dispatch(createProduct(state.product));
    };
    return (
        <div>
            <MenuItem onClick={handleOpen}>
                <Typography sx={{ color: '#001D6E' }}>{t('pages.myShops.actions.addProduct')}</Typography>
            </MenuItem>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle sx={{ backgroundColor: '#001D6E', color: 'white' }}>
                    {t('forms.product.create', { shop: shop.name })}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2 }}>
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
                        <TextField
                            type="text"
                            label={t('forms.product.fields.madeIn')}
                            required
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
                    </Box>
                </DialogContent>
                <DialogGroupButton
                    handleClick={handleSubmit}
                    handleCancel={handleOpen}
                    actionText={t('common.create')}
                    cancelText={t('common.cancel')}
                />
            </Dialog>
        </div>
    );
};
