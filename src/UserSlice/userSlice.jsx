import { createSlice } from "@reduxjs/toolkit";


const user = createSlice({
    name: "user",
    initialState:{
        Active: false,
        Account:{
            information:{
                FirstName: "",
                LastName: "",
                Email: "",
                Photo: "",
                Phone: ""
            },
            ordersHistory:{},
        },
    },
    reducers:{
        login: (state, action) => {
            state.Active = true
            state.Account.information.FirstName = action.payload.fName
            state.Account.information.LastName = action.payload.lName
            state.Account.information.Email = action.payload.Email
            state.Account.information.Photo = action.payload.Photo
            state.Account.information.Phone = action.payload.Phone
        },
        changePhoto: (state, action) => {
            state.Photo = action.payload
        },
        Logout : (state, action) => {
            state.Active = false
            state.Account.information = ""
            state.Account.ordersHistory = ""
        },
        saveChanges : (state, action) => {
            state.Account.information = action.payload
        }
    },
})
export const { login, changePhoto, saveChanges } = user.actions

export default user.reducer