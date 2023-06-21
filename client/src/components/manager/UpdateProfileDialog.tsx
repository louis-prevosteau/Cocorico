import { Edit } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, TextField } from '@mui/material';
import { User } from 'models';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { updateProfile } from 'redux/actions';
// @ts-ignore
import FileBase from 'react-file-base64';

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

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateProfile(state.profile))
    };

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <Edit />
            </IconButton>
            <Dialog open={state.open} onClose={handleOpen}>
                <DialogTitle>{t('forms.updateProfile.title')}</DialogTitle>
                <DialogContent>
                    <TextField
                        type='text'
                        label={t('forms.updateProfile.fields.username')}
                        value={state.profile.username}
                        fullWidth
                        onChange={(e) => setState({ ...state, profile: { ...state.profile, username: e.target.value }})}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type='email'
                        label={t('forms.updateProfile.fields.email')}
                        value={state.profile.email}
                        fullWidth
                        onChange={(e) => setState({ ...state, profile: { ...state.profile, email: e.target.value }})}
                        sx={{ mb: 4 }}
                    />
                    <FormControl fullWidth sx={{ mb: 4 }}>
                        <InputLabel>{t('forms.updateProfile.fields.avatar')}</InputLabel>
                        <FileBase
                            type='file'
                            multiple={false}
                            onDone={({ base64 }: { base64: any }) => setState({ ...state, profile: { ...state.profile, avatar: base64 } })}
                        />
                    </FormControl>
                    <TextField
                        type='text'
                        label={t('forms.updateProfile.fields.address')}
                        value={state.profile.address}
                        fullWidth
                        onChange={(e) => setState({ ...state, profile: { ...state.profile, address: e.target.value }})}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type='text'
                        label={t('forms.updateProfile.fields.city')}
                        value={state.profile.city}
                        fullWidth
                        onChange={(e) => setState({ ...state, profile: { ...state.profile, city: e.target.value }})}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type='text'
                        label={t('forms.updateProfile.fields.zipcode')}
                        value={state.profile.zipcode}
                        fullWidth
                        onChange={(e) => setState({ ...state, profile: { ...state.profile, zipcode: e.target.value }})}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type='text'
                        label={t('forms.updateProfile.fields.country')}
                        value={state.profile.country}
                        fullWidth
                        onChange={(e) => setState({ ...state, profile: { ...state.profile, country: e.target.value }})}
                        sx={{ mb: 4 }}
                    />                
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>{t('common.update')}</Button>
                    <Button onClick={handleOpen}>{t('common.cancel')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};