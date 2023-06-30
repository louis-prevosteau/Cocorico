import { Add } from '@mui/icons-material';
import { IconButton, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { DialogGroupButton } from 'components/common/DialogGroupButton';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { createCollectPoint } from 'redux/actions';

export const CreateCollectPointDialog = () => {

    const[state, setState] = useState(
        {
            open : false,
            collectPoint: {
                address: '',
                city: '',
                zipcode: ''
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
        dispatch(createCollectPoint(state.collectPoint));
    };

    return (
        <div>
            <IconButton onClick={handleOpen} sx={{ backgroundColor: '#001D6E', color: 'white' }}>
                <Add />
            </IconButton>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.collectPoint.create')}</DialogTitle>
                <DialogContent>
                    <TextField
                        type='text'
                        label={t('forms.collectPoint.fields.address')}
                        fullWidth
                        onChange={(e) => setState({ ...state, collectPoint: { ...state.collectPoint, address: e.target.value }})}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type='text'
                        label={t('forms.collectPoint.fields.city')}
                        fullWidth
                        onChange={(e) => setState({ ...state, collectPoint: { ...state.collectPoint, city: e.target.value }})}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type='text'
                        label={t('forms.collectPoint.fields.zipcode')}
                        fullWidth
                        onChange={(e) => setState({ ...state, collectPoint: { ...state.collectPoint, zipcode: e.target.value }})}
                        sx={{ mb: 4 }}
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