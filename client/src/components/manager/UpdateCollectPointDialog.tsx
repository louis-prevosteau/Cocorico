import { Edit } from '@mui/icons-material';
import { IconButton, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { DialogGroupButton } from 'components/common/DialogGroupButton';
import { CollectPoint } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { updateCollectPoint } from 'redux/actions';

export const UpdateCollectPointDialog = ({ collectPoint }: { collectPoint: CollectPoint }) => {

    const [state, setState] = useState(
        {
            open: false,
            collectPoint: collectPoint
        }
    );
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateCollectPoint(collectPoint._id, state.collectPoint));
    };

    return (
        <div>
            <IconButton onClick={handleOpen} sx={{ color: 'white' }}>
                <Edit />
            </IconButton>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.collectPoint.update')}</DialogTitle>
                <DialogContent>
                    <TextField
                        type='text'
                        label={t('forms.collectPoint.fields.address')}
                        value={state.collectPoint.address}
                        fullWidth
                        onChange={(e) => setState({ ...state, collectPoint: { ...state.collectPoint, address: e.target.value }})}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type='text'
                        label={t('forms.collectPoint.fields.city')}
                        value={state.collectPoint.city}
                        fullWidth
                        onChange={(e) => setState({ ...state, collectPoint: { ...state.collectPoint, city: e.target.value }})}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type='text'
                        label={t('forms.collectPoint.fields.zipcode')}
                        value={state.collectPoint.zipcode}
                        fullWidth
                        onChange={(e) => setState({ ...state, collectPoint: { ...state.collectPoint, zipcode: e.target.value }})}
                        sx={{ mb: 4 }}
                    />
                </DialogContent>
                <DialogGroupButton
                    handleClick={handleSubmit}
                    handleCancel={handleOpen}
                    actionText={t('common.update')}
                    cancelText={t('common.cancel')}
                />
            </Dialog>
        </div>
    );
};