import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { createCart, register } from 'redux/actions';

export const Register = () => {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleSubmit = async () => {
        await dispatch(register(state));
        await dispatch(createCart());
    };

    return (
        <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3, color: '#001D6E' }}>
                {t('pages.authentication.register.title')}
            </Typography>
            <TextField
                type="text"
                variant="filled"
                label={t('forms.authentication.fields.username')}
                onChange={(e) =>
                    setState({
                        ...state,
                        username: e.target.value,
                    })
                }
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                type="email"
                variant="filled"
                label={t('forms.authentication.fields.email')}
                onChange={(e) =>
                    setState({
                        ...state,
                        email: e.target.value,
                    })
                }
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                type="password"
                variant="filled"
                label={t('forms.authentication.fields.password')}
                onChange={(e) =>
                    setState({
                        ...state,
                        password: e.target.value,
                    })
                }
                fullWidth
                sx={{ mb: 3 }}
            />
            <Button
                type="submit"
                variant="outlined"
                sx={{ color: '#E6001F' }}
                onClick={handleSubmit}
            >
                {t('pages.authentication.register.title')}
            </Button>
        </Paper>
    );
};
