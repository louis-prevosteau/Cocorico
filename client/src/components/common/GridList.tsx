import { Grid } from '@mui/material';
import { GridListProps } from 'models';
import React from 'react';

export const GridList = ({ children }: GridListProps) => {
    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {children}
        </Grid>
    );
};
