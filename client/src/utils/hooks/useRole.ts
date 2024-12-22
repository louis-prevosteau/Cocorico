import { useSelector } from 'react-redux';
import { RootState } from 'redux/Store';

export const useRole = (roles: string[]) => {
    const { profile } = useSelector((state: RootState) => state);

    return roles.some((role) => profile.roles?.includes(role));
};
