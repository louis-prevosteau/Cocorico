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
    Autocomplete,
    Box,
} from '@mui/material';
import { DialogGroupButton } from 'components/common/DialogGroupButton';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { createShop } from 'redux/actions';

export const CreateShopDialog = () => {
    const [state, setState] = useState({
        open: false,
        shop: {
            name: '',
            description: '',
            category: '',
            city: '',
            department: '',
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
        dispatch(createShop(state.shop));
    };

    return (
        <div>
            <IconButton
                onClick={handleOpen}
                sx={{
                    backgroundColor: '#001D6E',
                    color: 'white',
                }}
            >
                <Add />
            </IconButton>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.shop.create')}</DialogTitle>
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
                    <Autocomplete
                        sx={{ mb: 4, width: 300 }}
                        options={cities}
                        autoHighlight
                        getOptionLabel={(city) => city.nom}
                        renderOption={(props, city) => (
                            <Box component="li" {...props}>
                                {city.nom}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={t('forms.shop.fields.city')}
                                inputProps={{
                                    ...params.inputProps,
                                }}
                            />
                        )}
                    />
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
