import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from 'redux/Store';
import { login } from 'redux/actions';

export const Login = () => {

    const [state, setState] = useState(
        {
            email: '',
            password: '',
        }
    );
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(login(state));
        navigate('/');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>          
                <TextField
                    type='email'
                    variant='outlined'
                    label={t('forms.authentication.fields.email')}
                    onChange={(e) => setState({ ...state, email: e.target.value})}
                    fullWidth
                    sx={{ mb: 4 }}
                />
                <TextField
                    type='password'
                    variant='outlined'
                    label={t('forms.authentication.fields.password')}
                    onChange={(e) => setState({ ...state, password: e.target.value})}
                    fullWidth
                    sx={{ mb: 4 }}
                />
                <Button type='submit' variant='outlined' color='inherit'>{t('pages.authentication.login.title')}</Button>
            </form>
        </div>
    );
};