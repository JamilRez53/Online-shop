import { Typography } from '@mui/material'
import React from 'react'
import Img1 from './img/Group 62.png'
import Img2 from './img/Group 63.png'
const BestSell = () => {
  return (
    <div>
        <div style={{marginTop:"20px"}}>
            <div style={{display:"flex",marginLeft:"60px"}}>
            <Typography variant='h5' sx={{color:"#FFFFFF"}}>
                Our best Selling Product
            </Typography>
            <Typography sx={{color:"#C0C0C0",marginLeft:"950px"}}>
                View All
            </Typography>  
            </div>
            <div style={{display:"flex",marginLeft:"100px"}}>
              <img style={{width:"600px"}} src={Img1} alt='.'/>
              <img style={{width:"600px"}} src={Img2} alt='.'/>
            </div>
            
        </div>
    </div>
  )
}

export default BestSell