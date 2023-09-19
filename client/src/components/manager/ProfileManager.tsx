import { Avatar, Box, Paper, Typography } from '@mui/material';
import { UserProps } from 'models';
import { useTranslation } from 'react-i18next';
import { UpdateProfileDialog } from './UpdateProfileDialog';
import { DashboardActions } from 'components';

export const ProfileManager = ({ user }: UserProps) => {
    const { t } = useTranslation();

    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                border: '5px solid',
                borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
            }}
        >
            <Typography
                variant="h5"
                align="center"
                sx={{ mb: 2, color: '#001D6E' }}
            >
                {t('pages.profile.infos.title')}
            </Typography>
            <Avatar
                src={user.avatar}
                alt={user.username}
                sx={{ width: 120, height: 120, mx: 'auto', my: 2 }}
            />
            <Box>
                <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                    {t('pages.profile.infos.username')} {user.username}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                    {t('pages.profile.infos.email')} {user.email}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                    {t('pages.profile.infos.phone')}{' '}
                    {user.phone
                        ? user.phone
                        : t('pages.profile.infos.notSpecified')}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                    {t('pages.profile.infos.address')}{' '}
                    {user.address
                        ? user.address
                        : t('pages.profile.infos.notSpecified')}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                    {t('pages.profile.infos.city')}{' '}
                    {user.city
                        ? user.city
                        : t('pages.profile.infos.notSpecified')}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                    {t('pages.profile.infos.zipcode')}{' '}
                    {user.zipcode
                        ? user.zipcode
                        : t('pages.profile.infos.notSpecified')}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                    {t('pages.profile.infos.country')}{' '}
                    {user.country
                        ? user.country
                        : t('pages.profile.infos.notSpecified')}
                </Typography>
                <UpdateProfileDialog user={user} />
            </Box>
            <DashboardActions user={user} />
        </Paper>
    );
};
