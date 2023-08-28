import {
    ButtonGroup,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import {
    CreateCategoryDialog,
    DeleteCategoryDialog,
    UpdateCategoryDialog,
} from 'components';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getCategories } from 'redux/actions';

export const Categories = () => {
    const { categories } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <div>
            <Typography
                variant="h4"
                align="center"
                sx={{ color: '#001D6E', my: 3 }}
            >
                {t('pages.categories.title')}
            </Typography>
            <List sx={{ maxHeight: 650, overflow: 'auto' }}>
                {categories.map((category) => (
                    <ListItem
                        key={category._id}
                        secondaryAction={
                            <ButtonGroup>
                                <UpdateCategoryDialog category={category} />
                                <DeleteCategoryDialog category={category} />
                            </ButtonGroup>
                        }
                        sx={{
                            mb: 1,
                            border: '5px solid',
                            borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                            borderRadius: 2,
                        }}
                    >
                        <ListItemText
                            primary={category.name}
                            primaryTypographyProps={{
                                color: '#001D6E',
                                fontWeight: 'bold',
                            }}
                        />
                    </ListItem>
                ))}
            </List>
            <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
                <CreateCategoryDialog />
            </Grid>
        </div>
    );
};
