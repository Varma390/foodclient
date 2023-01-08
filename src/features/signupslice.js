import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { useNavigate } from "react-router-dom";


const initialStatesignup = {
    loading: true,
    userdetails: {},
    error: ''
}

export const fetchsignup = createAsyncThunk('signup/fetchlogin',async (userdata) => {// takes actionname & callback
    // console.log(userdata);
// const navigate = useNavigate();

    const response = await axios.post(`https://foodserver-tk7t.onrender.com/signup`,userdata)
    // console.log(response)
    // await axios.get(`http://localhost:3001/signup`,userdata)
    // .then(res => console.log(res))
    console.log(response.status);
    // if(response.status === 200) navigate("/login");
    return response 
    // response = action.payload = {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
    // and data contains the res.send from backend

}) 

export const signupslice = createSlice({
    name: 'signup',
    initialState: initialStatesignup,
    extraReducers: (builder) => {
        builder.addCase(fetchsignup.pending, (state) =>{
            state.loading = true
            console.log('pending')
        })
        builder.addCase(fetchsignup.fulfilled, (state,action) =>{
            state.loading = false
            state.userdetails = action.payload.data
            state.error = ''
            console.log(action);
            console.log(action.payload);
            console.log(action.payload.data);

            console.log('fullfilled')
        })
        builder.addCase(fetchsignup.rejected, (state,action) =>{
            state.loading = false
            state.userdetails = {}
            state.error = action.error.message
            console.log(action.payload.message)

            console.log('rejected')
        })
    }
})

// export default signupslice.reducer
// exporting state data
export const signData = (state) => state.signupred;
