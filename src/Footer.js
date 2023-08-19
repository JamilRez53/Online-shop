import React from 'react'
import Img1 from './img/Group 87.png'
import Img2 from './img/Group 154.png'
import Img3 from './img/Group 153.png'
import Img4 from './img/Group 152.png'
import Img5 from './img/Group 151.png'
import Img6 from './img/Group 150.png'
import { Typography } from '@mui/material'
const Footer = () => {
  return (
    <>
    <img style={{width:"1300px",marginLeft:"90px"}} src={Img1} alt='.'/>
    <div>
      
    <div style={{marginLeft:"60px"}}>
     <img style={{marginLeft:"60px",width:"150px"}} src={Img2} alt='.'/>
     <img style={{marginLeft:"100px",width:"120px"}} src={Img3} alt='.'/>
     <img style={{marginLeft:"100px",width:"150px"}} src={Img4} alt='.'/>
     <img style={{marginLeft:"100px",width:"150px"}} src={Img5} alt='.'/>
     <img style={{marginLeft:"100px",width:"200px"}} src={Img6} alt='.'/>
    </div>
    </div>
    </>
    
  )
}

export default Footer