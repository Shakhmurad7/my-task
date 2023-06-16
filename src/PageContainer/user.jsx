import axios from "axios"
import { useEffect, useState } from "react"



const User=()=>{
    const [Data , setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>{
            setData(data);
            console.log(data);
        })
    } , [])

    return(
        <>

<div style={{display:'flex' , flexWrap:'wrap'}}>

        {
            Data.map((user , index)=>{
                return (<>
              <a href={`/User/${user.id}`}>
                 <div style={{ margin:'10px', border:"1px solid" , padding:'5px'}} key={index}>
                    <h4> {user.name}</h4>
                    <h3>{user.email}</h3>
                    </div>
              </a>
              
              </>)
              
              
            })
            
            
            
        }
        </div>

    </>  
    ) 
    
}
export default User