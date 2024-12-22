import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRole } from 'utils/hooks';

export const AllowedRoutes = ({ roles }: { roles: string[] }) => {
    return useRole(roles) ? <Outlet /> : <Navigate to={'/auth'} />;
};
