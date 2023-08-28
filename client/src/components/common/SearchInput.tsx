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
            <Search sx={{ color: '#001D6E', mr: 1, my: 0.5 }} />
            <TextField
                type="text"
                label={label}
                onChange={handleChange}
                variant="outlined"
                size="small"
                sx={{
                    backgroundColor: '#DEE5E9',
                    '& .MuiInputBase-root': {
                        color: '#001D6E',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#E6001F',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#E6001F',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#E6001F',
                    },
                }}
            />
        </Box>
    );
};
