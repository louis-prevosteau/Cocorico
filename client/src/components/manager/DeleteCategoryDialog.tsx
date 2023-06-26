import { Delete } from '@mui/icons-material';
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { DialogGroupButton } from 'components';
import { Category } from 'models';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { deleteCategory } from 'redux/actions';

export const DeleteCategoryDialog = ({ category }: { category: Category }) => {

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
        dispatch(deleteCategory(category._id));
    };

    return (
        <div>
            <IconButton onClick={handleOpen} sx={{ color: 'white' }}>
                <Delete />
            </IconButton>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.category.delete.title')}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{t('forms.category.delete.message')}</DialogContentText>
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