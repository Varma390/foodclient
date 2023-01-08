import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialStatelogin = {
    loading: '',
    log: "loggedOut",
    logindata: {},
    error: ''
}
// here we directly exported fetchlogin which exports all extra-reducers actions
 const fetchlogin = createAsyncThunk('login/fetchlogin',async (userdata) => {// takes actionname & callback
    console.log(userdata)
    const response = await axios.post(`http://localhost:3001/login`,userdata)
    console.log("res",response);
    console.log(response.data.Token)
    if(response.status === 200){
        localStorage.setItem('token',response.data.Token)
    }
    return response

}) 
// loginSlice.actions contains all actions
const loginslice = createSlice({
    name: 'login',
    initialState : initialStatelogin,
    reducers:{
        changeLoad: (state,action) => {
            state.log = 'loggedOut'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchlogin.pending, (state) =>{
            state.loading = true
            console.log('pending')
        })
        builder.addCase(fetchlogin.fulfilled, (state,action) =>{
            state.loading = 'good'
            state.logindata = action.payload.data
            state.log = "loggedIn"
            state.error = ''
            console.log(action.payload.data);
            console.log('fullfilled')
        })
        builder.addCase(fetchlogin.rejected, (state,action) =>{
            state.loading = 'fail'
            state.logindata = []
            state.error = action.error.message
            console.log('rejected')
        })
    }
})

//-----here we are exporting only state as loginData which comes from reducer in store
export const loginData = (state) => state.loginred;


//----------exporting all actions together as named export for our components to use
export const loginsliceactions = {
    ...loginslice.actions, fetchlogin
}

//------------exporting reducer as default for the store to use
export default loginslice.reducer

//--------export whole loginslice for the store to use
//export default loginslice
