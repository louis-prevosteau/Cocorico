import { Grid, Link, Paper } from '@mui/material';
import { User } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { ADMIN_ACTIONS, SELLER_ACTIONS } from 'utils/Links';

export const DashboardActions = ({ profile }: { profile: User }) => {
    const { t } = useTranslation();

    return (
        <Paper elevation={3}>
            <Grid
                container
                spacing={5}
                justifyContent={'center'}
                alignItems={'center'}
                p={2}
                direction="row"
            >
                {profile.roles?.find((role) => role === 'admin') &&
                    ADMIN_ACTIONS.map((link) => (
                        <Grid item>
                            <Link
                                component={RouterLink}
                                key={link.path}
                                to={link.path}
                                underline="none"
                                variant="button"
                                color="darkblue"
                            >
                                {t(`pages.profile.actions.${link.name}`)}
                            </Link>
                        </Grid>
                    ))}
                {profile.roles?.find((role) => role === 'seller') &&
                    SELLER_ACTIONS.map((link) => (
                        <Link
                            component={RouterLink}
                            key={link.path}
                            to={link.path}
                            underline="none"
                            variant="button"
                            color="darkblue"
                        >
                            {t(`pages.profile.actions.${link.name}`)}
                        </Link>
                    ))}
            </Grid>
        </Paper>
    );
};
