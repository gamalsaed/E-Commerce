import productsSlice from "../ProductsSlice/productsSlice";
import userStorage from "../AllUsersSlice/userStorage";
import user from "../UserSlice/userSlice"
const { configureStore } = require("@reduxjs/toolkit");
// import { productSlice } from "../ProductsSlice/produ  ctsSlice";


const Store = configureStore({
    reducer:{
        Products : productsSlice,
        userStorage: userStorage,
        user: user,
    }
})
export default Store
