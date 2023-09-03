import { Button, TextField } from '@mui/material';
import { FormDialog } from 'components';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { forgotPassword } from 'redux/actions';

export const ForgotPasswordDialog = () => {
    const [state, setState] = useState({
        open: false,
        data: {
            email: '',
        },
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = () => {
        dispatch(forgotPassword(state.data));
    };
    return (
        <div>
            <Button onClick={handleOpen} sx={{ color: '#001D6E' }}>
                {t('forms.forgotPassword.title')}
            </Button>
            <FormDialog
                title={t('forms.forgotPassword.title')}
                open={state.open}
                handleClose={handleOpen}
                handleClick={handleSubmit}
                handleCancel={handleOpen}
                actionText={t('common.validate')}
                cancelText={t('common.cancel')}
            >
                <TextField
                    type="text"
                    label={t('forms.forgotPassword.fields.email')}
                    required
                    fullWidth
                    variant="filled"
                    onChange={(e) =>
                        setState({
                            ...state,
                            data: {
                                ...state.data,
                                email: e.target.value,
                            },
                        })
                    }
                    sx={{
                        borderColor: '#DEE5E9',
                    }}
                />
            </FormDialog>
        </div>
    );
};
