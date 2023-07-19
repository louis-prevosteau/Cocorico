import { Avatar, Box, Paper, Typography } from '@mui/material';
import { UserProps } from 'models';
import { useTranslation } from 'react-i18next';
import { UpdateProfileDialog } from './UpdateProfileDialog';

export const ProfileManager = ({ user }: UserProps) => {
    const { t } = useTranslation();

    return (
        <Paper elevation={3}>
            <Typography variant="h5" align="center">
                {t('pages.profile.infos.title')}
            </Typography>
            <Avatar
                src={user.avatar}
                alt={user.username}
                sx={{ alignItems: 'center', m: 2 }}
            />
            <Box m={2}>
                <Typography variant="h5">
                    {t('pages.profile.infos.username')} {user.username}
                </Typography>
                <Typography variant="h5">
                    {t('pages.profile.infos.email')} {user.email}
                </Typography>
                <Typography variant="h5">
                    {t('pages.profile.infos.address')}{' '}
                    {user.address
                        ? user.address
                        : t('pages.profile.infos.notSpecified')}
                </Typography>
                <Typography variant="h5">
                    {t('pages.profile.infos.city')}{' '}
                    {user.city
                        ? user.city
                        : t('pages.profile.infos.notSpecified')}
                </Typography>
                <Typography variant="h5">
                    {t('pages.profile.infos.zipcode')}{' '}
                    {user.zipcode
                        ? user.zipcode
                        : t('pages.profile.infos.notSpecified')}
                </Typography>
                <Typography variant="h5">
                    {t('pages.profile.infos.country')}{' '}
                    {user.country
                        ? user.country
                        : t('pages.profile.infos.notSpecified')}
                </Typography>
                <UpdateProfileDialog user={user} />
            </Box>
        </Paper>
    );
};
