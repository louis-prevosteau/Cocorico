import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                backgroundColor: '#E6001F',
                pt: 1,
                pb: 2,
                bottom: 0,
                width: '100%',
                position: 'relative',
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
                <Typography
                    variant="body2"
                    align="center"
                    color={'white'}
                    mt={1}
                >
                    <a
                        href="/policy"
                        style={{ color: 'white', textDecoration: 'underline' }}
                    >
                        {t('footer.cguLink')}
                    </a>{' '}
                    | {t('footer.contactEmail')} : support@cocorico.fr |{' '}
                    {t('footer.contactPhone')} : 06 66 66 66 66
                </Typography>
            </Container>
        </Box>
    );
};
