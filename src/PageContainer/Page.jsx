import Navbar from "./navbar"

const Page=(a)=>{
    return(
         <>
         <Navbar/>
         <main>{a.children}</main>
        </>  
    ) 
    
}
export default Page