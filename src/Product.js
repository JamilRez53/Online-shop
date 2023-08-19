import {Button, Typography } from '@mui/material'
import React from 'react'
import Img1 from "./img/Group 19.png"
import Img2 from "./img/Group 20.png"
import Img3 from "./img/Group 21.png"
import Img4 from "./img/Group 25.png"
import Img5 from "./img/Group 33.png"
import Img6 from "./img/Group 41.png"
import Img7 from "./img/Group 47.png"
import Img8 from "./img/Group 48.png"
const Product = () => {
  return (
    <div>
        <div style={{marginLeft:"60px",paddingBottom:"20px",marginTop:"20px",display:"flex"}}>
            
            <Typography sx={{color:"#FFFFFF",paddingTop:"30px",fontWeight:"bold"}}>
          Our Product
          </Typography>  
          <div style={{paddingBottom:"20px",marginTop:"20px",marginLeft:"40px"}}>
          <Button sx={{background:"#9460E9",borderRadius:"15px",color:"#FFFFFF",fontSize:"16px",width:"150px"}}>Top</Button>
         <Button sx={{border:"1px solid white",marginLeft:"20px",borderRadius:"15px",color:"#FFFFFF"}}>Popular</Button>
         <Button sx={{border:"1px solid white",marginLeft:"20px",borderRadius:"15px",color:"#FFFFFF"}}>Most Sold</Button>
          </div>
          <Typography sx={{color:"#C0C0C0",marginLeft:"700px",paddingTop:"30px"}}> View All</Typography>
           
         
        </div>

        <div>
            <div style={{marginLeft:"150px"}}>
                <div>
                 <img style={{width:"300px"}} src={Img1} alt='.'/>
                 <img style={{width:"300px"}} src={Img2} alt='.'/>
                 <img style={{width:"300px"}} src={Img3} alt='.'/>
                 <img style={{width:"300px"}} src={Img4} alt='.'/>
                 </div>
                 <div>
                 <img style={{width:"300px"}} src={Img5} alt='.'/>
                 <img style={{width:"300px"}} src={Img6} alt='.'/>
                 <img style={{width:"300px"}} src={Img7} alt='.'/>
                 <img style={{width:"300px"}} src={Img8} alt='.'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product