import { Delete } from '@mui/icons-material';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Tooltip,
    IconButton,
} from '@mui/material';
import { DialogGroupButton } from 'components';
import { ShopProps } from 'models';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { deleteShop } from 'redux/actions';

export const DeleteShopDialog = ({ shop }: ShopProps) => {
    const [state, setState] = useState({
        open: false,
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleDelete = () => {
        dispatch(deleteShop(shop._id));
    };
    return (
        <div>
            <Tooltip title={t('pages.inventory.actions.delete')}>
                <IconButton onClick={handleOpen}>
                    <Delete />
                </IconButton>
            </Tooltip>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle
                    sx={{ backgroundColor: '#E6001F', color: 'white' }}
                >
                    {t('forms.shop.delete.title')}
                </DialogTitle>
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
