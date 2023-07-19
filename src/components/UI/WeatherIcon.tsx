import Lottie from 'lottie-react'
import { useEffect,useState } from 'react';
// import i01d from '../../app/assets/01d.json'
// import i01n from '../../app/assets/01n.json'
// import i02d from '../../app/assets/02d.json'
// import i02n from '../../app/assets/02n.json'
// import i03d from '../../app/assets/03d.json'
// import i03n from '../../app/assets/03n.json'
// import i04dn from '../../app/assets/01d.json'
// import i01d from '../../app/assets/01d.json'
// import i01d from '../../app/assets/01d.json'
// import i01d from '../../app/assets/01d.json'

let icons={

}
export default function WeatherIcon({icon,width,height}:{icon:string,width:any,height:any}){
    const [myProp, setMyProp] = useState(null);

  useEffect(() => {
    import('../../app/assets/'+icon+'.json')
      .then(module => {
        setMyProp(module.default);
      })
      .catch(error => {
        console.error('Error loading module:', error);
      });
  }, [icon]);

    
    return <>
    <Lottie className='bg-gray-500 p-1 rounded-full'  animationData={myProp} />
    </>
}