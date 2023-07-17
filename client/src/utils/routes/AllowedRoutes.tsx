import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRole } from 'utils/hooks';

export const AllowedRoutes = ({ role }: { role: string }) => {
    return useRole(role) ? <Outlet /> : <Navigate to={'/auth'} />;
};
