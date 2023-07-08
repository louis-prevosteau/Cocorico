import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { Login, Register } from 'components';
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
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={state.value}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                    }}
                >
                    <TabList onChange={handleChange}>
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
        </Box>
    );
};
