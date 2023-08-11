import { Button, DialogActions } from '@mui/material';
import { DialogButtonGroupProps } from 'models';
import React from 'react';

export const DialogGroupButton = ({
    handleClick,
    handleCancel,
    actionText,
    cancelText,
}: DialogButtonGroupProps) => {
    return (
        <DialogActions>
            <Button
                onClick={handleClick}
                variant="contained"
                sx={{
                    backgroundColor: '#001D6E',
                    '&:hover': { backgroundColor: '#001D6E' },
                }}
            >
                {actionText}
            </Button>
            <Button
                onClick={handleCancel}
                variant="contained"
                sx={{
                    backgroundColor: '#E6001F',
                    '&:hover': { backgroundColor: '#E6001F' },
                }}
            >
                {cancelText}
            </Button>
        </DialogActions>
    );
};
