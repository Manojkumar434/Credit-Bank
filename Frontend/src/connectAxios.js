import axios from 'axios'

const url="http://localhost:8080"

export const joining=async(object)=>{
    const t = await axios.post(`${url}/newacc`,object)
    return t;
}