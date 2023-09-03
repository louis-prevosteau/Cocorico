import { Edit } from '@mui/icons-material';
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
} from '@mui/material';
import { DialogGroupButton, FormDialog } from 'components';
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

    const handleSubmit = () => {
        dispatch(updateCategory(category._id, state.category));
    };

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <Edit color="action" />
            </IconButton>
            <FormDialog
                title={t('forms.category.update')}
                open={state.open}
                handleClose={handleOpen}
                handleClick={handleSubmit}
                handleCancel={handleOpen}
                actionText={t('common.update')}
                cancelText={t('common.cancel')}
            >
                <TextField
                    type="text"
                    label={t('forms.category.fields.name')}
                    required
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
                    variant="filled"
                    sx={{ mb: 4 }}
                />
            </FormDialog>
        </div>
    );
};
