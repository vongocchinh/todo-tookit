import {configureStore} from '@reduxjs/toolkit';


import PostSlice from './Post/PostReducer';
import UserSlice from './User/UseSlice';
export default configureStore({
    reducer:{
        Post:PostSlice,
        Users:UserSlice
    }
})