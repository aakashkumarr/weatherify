import { useDispatch,useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setWeatherData } from "@/app/features/weather/weatherSlice";
export const getCurrentWeather= async(ip:any)=>{

    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(pos => {
            fetch(`https://meetversemini.up.railway.app/api/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
                .then(res => res.json())
                .then(data => {
                    
                    // dispatch(setWeatherData(data))
                    // dispatch(setdata())
                    resolve(data)
    
                }).catch(err => {
                    // console.log(err)
                    reject(err)
                })
            // console.log(state)
           
    
        },err=>{
            // console.log(err)
            if (ip) {
                let location:any = {}
                fetch(`http://localhost:3001/api/ipdetails/ip/${ip}`).then(res => res.json()).then(ipData => { 
                    location = ipData
                    console.log('fetched ip',location)
                    fetch(`https://meetversemini.up.railway.app/api/weather/city?q=${location.location.region}`).then(res=>res.json()).then(weatherData=>{
                      resolve(weatherData)
                        }).catch(error=>reject(error));
             }).catch(error => reject(error))   
            }
        }) 
    })

}