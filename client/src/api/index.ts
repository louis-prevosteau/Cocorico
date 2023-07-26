import axios from 'axios';
import {
    CartItem,
    CreateCategory,
    CreateCollectPoint,
    CreateProduct,
    CreateReview,
    CreateShop,
    Login,
    Order,
    Register,
    User,
} from 'models';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((req) => {
    if (localStorage.getItem('token'))
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return req;
});

export const register = (data: Register) => api.post('auth/register', data);
export const login = (data: Login) => api.post('auth/login', data);
export const getCart = () => api.get('carts');
export const createCart = () => api.post('carts');
export const addProductToCart = (data: CartItem) =>
    api.patch('add-product', data);
export const deleteProductFromCart = (item: string) =>
    api.patch(`del-product/${item}`);
export const clearCart = () => api.patch('clear');
export const getCategories = () => api.get('categories');
export const createCategory = (data: CreateCategory) =>
    api.post('categories', data);
export const upadateCategory = (id: string, data: CreateCategory) =>
    api.patch(`categories/${id}`, data);
export const deleteCategory = (id: string) => api.delete(`categories/${id}`);
export const getCollectPoints = (zipcode = null) =>
    api.get(zipcode ? `collect-points?zipcode=${zipcode}` : 'collect-points');
export const createCollectPoint = (data: CreateCollectPoint) =>
    api.post('collect-points', data);
export const upadateCollectPoint = (id: string, data: CreateCollectPoint) =>
    api.patch(`collect-points/${id}`, data);
export const deleteCollectPoint = (id: string) =>
    api.delete(`collect-points/${id}`);
export const getOrders = (search = null) =>
    api.get(search ? `orders?search=${search}` : 'orders');
export const getOrder = (id: string) => api.get(`orders/${id}`);
export const getMyOrders = () => api.get('orders/me');
export const createOrder = (data: Order) => api.post('orders', data);
export const updateStatus = (id: string, data: Order) =>
    api.put(`orders/${id}`, data);
export const deleteOrder = (id: string) => api.delete(`orders/${id}`);
export const getProducts = (shop: string) => api.get(`products?shop=${shop}`);
export const getProduct = (id: string) => api.get(`products/${id}`);
export const createProduct = (data: CreateProduct) =>
    api.post('products', data);
export const updateProduct = (id: string, data: CreateProduct) =>
    api.patch(`products/${id}`, data);
export const deleteProduct = (id: string) => api.delete(`products/${id}`);
export const getReviews = (product: string) => api.get(`reviews?product=${product}`);
export const createReview = (data: CreateReview) => api.post('reviews', data);
export const deleteReview = (id: string) => api.delete(`reviews/${id}`); 
export const getShops = (category = null) =>
    api.get(category ? `shops?category=${category}` : 'shops');
export const getMyShops = () => api.get('shops/my-shops');
export const getShop = (id: string) => api.get(`shops/${id}`);
export const createShop = (data: CreateShop) => api.post('shops', data);
export const updateShop = (id: string, data: CreateShop) =>
    api.patch(`shops/${id}`, data);
export const deleteShop = (id: string) => api.delete(`shops/${id}`);
export const getUsers = () => api.get('users');
export const getProfile = () => api.get('users/profile');
export const updateProfile = (data: User) => api.patch('users/profile', data);

const apiGeo = axios.create({
    baseURL: process.env.REACT_APP_API_GEO_URL,
});

export const getDepartments = () => apiGeo.get('departements');
export const getCitiesByZipcode = (zipcode: string) =>
    apiGeo.get(`communes?codePostal=${zipcode}`);
