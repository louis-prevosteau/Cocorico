import { Grid, Link, Paper } from '@mui/material';
import { UserProps } from 'models';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { ADMIN_ACTIONS, SELLER_ACTIONS } from 'utils/Links';

export const DashboardActions = ({ user }: UserProps) => {
    const { t } = useTranslation();

    return (
        <Paper elevation={3} sx={{ p: 2, bgcolor: '#DEE5E9' }}>
            <Grid
                container
                spacing={1}
                justifyContent={'center'}
                alignItems={'center'}
                direction="row"
            >
                {user.roles?.find((role) => role === 'admin') &&
                    ADMIN_ACTIONS.map((link) => (
                        <Grid item key={link.path}>
                            <Link
                                component={RouterLink}
                                to={link.path}
                                underline="none"
                                variant="button"
                                color="darkblue"
                                sx={{ color: '#001D6E' }}
                            >
                                {t(`pages.profile.actions.${link.name}`)}
                            </Link>
                        </Grid>
                    ))}
                {user.roles?.find((role) => role === 'seller') &&
                    SELLER_ACTIONS.map((link) => (
                        <Grid item key={link.path}>
                            <Link
                                component={RouterLink}
                                to={link.path}
                                underline="none"
                                variant="button"
                                color="darkblue"
                                sx={{ color: '#001D6E' }}
                            >
                                {t(`pages.profile.actions.${link.name}`)}
                            </Link>
                        </Grid>
                    ))}
            </Grid>
        </Paper>
    );
};
