import axios from "axios"
import { useEffect, useState } from "react"
import Users from "./users"


const User=()=>{
    const [Data , setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>{
            setData(data);
        })
    } , [])

    return(
        <>
        {
             Data.map((user , index)=>{
              return (<>
              <a href={`/User/${<Users/>}`}>
                 <div style={{width:'200px' , height:'200px' , border:"1px solid" , padding:'5px'}} key={index}>
                    <h4> {user.name}</h4>
                    <h3>{user.email}</h3>
                    </div>
              </a>
              
              </>)
              
             
             })



        }
          
    </>  
    ) 
    
}
export default User