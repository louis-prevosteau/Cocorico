import { Grid, Typography } from '@mui/material';
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
        <div>
            <Typography variant="h4" align="center">
                {t('pages.collectPoints.title')}
            </Typography>
            <CollectPointsTable user={profile} />
            <Grid display={'flex'} justifyContent={'right'}>
                <CreateCollectPointDialog />
            </Grid>
        </div>
    );
};
