import { Container } from '@mui/material';
import {
    Authentication,
    Cart,
    Categories,
    CollectPoints,
    Homepage,
    MyShops,
    NotFound,
    Order,
    Orders,
    Product,
    Profile,
    Shop,
    Shops,
    Users,
} from 'pages';
import './i18n';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, HeaderBar } from 'components';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { getProfile } from 'redux/actions';
import { AllowedRoutes, ProtectedRoutes } from 'utils/routes';

const App = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProfile());
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
                        <Route element={<ProtectedRoutes />}>
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/profile" element={<Profile />} />
                        </Route>
                        <Route path="/orders/:id" element={<Order />} />
                        <Route element={<AllowedRoutes role="seller" />}>
                            <Route path="/my-shops" element={<MyShops />} />
                        </Route>
                        <Route element={<AllowedRoutes role="admin" />}>
                            <Route
                                path="/admin/categories"
                                element={<Categories />}
                            />
                            <Route path="/admin/users" element={<Users />} />
                            <Route path="/admin/orders" element={<Orders />} />
                        </Route>
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
