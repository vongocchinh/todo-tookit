import {createSlice} from '@reduxjs/toolkit'

var initialState=[{
    userID:'1',name:"User 1"
},{
    userID:'2',name:"User 2"
}]


var UserSlice=createSlice({
    name:"users",
    initialState,
    reducers:{

    }
});

export default UserSlice.reducer;