import { TableContainer, Paper, TableCell, TableRow } from '@mui/material';
import { CommonTable } from 'components/common/CommonTable';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getPromoCodes } from 'redux/actions';
import { AppDispatch, RootState } from 'redux/Store';
import { PROMO_CODES_COLUMNS } from 'utils/Columns';

export const PromoCodesTable = () => {
    const { promoCodes } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getPromoCodes());
    }, []);
    return (
        <TableContainer
            component={Paper}
            sx={{ maxHeight: 'calc(100vh - 300px)', overflow: 'auto' }}
        >
            <CommonTable name="promoCodes" columns={PROMO_CODES_COLUMNS}>
                {promoCodes.map((promoCode) => (
                    <TableRow key={promoCode._id}>
                        <TableCell>{promoCode.code}</TableCell>
                        <TableCell>{promoCode.discountType}</TableCell>
                        <TableCell>{promoCode.discountValue}</TableCell>
                        <TableCell>
                            {moment(promoCode.expirationDate).format('L')}
                        </TableCell>
                        <TableCell>
                            {moment(promoCode.createdAt).format('L')}
                        </TableCell>
                    </TableRow>
                ))}
            </CommonTable>
        </TableContainer>
    );
};
