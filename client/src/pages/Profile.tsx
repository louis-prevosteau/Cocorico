import { Box, Grid } from '@mui/material';
import { MyOrders, ProfileManager } from 'components';
import React from 'react';

export const Profile = () => {
    return (
        <Box>
            <Grid container spacing={3} direction='row'>
                <Grid item>
                    <MyOrders />
                </Grid>
                <Grid item>
                    <ProfileManager />
                </Grid>
            </Grid>
        </Box>
    );
};