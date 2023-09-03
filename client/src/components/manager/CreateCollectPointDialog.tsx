import { Add } from '@mui/icons-material';
import {
    IconButton,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import { FormDialog } from 'components';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { createCollectPoint, getCitiesByZipcode } from 'redux/actions';

export const CreateCollectPointDialog = () => {
    const [state, setState] = useState({
        open: false,
        collectPoint: {
            address: '',
            city: '',
            zipcode: '',
            department: '',
        },
    });
    const dispatch = useDispatch<AppDispatch>();
    const { cities, departments } = useSelector((state: RootState) => state);
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = () => {
        dispatch(createCollectPoint(state.collectPoint));
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
            <FormDialog
                title={t('forms.collectPoint.create')}
                open={state.open}
                handleClose={handleOpen}
                handleClick={handleSubmit}
                handleCancel={handleOpen}
                actionText={t('common.create')}
                cancelText={t('common.cancel')}
            >
                <TextField
                    type="text"
                    label={t('forms.collectPoint.fields.address')}
                    required
                    fullWidth
                    onChange={(e) =>
                        setState({
                            ...state,
                            collectPoint: {
                                ...state.collectPoint,
                                address: e.target.value,
                            },
                        })
                    }
                    variant="filled"
                    sx={{ mb: 4 }}
                />
                <FormControl sx={{ mb: 4, width: 300 }}>
                    <InputLabel>
                        {t('forms.collectPoint.fields.department')}
                    </InputLabel>
                    <Select
                        onChange={(e) =>
                            setState({
                                ...state,
                                collectPoint: {
                                    ...state.collectPoint,
                                    department: e.target.value as string,
                                },
                            })
                        }
                        variant="filled"
                        required
                    >
                        {departments.map((dep) => (
                            <MenuItem key={dep.code} value={dep.nom}>
                                {dep.nom} - {dep.code}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    type="text"
                    label={t('forms.collectPoint.fields.zipcode')}
                    required
                    fullWidth
                    onChange={(e) =>
                        setState({
                            ...state,
                            collectPoint: {
                                ...state.collectPoint,
                                zipcode: e.target.value,
                            },
                        })
                    }
                    variant="filled"
                    onBlur={() =>
                        dispatch(getCitiesByZipcode(state.collectPoint.zipcode))
                    }
                    sx={{ mb: 4 }}
                />
                <FormControl sx={{ mb: 4, width: 300 }}>
                    <InputLabel>
                        {t('forms.collectPoint.fields.city')}
                    </InputLabel>
                    <Select
                        onChange={(e) =>
                            setState({
                                ...state,
                                collectPoint: {
                                    ...state.collectPoint,
                                    city: e.target.value as string,
                                },
                            })
                        }
                        variant="filled"
                        required
                    >
                        {cities.map((city) => (
                            <MenuItem key={city.code} value={city.nom}>
                                {city.nom}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </FormDialog>
        </div>
    );
};
