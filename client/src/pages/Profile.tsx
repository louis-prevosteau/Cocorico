import { Container, Grid } from '@mui/material';
import { MyOrders, ProfileManager } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getProfile } from 'redux/actions';

export const Profile = () => {
    const { profile } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <Container maxWidth="md">
            <Grid container spacing={3} alignItems="stretch" sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                    <ProfileManager user={profile} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <MyOrders />
                </Grid>
            </Grid>
        </Container>
    );
};
