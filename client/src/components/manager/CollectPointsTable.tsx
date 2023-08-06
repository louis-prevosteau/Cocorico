import {
    ButtonGroup,
    Paper,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';
import {
    CommonTable,
    DeleteCollectPointDialog,
    SearchInput,
    UpdateCollectPointDialog,
} from 'components';
import { UserProps } from 'models';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getCollectPoints } from 'redux/actions';
import { COLLECT_POINTS_COLUMNS } from 'utils/Columns';

export const CollectPointsTable = ({ user }: UserProps) => {
    const { collectPoints } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getCollectPoints());
    }, []);

    const handleChange = (e: any) => {
        dispatch(getCollectPoints(e.target.value));
    };

    return (
        <TableContainer
            component={Paper}
            sx={{ maxHeight: 'calc(100vh - 300px)', overflow: 'auto' }}
        >
            <SearchInput
                label={t('pages.collectPoints.searchByZipcode')}
                handleChange={handleChange}
            />
            <CommonTable
                name="collectPoints"
                columns={COLLECT_POINTS_COLUMNS}
                actions={
                    user.roles?.includes('admin') && (
                        <TableCell
                            sx={{
                                backgroundColor: '#001D6E',
                                color: 'white',
                            }}
                        >
                            {t('columns.collectPoints.actions')}
                        </TableCell>
                    )
                }
            >
                {collectPoints.map((collectPoint) => (
                    <TableRow key={collectPoint._id}>
                        <TableCell>{collectPoint.address}</TableCell>
                        <TableCell>{collectPoint.city}</TableCell>
                        <TableCell>{collectPoint.zipcode}</TableCell>
                        {user.roles?.includes('admin') && (
                            <TableCell>
                                <ButtonGroup
                                    sx={{
                                        backgroundColor: '#001D6E',
                                    }}
                                >
                                    <UpdateCollectPointDialog
                                        collectPoint={collectPoint}
                                    />
                                    <DeleteCollectPointDialog
                                        collectPoint={collectPoint}
                                    />
                                </ButtonGroup>
                            </TableCell>
                        )}
                    </TableRow>
                ))}
            </CommonTable>
        </TableContainer>
    );
};
