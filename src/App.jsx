import { Route, Routes } from "react-router"
import User from "./PageContainer/user"
import Page from "./PageContainer/Page"
import Users from "./PageContainer/users"

function App() {
  return (
    <>
    <div className="Container" style={{padding:'30px 50px'}}>
    <Page/>
     <Routes>
        <Route path="User" element={<User/>} />
        <Route path="User/:id" element={<Users/>}/>
     </Routes>
    </div>
    </>
  )
}

export default App
