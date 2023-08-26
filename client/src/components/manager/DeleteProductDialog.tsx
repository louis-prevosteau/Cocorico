import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';
import { ProductProps } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { deleteProduct } from 'redux/actions';
import { DialogGroupButton } from 'components';
import { Delete } from '@mui/icons-material';

export const DeleteProductDialog = ({ product }: ProductProps) => {
    const [state, setState] = useState({
        open: false,
        product: product,
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleDelete = () => {
        dispatch(deleteProduct(state.product._id));
    };

    return (
        <div>
            <Tooltip title={t('pages.inventory.actions.deleteProduct')}>
                <IconButton onClick={handleOpen}>
                    <Delete />
                </IconButton>
            </Tooltip>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle
                    sx={{ backgroundColor: '#E6001F', color: 'white' }}
                >
                    {t('forms.product.delete.title')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t('forms.product.delete.message')}
                    </DialogContentText>
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
