import { Add } from '@mui/icons-material';
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
} from '@mui/material';
import { DialogGroupButton } from 'components';
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

    const handleSubmit = (e: any) => {
        e.preventDefault();
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
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle sx={{
                        backgroundColor: '#001D6E',
                        color: 'white',
                        borderBottom: '1px solid #DEE5E9',
                    }}>{t('forms.category.create')}</DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2 }}>
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
                            sx={{ mb: 4 }}
                        />
                    </Box>
                </DialogContent>
                <DialogGroupButton
                    handleClick={handleSubmit}
                    handleCancel={handleOpen}
                    actionText={t('common.create')}
                    cancelText={t('common.cancel')}
                />
            </Dialog>
        </div>
    );
};
