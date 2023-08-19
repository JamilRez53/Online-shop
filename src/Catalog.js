import React from 'react'
import Person from './img/Person.png'
import Person1 from './img/Group 79.png'
import {Button, Typography } from '@mui/material'
import Img1 from './img/Group 74.png'
import Img2 from './img/Group 73.png'
const Catalog = () => {
  return (
    <div style={{display:"flex",marginTop:"20px"}}>
        
        <img style={{width:"500px",height:"350px",marginLeft:"60px"}} src={Person1} alt='.'/>
        <div>
            <div>
            <Typography variant='h4' sx={{color:"#FFFFFF"}}>
        New Reality
        </Typography>
            </div>
        
      
         <div style={{display:"flex"}}>
         <Typography variant='h3' sx={{color:"#FFFFFF"}}>
        New
        </Typography>
       <Typography variant='h3' sx={{color:"#9460E9",marginLeft:"20px"}}>Impressions</Typography>   
         </div>
        
     
      
        <Typography sx={{color:"#C0C0C0"}}>
        Wear VR helmet and start new battles
        </Typography> 
        <div>
        <Button sx={{background:"#9460E9",borderRadius:"15px",color:"#FFFFFF",marginTop:"50px"}}>
          Go to Catalog 
        </Button>
        </div>
        <div style={{display:"flex"}}>
            <img style={{width:"300px"}} src={Img1} alt='.'/>
            <img style={{width:"300px"}} src={Img2} alt='.'/>
        </div>
        </div>
       
       
        
     
        
    </div>
  )
}

export default Catalog