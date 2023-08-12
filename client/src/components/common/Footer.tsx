import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                backgroundColor: '#E6001F',
                pt: 1,
                bottom: 0,
                width: '100%',
                position: 'fixed',
            }}
            component={'footer'}
        >
            <Container maxWidth="md">
                <Typography
                    variant="body2"
                    align="center"
                    color={'white'}
                    justifyContent={'center'}
                >
                    {t('footer.credit', {
                        year: new Date().getFullYear(),
                    })}
                </Typography>
            </Container>
        </Box>
    );
};
