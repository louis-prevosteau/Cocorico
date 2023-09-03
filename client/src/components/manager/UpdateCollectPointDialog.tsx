import { Edit } from '@mui/icons-material';
import {
    IconButton,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import { FormDialog } from 'components';
import { CollectPointProps } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getCitiesByZipcode, updateCollectPoint } from 'redux/actions';

export const UpdateCollectPointDialog = ({
    collectPoint,
}: CollectPointProps) => {
    const [state, setState] = useState({
        open: false,
        collectPoint: collectPoint,
    });
    const dispatch = useDispatch<AppDispatch>();
    const { cities, departments } = useSelector((state: RootState) => state);
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = () => {
        dispatch(updateCollectPoint(collectPoint._id, state.collectPoint));
    };

    return (
        <div>
            <IconButton onClick={handleOpen} sx={{ color: 'white' }}>
                <Edit />
            </IconButton>
            <FormDialog
                title={t('forms.collectPoint.update')}
                open={state.open}
                handleClose={handleOpen}
                handleClick={handleSubmit}
                handleCancel={handleOpen}
                actionText={t('common.update')}
                cancelText={t('common.cancel')}
            >
                <TextField
                    type="text"
                    value={state.collectPoint.address}
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
                                    department: e.target.value,
                                },
                            })
                        }
                        variant="filled"
                        required
                        value={state.collectPoint.department}
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
                    value={state.collectPoint.zipcode}
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
                    onBlur={() =>
                        dispatch(getCitiesByZipcode(state.collectPoint.zipcode))
                    }
                    variant="filled"
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
                        value={state.collectPoint.city}
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
