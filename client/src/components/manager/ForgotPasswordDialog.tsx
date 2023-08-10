import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { DialogGroupButton } from 'components';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { forgotPassword } from 'redux/actions';

export const ForgotPasswordDialog = () => {
    const [state, setState] = useState(
        {
            open: false,
            data: {
                email: ''
            }
        }
    );
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(forgotPassword(state.data));
    }
    return (
        <div>
            <Button onClick={handleOpen}>{t('forms.forgotPassword.title')}</Button>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.forgotPassword.title')}</DialogTitle>
                <DialogContent>
                    <TextField
                        type="text"
                        label={t('forms.forgotPassword.fields.email')}
                        required
                        fullWidth
                        onChange={(e) =>
                            setState({
                                ...state,
                                data: {
                                    ...state.data,
                                    email: e.target.value,
                                },
                            })
                        }
                        sx={{ mb: 4 }}
                    />
                </DialogContent>
                <DialogGroupButton
                    handleClick={handleSubmit}
                    handleCancel={handleOpen}
                    actionText={t('common.validate')}
                    cancelText={t('common.cancel')}
                />
            </Dialog>
        </div>
    );
};