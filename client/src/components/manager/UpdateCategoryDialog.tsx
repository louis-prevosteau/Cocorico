import { Edit } from '@mui/icons-material';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
} from '@mui/material';
import { DialogGroupButton } from 'components';
import { CategoryProps } from 'models';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { updateCategory } from 'redux/actions';

export const UpdateCategoryDialog = ({ category }: CategoryProps) => {
    const [state, setState] = useState({
        open: false,
        category: category,
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateCategory(category._id, state.category));
    };

    return (
        <div>
            <IconButton onClick={handleOpen} sx={{ color: 'white' }}>
                <Edit />
            </IconButton>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.category.update')}</DialogTitle>
                <DialogContent>
                    <TextField
                        type="text"
                        label={t('forms.category.fields.name')}
                        value={state.category.name}
                        fullWidth
                        onChange={(e) =>
                            setState({
                                ...state,
                                category: {
                                    ...state.category,
                                    name: e.target.value,
                                },
                            })
                        }
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
