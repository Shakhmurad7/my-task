import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const Users=()=>{
    const {id} = useParams({})
    const [Data , setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(({data})=>{
            setData(data);
        })
    } , [])

    return(<>
            <p>{`id:${Data.id}`}</p><hr/>
            <p>{`name:${Data.name}`}</p><hr/>
            <p>{`email:${Data.email}`}</p><hr/>
            <p>{`phone:${Data.phone}`}</p><hr/>
            <p>{`website:${Data.website}`}</p><hr/>
            <p>{`compan bs:${Data.company?.bs}`}</p>
            <p>{`compan name:${Data.company?.name}`}</p><hr/>
    </>) 
    
}
export default Users