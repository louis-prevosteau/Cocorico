import { RateReview } from '@mui/icons-material';
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    Rating,
    TextField,
} from '@mui/material';
import { DialogGroupButton } from 'components';
import { ReviewsProps } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { createReview } from 'redux/actions';

export const AddReviewDialog = ({ productId }: ReviewsProps) => {
    const [state, setState] = useState({
        open: false,
        review: {
            title: '',
            content: '',
            note: 0
        },
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = () => {
        dispatch(createReview({ ...state.review, product: productId }));
    };

    return (
        <div>
            <Button onClick={handleOpen} startIcon={<RateReview />} sx={{
                    color: '#DEE5E9',
                    backgroundColor: '#001D6E',
                    '&:hover': { backgroundColor: '#001D6E' },
                }}>
                {t('pages.product.addReview')}
            </Button>
            <Dialog open={state.open} onClose={handleOpen} maxWidth="xs">
                <DialogTitle
                    sx={{
                        backgroundColor: '#001D6E',
                        color: 'white',
                        borderBottom: '1px solid #DEE5E9',
                    }}
                >
                    {t('forms.review.create')}
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
                            label={t('forms.review.fields.title')}
                            required
                            fullWidth
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    review: {
                                        ...state.review,
                                        title: e.target.value,
                                    },
                                })
                            }
                            variant="filled"
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="text"
                            label={t('forms.review.fields.content')}
                            required
                            multiline
                            fullWidth
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    review: {
                                        ...state.review,
                                        content: e.target.value,
                                    },
                                })
                            }
                            variant="filled"
                            sx={{ mb: 4 }}
                        />
                        <InputLabel required sx={{ ml: 1 }}>
                            {t('forms.review.fields.note')}
                        </InputLabel>
                        <FormControl fullWidth sx={{ mb: 4 }}>
                            <Rating
                                onChange={(e, value) =>
                                    setState({
                                        ...state,
                                        review: {
                                            ...state.review,
                                            note: value as number,
                                        },
                                    })
                                }
                            />
                        </FormControl>
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
