import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'utils/hooks';

export const ProtectedRoutes = () => {
    return useAuth() ? <Outlet /> : <Navigate to={'/auth'} />;
};
