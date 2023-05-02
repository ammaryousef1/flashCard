import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1',  word: "ammar" , means:"yosuef" } ,
]

const meanSlice = createSlice({
    name: 'mean', 
    initialState,
    reducers: {
        wordAdded(state, action) {
            state.push(action.payload)
        },
        Nextbtn(state , action) {
            state.length()
        }
    }
})
export const selectAllMean = (state) => state.mean;
export const { wordAdded } = meanSlice.actions
export default meanSlice.reducer