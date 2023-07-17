import { useSelector } from 'react-redux';
import { RootState } from 'redux/Store';

export const useRole = (role: string) => {
    const { profile } = useSelector((state: RootState) => state);

    return profile.roles?.includes(role);
};
