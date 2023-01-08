import { configureStore } from "@reduxjs/toolkit";
import searchslicereducer from '../features/searchslice'
import addrecipeslicereducer from "../features/addrecipeslice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { signupslice } from "../features/signupslice";
//-------- importing whole slice
// import loginslice from "../features/loginslice";
// importing only the reducer
import loginslicereducer from "../features/loginslice";

// import {createLogger} from 'redux-logger'


// const logger = createLogger()
const store = configureStore({
    reducer :{ // contains all data of createSLice from all slices
        searchred : searchslicereducer,
        addrecipered : addrecipeslicereducer,
        // loginred: loginslice.reducer,
        loginred: loginslicereducer,
        signupred: signupslice.reducer
    },
    middleware: (getDefaultMiddleware) =>  // middleware goes after reducers
        getDefaultMiddleware({serializableCheck: false}),
    
})

export default store;