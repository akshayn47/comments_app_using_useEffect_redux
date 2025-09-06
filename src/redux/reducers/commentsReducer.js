// import redux toolkit methods here
import {createSlice} from "@reduxjs/toolkit";
const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
const commentsSlice = createSlice({
    name:"comments",
    initialState:INITIAL_STATE,
    reducers:{
        fetchStart:(state,action)=>{
            state.isLoading = true;
        },
        fetchSuccess:(state,action)=>{
            state.isLoading = false;
            state.error = null;
            state.comments = [...action.payload];
        },
        fetchError:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

// export the comments reducer function and action creators here
export const commentsReducer = commentsSlice.reducer;
export const actions = commentsSlice.actions;
export const commentsSelector = (state)=>state.commentsReducer;

// export the comments selector function here
