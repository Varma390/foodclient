// const createslice = require('@reduxjs/toolkit').createSlice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const initialStatesearch = {
    loading: true,
    recipe: '',
    error: ''
}
const token = localStorage.getItem("token");
const config = {
  headers: {
    Token:token
  },
};
// createasynthunk creates action types based on promise 3 status. then we use those status as action type in reducers
const fetchrecipe = createAsyncThunk('searchrecipe/fetchrecipe',async (searchData) => {// takes actionname & callback
    console.log("searchData - ",searchData);
    const response = await axios.get(`http://localhost:3001/recipe/${searchData}`,config)
    console.log("searchresponse - ",response);
    return response
}) 
// `http://localhost:3001/user?search=${data}`
const searchslice = createSlice({
    name: 'searchrecipe', // first part of the action name
    initialState: initialStatesearch , // has to be the exact name
    // reducers: {
    //     search: (state,action) => { // second part of the action name & for reducer search is the action type
    //         state.input = action.payload
    //     }
    // },
    // extrareducers: { // for an action type to make changes in other feature too
    //     ['searchrecipe1/search1']: (state,action) => { // action type of other feature

    //     }
    // }
    // extrereducers: (builder) => {
    //     builder.addCase(searchAction1.search1, (state,action) =>{

    //     })
    // }
    reducers :{
        reset: (initialState) => initialState = initialStatesearch, // for setting our state to intial values
    },
    extraReducers:
    (builder) => {
        builder.addCase(fetchrecipe.pending, (state) =>{
            state.loading = true
            console.log('pending')

        })
        builder.addCase(fetchrecipe.fulfilled, (state,action) =>{
            state.loading = false
            state.recipe = action.payload.data.mess
            state.error = ''
            console.log("fullpalyload - ",action.payload.data);
            console.log('fullfilled')
        })
        builder.addCase(fetchrecipe.rejected, (state,action) =>{
            state.loading = false
            state.recipe = action.payload.data.mess
            state.error = action.error.message
            console.log('rejected')

        })
    }
})

// export both reducer and action seperately
// export default searchslice
// export const {searchsliceactions} = searchslice.actions // named export for actions wihtout async
// module.exports.fetchrecipe = fetchrecipe.actions // named export for actions when using async

export const recipeData = (state) => state.searchred;
export const searchsliceactions = {
    ...searchslice.actions, fetchrecipe
}
export default searchslice.reducer

// // https://blog.logrocket.com/using-redux-toolkits-createasyncthunk/