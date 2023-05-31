import { toast } from "react-toastify";


export const handleSuccess = (message: string) => {
    toast.success(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: false,
        closeOnClick: true
    });
};

export const handleError = (err: any) => {
    if (err.response) {
        toast.error(err.response.data.error, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            pauseOnHover: false,
            closeOnClick: true
        });
    }
};