import { Grid } from '@mui/material';
import { CollectPointsTable, CreateCollectPointDialog } from 'components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Store';

export const CollectPoints = () => {

    const { profile } = useSelector((state: RootState) => state);
    const { t } = useTranslation();

    return (
        <div>
            <CollectPointsTable user={profile} />
            <Grid display={'flex'} justifyContent={'right'}>
                <CreateCollectPointDialog />
            </Grid>
        </div>
    );
};