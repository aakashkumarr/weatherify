import { PayloadAction, createSlice, current } from "@reduxjs/toolkit"


let initialState ={
    ip: null
}

export const IPSlice = createSlice({
    name:'ip',
    initialState,
    reducers:{
        setIP:(state,action:PayloadAction<any>)=>{
            state.ip=action.payload
            console.log(current(state))
        }
    }
})

export const {setIP} = IPSlice.actions
export default IPSlice.reducer