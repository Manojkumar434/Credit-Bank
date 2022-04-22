import { useParams } from "react-router-dom"

export const Step=()=>
{
    return(
        <>
        <h1>One bye one move to technical steps....***</h1>
        </>
    )
}

export const Goal=()=>
{
    const{SmallHouse}=useParams()
    return(
        <>
        <h2>Goal is good mind set of our life moving confident{SmallHouse}....?</h2>
        </>
    )
}

export const Mingle=()=>
{
    return(
        <>
        <h3>Mingle is one of the best important in my life....!!</h3>
        </>
    )
}