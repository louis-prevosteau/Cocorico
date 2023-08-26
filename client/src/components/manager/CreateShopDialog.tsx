import { Add } from '@mui/icons-material';
import {
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Tooltip,
} from '@mui/material';
import { DialogGroupButton } from 'components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import {
    createShop,
    getCategories,
    getCitiesByZipcode,
    getDepartments,
} from 'redux/actions';
// @ts-ignore
import FileBase from 'react-file-base64';

export const CreateShopDialog = () => {
    const [state, setState] = useState({
        open: false,
        shop: {
            name: '',
            image: '',
            description: '',
            category: '',
            city: '',
            zipcode: '',
            department: '',
        },
    });
    const { categories, cities, departments } = useSelector(
        (state: RootState) => state,
    );
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getDepartments());
        dispatch(getCategories());
    }, []);

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = () => {
        dispatch(createShop(state.shop));
    };

    return (
        <div>
            <Tooltip title={t('forms.shop.create')}>
                <IconButton
                    onClick={handleOpen}
                    sx={{
                        backgroundColor: '#001D6E',
                        color: 'white',
                    }}
                >
                    <Add />
                </IconButton>
            </Tooltip>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.shop.create')}</DialogTitle>
                <DialogContent>
                    <TextField
                        type="text"
                        label={t('forms.shop.fields.name')}
                        required
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
                        <InputLabel>{t('forms.shop.fields.image')}</InputLabel>
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
                                        department: e.target.value as string,
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
                            required
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
