import React from 'react'
import {useState,useEffect} from 'react';
import { Box, Stack, Typography,Button, ListItem,Item } from "@mui/material";
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Profile = () => {
  // const [userinfo,setUserinfo] =  useState({}); {/*future */}
  // useEffect(() => {
       
  // }, [])

  return (
    <Box
    m='0 auto'
    mb='30px'
    pt="50px"
    p="15px"
    width="66%"
    sx={{
      display: "flex",
      flexDirection: "column",
      // justifyContent: "space-between",
    }}
  >
    <Box mb='30px' sx={{ display: "flex", flexDirection: "row" }}>
      <Box width='284px' height='150px' mr='30px'>
          <img
            className='cursur'
            src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
            alt="pic"
            style={{
              width: '150px',    
              height: '150px',
              borderRadius: "50%",
            }}
          ></img>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}
      >
        <Stack spacing={4} direction='row' justifyContent='center' alignItems='center'>
          <Typography variant="body1" className='cursur' >l_._devendra_._l </Typography>
          <Button variant="contained" sx={{bgcolor:'whitesmoke', color:'black'}}><Typography variant='caption' >edit profile</Typography> </Button>
          <ManageAccountsRoundedIcon className='cursur' />
        </Stack>

        <Stack direction='row' spacing={3} p='10px' mb='10px'>
            <Typography variant='body2' sx={{display:'flex',flexDirection:'row'}} >2 post</Typography>
            <Typography variant='body2' className='cursur' sx={{display:'flex',flexDirection:'row'}} >189 followers</Typography>
            <Typography variant='body2' className='cursur' sx={{display:'flex',flexDirection:'row'}} >304 following</Typography>
        </Stack>
        
        <Box>
           <Typography variant='body2'className='cursur' >Devendra Patel</Typography>
        </Box>
        {/*depends on situation*/}
      </Box>
    </Box>

     <Stack>  
        <Stack justifyContent='center' direction='row' sx={{borderTop:'1px solid #3d3d3d'}} >

          <Stack mr='72px'  className='cursur opacityDown'>
            <GridOnOutlinedIcon/>
            <Box>
              POSTS
              <CheckCircleIcon style={{color:'#05fa22'}}/>
            </Box>
          </Stack>

          <Stack mr='72px'  className='cursur opacityDown'>
            <BookmarkBorderOutlinedIcon/>
          <Box>
              SAVED
              <CheckCircleIcon style={{color:'#05fa22'}}/>
            </Box>
          </Stack>

          <Stack className='cursur opacityDown'>
            <AssignmentIndOutlinedIcon/>
            <Box>
              TAGGED
              <CheckCircleIcon style={{color:'#05fa22'}} />
            </Box>
          </Stack>
        </Stack>
        {/* need map for post */}
      </Stack>
    
  </Box> 

  )
}

export default Profile