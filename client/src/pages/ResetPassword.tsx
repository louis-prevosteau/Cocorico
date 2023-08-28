import { Container, Box, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from 'redux/Store';
import { resetPassword } from 'redux/actions';

export const ResetPassword = () => {
    const { token } = useParams();
    const [state, setState] = useState({
        password: '',
        confirmed: '',
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleSubmit = () => {
        dispatch(
            resetPassword({
                resetToken: token as string,
                password: state.password,
            }),
        );
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '5px solid',
                    borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                    borderRadius: 5,
                }}
            >
                <Typography variant="h5" color="#001D6E">
                    {t('pages.resetPassword.title')}
                </Typography>
                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    label={t('pages.resetPassword.password')}
                    type="password"
                    value={state.password}
                    onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                    }
                    sx={{ mt: 3 }}
                />
                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    label={t('pages.resetPassword.confirmed')}
                    type="password"
                    value={state.confirmed}
                    onChange={(e) =>
                        setState({ ...state, confirmed: e.target.value })
                    }
                    sx={{ mt: 2 }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    disabled={state.password !== state.confirmed}
                    onClick={handleSubmit}
                    sx={{ mt: 3, mb: 2, backgroundColor: '#E6001F' }}
                >
                    {t('common.update')}
                </Button>
            </Box>
        </Container>
    );
};
