import { Box, Grid } from '@mui/material';
import { DashboardActions, MyOrders, ProfileManager } from 'components';
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
        <Box>
            <Grid
                container
                spacing={3}
                direction="row"
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid item>
                    <MyOrders />
                </Grid>
                <Grid item>
                    <ProfileManager user={profile} />
                </Grid>
                <Grid item>
                    <DashboardActions user={profile} />
                </Grid>
            </Grid>
        </Box>
    );
};
