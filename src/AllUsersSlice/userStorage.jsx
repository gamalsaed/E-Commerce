import { createSlice } from "@reduxjs/toolkit";


const usersStorage = createSlice({
    name: "usersStorage",
    initialState :{
        users: [
            {
                fName: "Gamal",
                lName: "Saed",
                Email: "Gamalsaed557@gmail.com",
                password: "01068687233",
                CPassword: "01068687233",
                gender: "Male",
                Photo: "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
                Phone:"01068687233"
            }
        ]
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
            console.log(state.users[1])
        }
    }
})

export const { addUser } = usersStorage.actions

export default usersStorage.reducer

