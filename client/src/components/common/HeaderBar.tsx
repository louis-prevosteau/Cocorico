import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import {
    AppBar,
    Container,
    Toolbar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Button,
    Avatar,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from 'redux/Store';
import { logout } from 'redux/actions';
import { MENU_ITEMS, USER_MENU_ITEMS } from 'utils/Links';

export const HeaderBar = () => {
    const [state, setState] = useState({
        anchorElNav: null,
        anchorElUser: null,
    });
    const navigate = useNavigate();
    const { isAuth, profile } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleOpenNavMenu = (event: any) => {
        setState({ ...state, anchorElNav: event.currentTarget });
    };

    const handleOpenUserMenu = (event: any) => {
        setState({ ...state, anchorElUser: event.currentTarget });
    };

    const handleCloseNavMenu = () => {
        setState({ ...state, anchorElNav: null });
    };

    const handleCloseUserMenu = () => {
        setState({ ...state, anchorElUser: null });
    };

    return (
        <AppBar position="static" style={{ background: '#001D6E' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none',
                            },
                        }}
                    >
                        <IconButton
                            onClick={handleOpenNavMenu}
                            aria-controls="navbar"
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="navbar"
                            anchorEl={state.anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(state.anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {
                                    xs: 'block',
                                    md: 'none',
                                },
                            }}
                        >
                            {MENU_ITEMS.map((item) => (
                                <MenuItem onClick={() => navigate(item.path)}>
                                    <Typography>{t(item.name)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                md: 'flex',
                            },
                        }}
                    >
                        {MENU_ITEMS.map((item) => (
                            <Button
                                onClick={() => navigate(item.path)}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                }}
                            >
                                {t(item.name)}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {isAuth || token ? (
                            <div>
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    aria-controls="user-menu"
                                    color="inherit"
                                >
                                    {profile.avatar ? (
                                        <Avatar
                                            alt={profile.username}
                                            src={profile.avatar}
                                        />
                                    ) : (
                                        <AccountCircle />
                                    )}
                                </IconButton>
                                <Menu
                                    id="user-menu"
                                    anchorEl={state.anchorElUser}
                                    keepMounted
                                    open={Boolean(state.anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {USER_MENU_ITEMS.map((item) => (
                                        <MenuItem
                                            onClick={() => navigate(item.path)}
                                        >
                                            {t(item.name)}
                                        </MenuItem>
                                    ))}
                                    <MenuItem onClick={handleLogout}>
                                        {t('menu.logout')}
                                    </MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <Button
                                onClick={() => navigate('/auth')}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                }}
                            >
                                {t('menu.authentication')}
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
