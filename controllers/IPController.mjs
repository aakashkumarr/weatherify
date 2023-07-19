
const apiKey='at_epNjX5RAXCDoXyv71MLUA7gRsVtPA'
const getIPDetails= async (req,res)=>{
    const {ip}=req.params
    // console.log(req)
    try {
        let response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ip}`)
        let data = await response.json()
        res.json(data)
    } catch (error) {
            res.status(500).send('Server Error')
    }

}


export default {getIPDetails}