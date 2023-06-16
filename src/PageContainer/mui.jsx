import { Badge } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const Mui =()=>{
    return(    
<>
        <Badge color="secondary" badgeContent={0}>
            <DeleteForeverIcon/>
        </Badge>
        <Badge color="secondary" badgeContent={0} showZero>
        <DeleteForeverIcon/>
        </Badge>
</>
    )
}

export default Mui