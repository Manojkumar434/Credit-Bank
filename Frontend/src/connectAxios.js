import axios from 'axios'

const url="http://localhost:8080"

export const stepIn=async(object)=>{
    const t=await axios.post(`${url}/login`,null,
    {params:{"cid":object.user,"ps":object.pass}})
    return t;
}

export const joining=async(object)=>{
    const t = await axios.post(`${url}/newacc`,object)
    return t;
}