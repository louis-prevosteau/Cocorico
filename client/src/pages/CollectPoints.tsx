import { Grid, Typography } from '@mui/material';
import { CollectPointsTable, CreateCollectPointDialog } from 'components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Store';

export const CollectPoints = () => {

    const { profile } = useSelector((state: RootState) => state);
    const { t } = useTranslation();

    return (
        <div>
            <Typography variant='h4' align='center'>{t('pages.collectPoints.title')}</Typography>
            <CollectPointsTable user={profile} />
            <Grid display={'flex'} justifyContent={'right'}>
                <CreateCollectPointDialog />
            </Grid>
        </div>
    );
};