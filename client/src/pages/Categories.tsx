import { ButtonGroup, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { DeleteCategoryDialog, UpdateCategoryDialog } from 'components';
import { CreateCategoryDialog } from 'components/manager/CreateCategoryDialog';
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
            <Typography variant='h4' align='center'>{t('pages.categories.title')}</Typography>
            <List>
                {categories.map((category) => (
                    <ListItem
                        key={category._id}
                        secondaryAction={
                            <ButtonGroup sx={{ backgroundColor: '#001D6E' }}>
                                <UpdateCategoryDialog category={category} />
                                <DeleteCategoryDialog category={category} />
                            </ButtonGroup>
                        }
                    >
                        <ListItemText primary={category.name} />
                    </ListItem>
                ))}
            </List>
            <Grid display={'flex'} justifyContent={'right'}>
                <CreateCategoryDialog />
            </Grid>
        </div>
    );
};