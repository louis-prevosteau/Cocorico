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
            <Button onClick={handleClick} variant="contained" color="success">
                {actionText}
            </Button>
            <Button onClick={handleCancel} variant="contained" color="error">
                {cancelText}
            </Button>
        </DialogActions>
    );
};
