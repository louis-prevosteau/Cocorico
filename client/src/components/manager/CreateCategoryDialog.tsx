import { Add } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { FormDialog } from 'components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { createCategory } from 'redux/actions';

export const CreateCategoryDialog = () => {
    const [state, setState] = useState({
        open: false,
        category: {
            name: '',
        },
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = () => {
        dispatch(createCategory(state.category));
    };

    return (
        <div>
            <IconButton
                onClick={handleOpen}
                sx={{
                    backgroundColor: '#001D6E',
                    color: 'white',
                }}
            >
                <Add />
            </IconButton>
            <FormDialog
                title={t('forms.category.create')}
                open={state.open}
                handleClose={handleOpen}
                handleClick={handleSubmit}
                handleCancel={handleOpen}
                actionText={t('common.create')}
                cancelText={t('common.cancel')}
            >
                <TextField
                    type="text"
                    label={t('forms.category.fields.name')}
                    required
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
