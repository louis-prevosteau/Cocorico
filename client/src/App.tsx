import { Container } from '@mui/material';
import {
    AddProduct,
    Authentication,
    Cart,
    Categories,
    CollectPoints,
    Confidential,
    Homepage,
    Inventory,
    MakeOrder,
    NotFound,
    Order,
    Orders,
    Policy,
    Product,
    Profile,
    PromoCodes,
    ResetPassword,
    Shop,
    Shops,
    Users,
} from 'pages';
import './i18n';
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, HeaderBar } from 'components';
import { AllowedRoutes, ProtectedRoutes } from 'utils/routes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { getCart, getProfile } from 'redux/actions';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const App = () => {
    const isInitialRender = useRef(true);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        if (localStorage.getItem('token')) {
            dispatch(getProfile());
            dispatch(getCart());
        }
    }, []);
    return (
        <div>
            <BrowserRouter>
                <HeaderBar />
                <Container maxWidth="md">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/shops" element={<Shops />} />
                        <Route path="/shops/:id" element={<Shop />} />
                        <Route path="/products/:id" element={<Product />} />
                        <Route
                            path="/collect-points"
                            element={<CollectPoints />}
                        />
                        <Route path="/auth" element={<Authentication />} />
                        <Route
                            path="/reset-password/:token"
                            element={<ResetPassword />}
                        />
                        <Route element={<ProtectedRoutes />}>
                            <Route path="/cart" element={<Cart />} />
                            <Route
                                path="/make-order/:cart"
                                element={<MakeOrder />}
                            />
                            <Route path="/profile" element={<Profile />} />
                        </Route>
                        <Route path="/orders/:id" element={<Order />} />
                        <Route element={<AllowedRoutes roles={['seller']} />}>
                            <Route path="/inventory" element={<Inventory />} />
                            <Route
                                path="/shops/add-product"
                                element={<AddProduct />}
                            />
                        </Route>
                        <Route
                            path="/admin"
                            element={<AllowedRoutes roles={['admin']} />}
                        >
                            <Route path="categories" element={<Categories />} />
                            <Route path="users" element={<Users />} />
                            <Route path="orders" element={<Orders />} />
                            <Route
                                path="promo-codes"
                                element={<PromoCodes />}
                            />
                        </Route>
                        <Route path="/policy" element={<Policy />} />
                        <Route
                            path="/confidential"
                            element={<Confidential />}
                        />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </Container>
                <Footer />
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={false}
                rtl={false}
            />
        </div>
    );
};

export default App;
