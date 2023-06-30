import { ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DeleteCollectPointDialog, SearchInput, UpdateCollectPointDialog } from 'components';
import { User } from 'models';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getCollectPoints } from 'redux/actions';
import { COLLECT_POINTS_COLUMNS } from 'utils/Columns';

export const CollectPointsTable = ({ user }: { user: User }) => {

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
        <TableContainer component={Paper}>
            <SearchInput label={t('pages.collectPoints.searchByZipcode')} handleChange={handleChange} />
            <Table sx={{ minWidth: 700 }}>
                <TableHead>
                    <TableRow>
                        {COLLECT_POINTS_COLUMNS.map((column) => (
                            <TableCell sx={{ backgroundColor: '#001D6E', color: 'white' }} key={column}>{t(`columns.collectPoints.${column}`)}</TableCell>
                        ))}
                        {user.roles?.includes('admin') && (
                            <TableCell sx={{ backgroundColor: '#001D6E', color: 'white' }}>{t('columns.collectPoints.actions')}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {collectPoints.map((collectPoint) => (
                        <TableRow key={collectPoint._id}>
                            <TableCell>{collectPoint.address}</TableCell>
                            <TableCell>{collectPoint.city}</TableCell>
                            <TableCell>{collectPoint.zipcode}</TableCell>
                            {user.roles?.includes('admin') && (
                                <TableCell>
                                    <ButtonGroup sx={{ backgroundColor: '#001D6E' }}>
                                        <UpdateCollectPointDialog collectPoint={collectPoint} />
                                        <DeleteCollectPointDialog collectPoint={collectPoint} />
                                    </ButtonGroup>
                                </TableCell>
                            )} 
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};