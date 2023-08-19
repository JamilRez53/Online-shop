import React from 'react'
import {IconButton, Input, InputAdornment, TextField, Typography} from '@mui/material'
import Img from './img/Person.png'
//import SearchIcon from '@material-ui/icons/Search';
//import SearchBar from "material-ui-search-bar"
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
const Navbar = () => {
    
  return (
    <>
     <div style={{display:"flex",backgroundColor:"#1D1E20"}}>
        <div style={{display:"flex",marginLeft:"60px"}}>
            <div>
            <Typography sx={{color:"#FFFFFF",fontWeight:"bold"}} variant='h5'>
            My 
          </Typography>
            <Typography sx={{color:"#9460E9",fontWeight:"bold"}} variant='h5'>
            Store
            </Typography>
            </div>
            <div style={{color:"#FFFFFF",backgroundColor:"#1D1E20",marginLeft:"40px",marginTop:"20px",width:"250px",height:"30px",marginBottom:"10px",borderRadius:"15px",display:"flex"}}>
               
                <input
  style={{color:"#FFFFFF",backgroundColor:"#1D1E20",width:"250px",height:"30px",marginBottom:"10px",borderRadius:"15px"}}
           
           type='search'
           placeholder='Search your products'
            />
             <i style={{position:"absolute",marginLeft:"220px",marginTop:"5px",border:"none",cursor:"pointer",background:"none"}} className='fa fa-search icon'></i>
            </div>
        </div>
        <div style={{marginTop:"5px"}}>
      <ul style={{display:"flex"}}>
      
        <Typography style={{color:"#9460E9", marginLeft:"130px",paddingBottom:"5px",borderBottomStyle:"solid",borderBottomWidth:"1px"}}>
         Home 
        </Typography>
        
        <Typography style={{color:"#FFFFFF" , marginLeft:"100px"}}>
            Shop
        </Typography>
        <Typography style={{color:"#FFFFFF", marginLeft:"100px"}}>
            Contact
        </Typography>
        <Typography style={{color:"#FFFFFF", marginLeft:"100px"}}>
            About Us
        </Typography>
      </ul>
    </div>
    <div>
     
      <img className="sidebarFriendImg" src={Img} alt="" />
      <NotificationsIcon sx={{color:"#FFFFFF", marginLeft:"40px",marginTop:"5px",height:"30px"}}/>
      <ShoppingBagIcon sx={{color:"#FFFFFF", marginLeft:"40px",marginTop:"5px",height:"30px"}}/>
    </div>
    </div>
    
    </>
   
  )
}

export default Navbar