import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from '@mui/material';
import { DialogGroupButton } from 'components';
import { Shop } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'redux/Store';
import { updateShop, getCitiesByZipcode } from 'redux/actions';

export const UpdateShopDialog = ({ shop }: { shop: Shop }) => {
    const [state, setState] = useState({
        open: false,
        shop: {
            ...shop,
            category: '',
        },
    });
    const { categories, cities, departments } = useSelector(
        (state: RootState) => state,
    );
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateShop(shop._id, state.shop));
    };

    return (
        <div>
            <MenuItem onClick={handleOpen}>
                <Typography>{t('pages.myShops.actions.update')}</Typography>
            </MenuItem>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.shop.update')}</DialogTitle>
                <DialogContent>
                    <TextField
                        type="text"
                        label={t('forms.shop.fields.name')}
                        fullWidth
                        onChange={(e) =>
                            setState({
                                ...state,
                                shop: {
                                    ...state.shop,
                                    name: e.target.value,
                                },
                            })
                        }
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        label={t('forms.shop.fields.description')}
                        multiline
                        fullWidth
                        onChange={(e) =>
                            setState({
                                ...state,
                                shop: {
                                    ...state.shop,
                                    description: e.target.value,
                                },
                            })
                        }
                        sx={{ mb: 4 }}
                    />
                    <FormControl sx={{ mb: 4, width: 300 }}>
                        <InputLabel>
                            {t('forms.shop.fields.category')}
                        </InputLabel>
                        <Select
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    shop: {
                                        ...state.shop,
                                        category: e.target.value as string,
                                    },
                                })
                            }
                        >
                            {categories.map((category) => (
                                <MenuItem
                                    key={category._id}
                                    value={category._id}
                                >
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ mb: 4, width: 300 }}>
                        <InputLabel>
                            {t('forms.shop.fields.department')}
                        </InputLabel>
                        <Select>
                            {departments.map((department) => (
                                <MenuItem
                                    key={department.code}
                                    value={department.nom}
                                >
                                    {department.nom}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        type="text"
                        label={t('forms.shop.fields.zipcode')}
                        fullWidth
                        onChange={(e) =>
                            setState({
                                ...state,
                                shop: {
                                    ...state.shop,
                                    zipcode: e.target.value,
                                },
                            })
                        }
                        onBlur={() =>
                            dispatch(getCitiesByZipcode(state.shop.zipcode))
                        }
                        sx={{ mb: 4 }}
                    />
                    <FormControl sx={{ mb: 4, width: 300 }}>
                        <InputLabel>{t('forms.shop.fields.city')}</InputLabel>
                        <Select
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    shop: {
                                        ...state.shop,
                                        city: e.target.value as string,
                                    },
                                })
                            }
                        >
                            {cities.map((city) => (
                                <MenuItem key={city.code} value={city.nom}>
                                    {city.nom}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
