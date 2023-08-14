import { TextField, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { login } from 'redux/actions';

export const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleSubmit = () => {
        dispatch(login(state));
    };

    return (
        <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3, color: '#001D6E' }}>
                {t('pages.authentication.login.title')}
            </Typography>
            <TextField
                type="email"
                variant="outlined"
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
                variant="outlined"
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
                {t('pages.authentication.login.title')}
            </Button>
        </Paper>
    );
};
