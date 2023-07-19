import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    MenuItem,
    Typography,
} from '@mui/material';
import { DialogGroupButton } from 'components';
import { ShopProps } from 'models';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { deleteShop } from 'redux/actions';

const DeleteShopDialog = ({ shop }: ShopProps) => {
    const [state, setState] = useState({
        open: false,
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleDelete = (e: any) => {
        e.preventDefault();
        dispatch(deleteShop(shop._id));
    };
    return (
        <div>
            <MenuItem onClick={handleOpen}>
                <Typography>{t('pages.myShops.actions.delete')}</Typography>
            </MenuItem>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.shop.delete.title')}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t('forms.shop.delete.message')}
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

export default DeleteShopDialog;
