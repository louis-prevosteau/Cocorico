import {
    Paper,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@mui/material';
import { CommonTable } from 'components';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getUsers } from 'redux/actions';
import { USERS_COLUMNS } from 'utils/Columns';

export const Users = () => {
    const { users } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getUsers());
    }, []);
    return (
        <div>
            <Typography variant="h4" align="center">
                {t('pages.users.title')}
            </Typography>
            <TableContainer
                component={Paper}
                sx={{ maxHeight: 'calc(100vh - 300px)', overflow: 'auto' }}
            >
                <CommonTable name="users" columns={USERS_COLUMNS}>
                    {users.map((user) => (
                        <TableRow key={user._id}>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                {user.address} {user.zipcode} {user.city}{' '}
                                {user.country}
                            </TableCell>
                            <TableCell>
                                {t(`roles.${user.roles?.join(', ')}`)}
                            </TableCell>
                        </TableRow>
                    ))}
                </CommonTable>
            </TableContainer>
        </div>
    );
};
