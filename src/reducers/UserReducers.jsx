import { createSlice } from "@reduxjs/toolkit";
import  FetchUser  from "../actions/FetchUser"; 

const list = {
    userList: [] 
}

const UserReducer = createSlice({
    name: "users",
    initialState : list,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchUser.fulfilled, (state, action) => {
            state.userList = action.payload.map(user =>({
                id: user.id,
                name: user.name, 
                email: user.email, 
                phone: user.phone, 
                address: user.address, 
                website: user.website, 
                company: user.company
            }))
        })
    } 
}
)
console.log(list)
export default UserReducer.reducer;