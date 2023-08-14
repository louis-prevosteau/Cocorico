import { Delete } from '@mui/icons-material';
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
} from '@mui/material';
import { DialogGroupButton } from 'components';
import { CategoryProps } from 'models';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { deleteCategory } from 'redux/actions';

export const DeleteCategoryDialog = ({ category }: CategoryProps) => {
    const [state, setState] = useState({
        open: false,
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleDelete = () => {
        dispatch(deleteCategory(category._id));
    };

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <Delete color="action" />
            </IconButton>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle
                    sx={{ backgroundColor: '#E6001F', color: '#DEE5E9' }}
                >
                    {t('forms.category.delete.title')}
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: '#DEE5E9' }}>
                    <DialogContentText>
                        {t('forms.category.delete.message')}
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
