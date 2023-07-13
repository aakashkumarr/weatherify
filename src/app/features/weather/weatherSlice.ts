import {createSlice,current} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
// import { data } from 'autoprefixer'

export interface WeatherState {
    weatherData:any
}
let initialState:WeatherState={
    weatherData:null
}

export const weatherSclice=createSlice({
    name:'weather',
    initialState,
    reducers:{
        setWeatherData: (state, action:PayloadAction<any>)=>{
state.weatherData=action.payload
        },
        
    }
})
export const {setWeatherData} =weatherSclice.actions
export default weatherSclice.reducer