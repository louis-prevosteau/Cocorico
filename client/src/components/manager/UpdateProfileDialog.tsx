import { Edit } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { User } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { updateProfile } from 'redux/actions';

export const UpdateProfileDialog = ({ profile }: { profile: User }) => {

    const [state, setState] = useState(
        {
            open: false,
            profile: profile
        }
    );
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const hadleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateProfile(state.profile))
    };

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <Edit />
            </IconButton>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle></DialogTitle>
                <DialogContent>

                </DialogContent>
                <DialogActions>
                    
                </DialogActions>
            </Dialog>
        </div>
    );
};