import { Delete } from '@mui/icons-material';
import {
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Rating,
    Typography,
} from '@mui/material';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { deleteReview, getMyReviews } from 'redux/actions';

export const MyReviews = () => {
    const { reviews } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getMyReviews());
    }, []);

    const handleDeleteReview = (id: string) => {
        dispatch(deleteReview(id));
    };

    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                border: '5px solid',
                borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
            }}
        >
            <Typography
                variant="h5"
                align="center"
                sx={{ mb: 2, color: '#001D6E' }}
            >
                {t('pages.profile.myReviews.title')}
            </Typography>
            <List sx={{ maxHeight: 482, overflow: 'auto' }}>
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
                            <ListItem
                                alignItems="flex-start"
                                secondaryAction={
                                    <IconButton
                                        onClick={() =>
                                            handleDeleteReview(review._id)
                                        }
                                    >
                                        <Delete
                                            sx={{
                                                color: '#001D6E',
                                            }}
                                        />
                                    </IconButton>
                                }
                            >
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
                                                ).fromNow()}
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
        </Paper>
    );
};
