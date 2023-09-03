import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { FormDialogProps } from 'models';
import React from 'react';
import { DialogGroupButton } from './DialogGroupButton';

export const FormDialog = ({
    title,
    open,
    handleClose,
    children,
    handleClick,
    handleCancel,
    actionText,
    cancelText,
}: FormDialogProps) => {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="xs">
            <DialogTitle
                sx={{
                    backgroundColor: '#001D6E',
                    color: 'white',
                    borderBottom: '1px solid #DEE5E9',
                }}
            >
                {title}
            </DialogTitle>
            <DialogContent
                sx={{ backgroundColor: '#DEE5E9', color: '#001D6E' }}
            >
                <Box
                    sx={{
                        pt: 2,
                        border: '5px solid',
                        borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                        borderRadius: 5,
                    }}
                >
                    {children}
                </Box>
            </DialogContent>
            <DialogGroupButton
                handleClick={handleClick}
                handleCancel={handleCancel}
                actionText={actionText}
                cancelText={cancelText}
            />
        </Dialog>
    );
};
