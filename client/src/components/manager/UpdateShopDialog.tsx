import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    IconButton,
    Tooltip,
} from '@mui/material';
import { DialogGroupButton } from 'components';
import { ShopProps } from 'models';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'redux/Store';
import { updateShop, getCitiesByZipcode, getCategories } from 'redux/actions';
// @ts-ignore
import FileBase from 'react-file-base64';
import { Edit } from '@mui/icons-material';

export const UpdateShopDialog = ({ shop }: ShopProps) => {
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

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getCitiesByZipcode(shop.zipcode));
    }, []);

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = () => {
        dispatch(updateShop(shop._id, state.shop));
    };

    return (
        <div>
            <Tooltip title={t('pages.inventory.actions.update')}>
                <IconButton onClick={handleOpen}>
                    <Edit />
                </IconButton>
            </Tooltip>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle
                    sx={{ backgroundColor: '#001D6E', color: 'white' }}
                >
                    {t('forms.shop.update')}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2 }}>
                        <TextField
                            type="text"
                            label={t('forms.shop.fields.name')}
                            required
                            value={shop.name}
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
                        <FormControl fullWidth sx={{ mb: 4 }}>
                            <InputLabel>
                                {t('forms.shop.fields.image')}
                            </InputLabel>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }: { base64: any }) =>
                                    setState({
                                        ...state,
                                        shop: {
                                            ...state.shop,
                                            image: base64,
                                        },
                                    })
                                }
                            />
                        </FormControl>
                        <TextField
                            type="text"
                            label={t('forms.shop.fields.description')}
                            required
                            value={shop.description}
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
                                required
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
                            <Select
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        shop: {
                                            ...state.shop,
                                            department: e.target
                                                .value as string,
                                        },
                                    })
                                }
                                required
                            >
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
                            required
                            value={shop.zipcode}
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
                            <InputLabel>
                                {t('forms.shop.fields.city')}
                            </InputLabel>
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
                                required
                            >
                                {cities.map((city) => (
                                    <MenuItem key={city.code} value={city.nom}>
                                        {city.nom}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
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
