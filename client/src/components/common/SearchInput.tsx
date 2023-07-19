import { Search } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import { SearchInputProps } from 'models';
import React from 'react';

export const SearchInput = ({ label, handleChange }: SearchInputProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-end',
                margin: 1,
            }}
        >
            <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField type="text" label={label} onChange={handleChange} />
        </Box>
    );
};
