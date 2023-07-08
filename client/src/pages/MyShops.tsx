import { CreateShopDialog } from 'components';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { getCategories, getDepartments } from 'redux/actions';

export const MyShops = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getDepartments());
        dispatch(getCategories());
    }, []);

    return (
        <div>
            <CreateShopDialog />
        </div>
    );
};
