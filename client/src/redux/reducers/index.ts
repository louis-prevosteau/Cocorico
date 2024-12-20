import { combineReducers } from '@reduxjs/toolkit';
import { AuthenticationReducer } from './AuthenticationReducer';
import { CartReducer } from './CartReducer';
import { CategoriesReducer } from './CategoryReducer';
import { CollectPointsReducer } from './CollectPointReducer';
import { OrderReducer, OrdersReducer } from './OrderReducer';
import { ProductsReducer, ProductReducer } from './ProductReducer';
import { ShopsReducer, ShopReducer } from './ShopReducer';
import { UsersReducer, ProfileReducer } from './UserReducer';
import { CitiesReducer } from './CityReducer';
import { DepartmentsReducer } from './DepartmentReducer';
import { ReviewsReducer } from './ReviewReducer';
import { PromoCodeReducer, PromoCodesReudcer } from './PromoCodeReducer';

export default combineReducers({
    isAuth: AuthenticationReducer,
    cart: CartReducer,
    categories: CategoriesReducer,
    cities: CitiesReducer,
    collectPoints: CollectPointsReducer,
    departments: DepartmentsReducer,
    orders: OrdersReducer,
    order: OrderReducer,
    products: ProductsReducer,
    product: ProductReducer,
    reviews: ReviewsReducer,
    shops: ShopsReducer,
    shop: ShopReducer,
    users: UsersReducer,
    profile: ProfileReducer,
    promoCodes: PromoCodesReudcer,
    promoCode: PromoCodeReducer,
});
