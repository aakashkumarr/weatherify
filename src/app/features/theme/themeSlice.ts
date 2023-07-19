import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface stateType {
    theme: string | any;
    coloredIcons:boolean|any;
}

const initialState:stateType = {
    theme: 'blue',
    coloredIcons:false,
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload
        },
        setIcon:(state,action:PayloadAction)=>{
            state.coloredIcons=action.payload
        }
    }
})

export const {setTheme,setIcon} =themeSlice.actions

export default themeSlice.reducer