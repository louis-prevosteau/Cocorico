import { Edit } from '@mui/icons-material';
import { FormControl, IconButton, InputLabel, TextField } from '@mui/material';
import { UserProps } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { updateProfile } from 'redux/actions';
// @ts-ignore
import FileBase from 'react-file-base64';
import { FormDialog } from 'components';

export const UpdateProfileDialog = ({ user }: UserProps) => {
    const [state, setState] = useState({
        open: false,
        profile: user,
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = () => {
        dispatch(updateProfile(state.profile));
    };

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <Edit />
            </IconButton>
            <FormDialog
                title={t('forms.profile.update')}
                open={state.open}
                handleClose={handleOpen}
                handleClick={handleSubmit}
                handleCancel={handleOpen}
                actionText={t('common.update')}
                cancelText={t('common.cancel')}
            >
                <TextField
                    type="text"
                    label={t('forms.profile.fields.username')}
                    value={state.profile.username}
                    fullWidth
                    onChange={(e) =>
                        setState({
                            ...state,
                            profile: {
                                ...state.profile,
                                username: e.target.value,
                            },
                        })
                    }
                    variant="filled"
                    sx={{ mb: 2 }}
                />
                <TextField
                    type="email"
                    label={t('forms.profile.fields.email')}
                    value={state.profile.email}
                    fullWidth
                    onChange={(e) =>
                        setState({
                            ...state,
                            profile: {
                                ...state.profile,
                                email: e.target.value,
                            },
                        })
                    }
                    variant="filled"
                    sx={{ mb: 2 }}
                />
                <TextField
                    type="phone"
                    label={t('forms.profile.fields.phone')}
                    value={state.profile.phone}
                    fullWidth
                    onChange={(e) =>
                        setState({
                            ...state,
                            profile: {
                                ...state.profile,
                                phone: e.target.value,
                            },
                        })
                    }
                    variant="filled"
                    sx={{ mb: 2 }}
                />
                <InputLabel sx={{ ml: 1 }}>
                    {t('forms.profile.fields.avatar')}
                </InputLabel>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }: { base64: any }) =>
                            setState({
                                ...state,
                                profile: {
                                    ...state.profile,
                                    avatar: base64,
                                },
                            })
                        }
                    />
                </FormControl>
                <TextField
                    type="text"
                    label={t('forms.profile.fields.address')}
                    value={state.profile.address}
                    fullWidth
                    onChange={(e) =>
                        setState({
                            ...state,
                            profile: {
                                ...state.profile,
                                address: e.target.value,
                            },
                        })
                    }
                    variant="filled"
                    sx={{ mb: 2 }}
                />
                <TextField
                    type="text"
                    label={t('forms.profile.fields.city')}
                    value={state.profile.city}
                    fullWidth
                    onChange={(e) =>
                        setState({
                            ...state,
                            profile: {
                                ...state.profile,
                                city: e.target.value,
                            },
                        })
                    }
                    variant="filled"
                    sx={{ mb: 2 }}
                />
                <TextField
                    type="text"
                    label={t('forms.profile.fields.zipcode')}
                    value={state.profile.zipcode}
                    fullWidth
                    onChange={(e) =>
                        setState({
                            ...state,
                            profile: {
                                ...state.profile,
                                zipcode: e.target.value,
                            },
                        })
                    }
                    variant="filled"
                    sx={{ mb: 2 }}
                />
                <TextField
                    type="text"
                    label={t('forms.profile.fields.country')}
                    value={state.profile.country}
                    fullWidth
                    onChange={(e) =>
                        setState({
                            ...state,
                            profile: {
                                ...state.profile,
                                country: e.target.value,
                            },
                        })
                    }
                    variant="filled"
                    sx={{ mb: 2 }}
                />
            </FormDialog>
        </div>
    );
};
