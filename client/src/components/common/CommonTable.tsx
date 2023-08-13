import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { CommonTableProps } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const CommonTable = ({
    name,
    columns,
    actions,
    children,
}: CommonTableProps) => {
    const { t } = useTranslation();
    return (
        <Table sx={{ minWidth: 700 }}>
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell
                            sx={{
                                backgroundColor: '#001D6E',
                                color: '#DEE5E9',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                            }}
                            key={column}
                        >
                            {t(`columns.${name}.${column}`)}
                        </TableCell>
                    ))}
                    {actions && (
                        <TableCell
                            sx={{
                                backgroundColor: '#001D6E',
                                color: '#DEE5E9',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                            }}
                        >
                            {t('common.actions')}
                        </TableCell>
                    )}
                </TableRow>
            </TableHead>
            <TableBody>{children}</TableBody>
        </Table>
    );
};
