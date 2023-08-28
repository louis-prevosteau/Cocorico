import { Box, Grid, Typography } from '@mui/material';
import { CollectPointsTable, CreateCollectPointDialog } from 'components';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getDepartments } from 'redux/actions';

export const CollectPoints = () => {
    const { profile } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getDepartments());
    }, []);

    return (
        <Box p={3} bgcolor="#DEE5E9">
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                style={{ color: '#001D6E' }}
            >
                {t('pages.collectPoints.title')}
            </Typography>
            <Box mb={2}>
                <CollectPointsTable user={profile} />
            </Box>
            {profile.roles?.includes('admin') && (
                <Box display="flex" justifyContent="flex-end">
                    <CreateCollectPointDialog />
                </Box>
            )}
        </Box>
    );
};
