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
                                color: 'white',
                            }}
                            key={column}
                        >
                            {t(`columns.${name}.${column}`)}
                        </TableCell>
                    ))}
                    {actions}
                </TableRow>
            </TableHead>
            <TableBody>{children}</TableBody>
        </Table>
    );
};
