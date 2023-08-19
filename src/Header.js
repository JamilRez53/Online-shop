import { Button, Typography } from '@mui/material'
import React from 'react'
import Img from './img/Headphones.png'
const Header = () => {
  return (
    <div style={{backgroundColor:"#1D1E20",display:"flex"}}>
       
            <div>
                <div>
                <Typography variant='h3' sx={{color:"#FFFFFF",paddingTop:"30px",marginTop:"80px",marginLeft:"60px",fontWeight:"bold"}}>
                Headphone
            </Typography>
                </div>
           
            <div>
                <Typography variant='h4' sx={{color:"#C0C0C0",paddingTop:"30px",marginLeft:"60px"}}>
                Turtle Beach - Stealth 700 Gen 2 MAX PS
                </Typography>
            </div>
            <div>
                <Typography variant='h4' sx={{color:"#9460E9",paddingTop:"30px",marginLeft:"60px",fontWeight:"bold"}}>
                Gaming Headset
                </Typography>
            </div>
            <div style={{width:"550px"}}>
                <Typography sx={{color:"#C0C0C0",paddingTop:"30px",marginLeft:"60px"}}>
                There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected 
              humour, or randomised words which don't look even slightly 
              believable. If you are going to use a passage.
                </Typography>
            </div>
            <div style={{marginLeft:"60px",paddingBottom:"20px",marginTop:"20px"}}>
                <Button sx={{background:"#9460E9",borderRadius:"15px",color:"#FFFFFF"}}>Order Now
                <i className='fa fa-shopping-bag' style={{marginLeft:"10px"}}></i>
                </Button>
                <Button sx={{border:"1px solid white",marginLeft:"20px",borderRadius:"15px",color:"#FFFFFF"}}>Add to Cart
                <i class="fa fa-cart-plus" style={{marginLeft:"10px"}} ></i>

                </Button>
            </div>
            </div>
            <div>
                <img style={{width:"750px",height:"700px"}} src={Img} alt='.'/>
            </div>
    </div>
  )
}

export default Header