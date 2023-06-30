import { Delete } from '@mui/icons-material';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { DialogGroupButton } from 'components/common/DialogGroupButton';
import { CollectPoint } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { deleteCollectPoint } from 'redux/actions';

export const DeleteCollectPointDialog = ({ collectPoint }: { collectPoint: CollectPoint }) => {
    
    const [state, setState] = useState(
        {
            open: false
        }
    );
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleDelete = (e: any) => {
        e.preventDefault();
        dispatch(deleteCollectPoint(collectPoint._id));
    };

    return (
        <div>
            <IconButton onClick={handleOpen} sx={{ color: 'white' }}>
                <Delete />
            </IconButton>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.collectPoint.delete.title')}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{t('forms.collectPoint.delete.message')}</DialogContentText>
                </DialogContent>
                <DialogGroupButton
                    handleClick={handleDelete}
                    handleCancel={handleOpen}
                    actionText={t('common.delete')}
                    cancelText={t('common.cancel')}
                />
            </Dialog>
        </div>
    );
};