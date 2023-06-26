import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from 'redux/Store';
import { register } from 'redux/actions';

export const Register = () => {

    const [state, setState] = useState(
        {
            username: '',
            email: '',
            password: '',
        }
    );
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(register(state));
        navigate('/');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    type='text'
                    variant='outlined'
                    label={t('forms.authentication.fields.username')}
                    onChange={(e) => setState({ ...state, username: e.target.value})}
                    fullWidth
                    sx={{ mb: 4 }}
                />            
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
                <Button type='submit' variant='outlined' color='inherit'>{t('pages.authentication.register.title')}</Button>
            </form>
        </div>
    );
};