import { Box, Grid } from '@mui/material';
import { DashboardActions, MyOrders, ProfileManager } from 'components';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Store';

export const Profile = () => {
    const { profile } = useSelector((state: RootState) => state);

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
