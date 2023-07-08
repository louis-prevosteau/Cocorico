import { Button, DialogActions } from '@mui/material';
import React from 'react';

export const DialogGroupButton = ({
    handleClick,
    handleCancel,
    actionText,
    cancelText,
}: {
    handleClick: React.MouseEventHandler;
    handleCancel: React.MouseEventHandler;
    actionText: string;
    cancelText: string;
}) => {
    return (
        <DialogActions>
            <Button onClick={handleClick} variant="contained" color="success">
                {actionText}
            </Button>
            <Button onClick={handleCancel} variant="contained" color="error">
                {cancelText}
            </Button>
        </DialogActions>
    );
};
