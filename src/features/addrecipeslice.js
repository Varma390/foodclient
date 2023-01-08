import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
// import {initialStatesearch} from './searchslice'

const initialStateadd = {
    loading: true,
    recipe1: '',
    error: ''
}
const token = localStorage.getItem("token");
const config = {
  headers: {
    Token:token
  },
};

const postrecipe = createAsyncThunk('addrecipe/postrecipe', async(addData) => {
    console.log("addde data - ", addData);
    const response = await axios.post(`https://foodserver-tk7t.onrender.com/recipe/add`,addData,config)
    console.log("response -" , response);
    return response
})

const addSlice = createSlice({
    name: 'addrecipe',
    initialState : initialStateadd,
    // initialState : initialStatesearch,

    reducers :{
        reset: (initialState) => initialState = initialStateadd, 
        // reset: (initialState) => initialState = initialStatesearch, 

    },
    extraReducers: (builder) => {
        builder.addCase(postrecipe.pending, (state) =>{
            state.loading = true
            console.log('pending')
        })
        builder.addCase(postrecipe.fulfilled, (state,action) =>{
            state.loading = false
            state.recipe1 = action.payload.data.mess
            state.error = ''
            console.log("recipe - " , action.payload.data);
            console.log('fullfilled')
        })
        builder.addCase(postrecipe.rejected, (state,action) =>{
            state.loading = false
            state.recipe1 = ''
            state.error = action.error.message
            console.log('rejected')

        })
    }
})

export const addedRecipe = (state) => state.addrecipered;
export const addrecipesliceactions = {
    ...addSlice.actions, postrecipe
}
export default addSlice.reducer
