import {
    List,
    ListItem,
    ListItemText,
    Paper,
    Rating,
    Typography,
} from '@mui/material';
import { ReviewsProps } from 'models';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { AddReviewDialog } from './AddReviewDialog';
import { getReviews } from 'redux/actions';

export const Reviews = ({ productId }: ReviewsProps) => {
    const { reviews } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        if (productId) dispatch(getReviews(productId));
    }, [productId]);
    return (
        <Paper
            elevation={3}
            sx={{
                padding: '16px',
                border: '6px solid',
                borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                borderRadius: '5px',
                backgroundColor: '#DEE5E9',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px',
            }}
        >
            <Typography
                variant="h4"
                sx={{ color: '#001D6E', marginBottom: '16px' }}
            >
                {t('pages.product.reviews', { reviews: reviews.length })}
            </Typography>
            <List sx={{ maxHeight: 300 }}>
                {reviews.length !== 0 &&
                    reviews.map((review) => (
                        <Paper
                            key={review._id}
                            elevation={2}
                            sx={{
                                marginBottom: '16px',
                                padding: '16px',
                                backgroundColor: 'white',
                            }}
                        >
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={review.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    display: 'inline',
                                                    color: '#001D6E',
                                                }}
                                            >
                                                {review.user.username}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    display: 'inline',
                                                    marginLeft: '8px',
                                                    color: '#E6001F',
                                                }}
                                            >
                                                {moment(
                                                    review.createdAt,
                                                ).format('DD/MM/YYYY HH:mm')}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ marginTop: '16px' }}
                                            >
                                                {review.content}
                                            </Typography>
                                            <Rating
                                                readOnly
                                                precision={0.1}
                                                value={review.note}
                                                sx={{
                                                    marginTop: '16px',
                                                    color: '#E6001F',
                                                }}
                                            />
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </Paper>
                    ))}
            </List>
            <AddReviewDialog productId={productId} />
        </Paper>
    );
};
