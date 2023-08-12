import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Paper, Tab } from '@mui/material';
import { ForgotPasswordDialog, Login, Register } from 'components';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Authentication = () => {
    const [state, setState] = useState({
        value: 'register',
    });
    const { t } = useTranslation();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setState({ ...state, value: newValue });
    };

    return (
        <Container maxWidth="sm">
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    mt: 4,
                    border: '10px solid',
                    borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                    borderRadius: 5,
                }}
            >
                <TabContext value={state.value}>
                    <Box
                        sx={{
                            borderBottom: 1,
                            borderColor: '#DEE5E9',
                        }}
                    >
                        <TabList
                            onChange={handleChange}
                        >
                            <Tab
                                label={t('pages.authentication.register.title')}
                                value="register"
                            />
                            <Tab
                                label={t('pages.authentication.login.title')}
                                value="login"
                            />
                        </TabList>
                        <TabPanel value="register">
                            <Register />
                        </TabPanel>
                        <TabPanel value="login">
                            <Login />
                        </TabPanel>
                    </Box>
                </TabContext>
                <ForgotPasswordDialog />
            </Paper>
        </Container>
    );
};
