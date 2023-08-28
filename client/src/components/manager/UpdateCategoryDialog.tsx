import { Edit } from '@mui/icons-material';
import {
    Box,
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

    const handleSubmit = () => {
        dispatch(updateCategory(category._id, state.category));
    };

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <Edit color="action" />
            </IconButton>
            <Dialog open={state.open} onClose={handleOpen} maxWidth="xs">
                <DialogTitle
                    sx={{
                        backgroundColor: '#001D6E',
                        color: 'white',
                        borderBottom: '1px solid #DEE5E9',
                    }}
                >
                    {t('forms.category.update')}
                </DialogTitle>
                <DialogContent
                    sx={{ backgroundColor: '#DEE5E9', color: '#001D6E' }}
                >
                    <Box
                        sx={{
                            pt: 2,
                            border: '5px solid',
                            borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                            borderRadius: 5,
                        }}
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
                    </Box>
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
