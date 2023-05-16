import React from 'react'
import './Manubar.css';
import { manubar_category } from '../../utils/Constants'
// import manubar_category from '.../utils/Constants.js'
import { Box, Typography, Stack } from '@mui/material';
import {Link} from 'react-router-dom'
;
const Manubar = () => {
  return (
    // <Stack width='300px' sx={{backgroundColor:'yellow'}} >
    <Stack  height='100vh' width='280px' direction='column'  justifyContent="space-between"  sx={{backgroundColor:'black',color:'white', padding:'10px',borderRight:'1px solid #3d3d3d'}}>
         <Box p='15px' sx={{height:'92',marginBottom:'19px'}} >
            <Typography variant='h6' >Instagram</Typography>
         </Box>
        <Box  >
            { manubar_category.map((element,index)=>{
                return (
                    <>
                      <Link  to={element.name}  className='Link' key={ Math.random()}>
                        <Box p='10px' mt='4px' mb='4px' sx={{width:'220px',display:'flex',justifyContent:'left'}} >    
                          <Box className='manuButton' width='180px' p='6px' sx={{display:'flex', alignItems:'center', justifyContent:'left',borderRadius:'30px'}}>
                          <div style={{fontSize:'small'}}> {element.icon} </div> 
                          <Typography variant='body1' sx={{pl:'20px'}}>{element.name}</Typography>
                          </Box>
                        </Box>
                      </Link>  
                    </> 
                )
                })
            }
        </Box>
        <Box p='15px'>
            <Typography variant='h6' >More</Typography>
         </Box>
    </Stack>
    // </Stack>
  )
}

export default Manubar