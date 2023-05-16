import React from 'react'
import './Message.css'
import {Stack,Box, Typography,Button,Input} from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import {Link} from 'react-router-dom';
// import NewMessage from '../Common/NewMessage';
// import AddPhotoAlternateOutlinedIcon from '@mui/icons-material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ClearIcon from '@mui/icons-material/Clear';
// import UserShortProfile from '../Common/UserShortProfile';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import UserShortProfile from '../common/UserShortProfile';



const Messages = () => {
  return (
       <>
        <Stack m='auto' justifyContent='center' alignItems='center'>
            <Stack width='960px' height='90vh' flexDirection='row'  sx={{border:'1px solid #3d3d3d'}}>
                <CheatList/>
                <CheatListSend/>
            </Stack>
        </Stack>
       {/* <NewMessage/> */}
       </>
  )
}

function CheatList()
{
  return (
    // <div>dev</div>
      <Stack width='400px' sx={{borderRight:'1px solid #3d3d3d'}}>
          <Stack  sx={{borderBottom:'1px solid #3d3d3d'}} >
              <Stack pt='10px' pb='10px' ml='15px' mr='15px' justifyContent='center' alignItems='center' flexDirection='row'  >
                <Box className='cursur' width='230px' sx={{display:'flex',justifyContent:'center'}} >
                    <Typography variant='body1'>l_._devendra_._l</Typography>
                    <Box className='cursur'>
                        <ExpandMoreOutlinedIcon  />
                    </Box>
                </Box>
                    <OpenInNewOutlinedIcon />
              </Stack>
          </Stack>

              <Stack >
                   <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                    <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                    <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                    <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                    <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                    <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                   
              </Stack>
    </Stack> 
  )
}
function CheatListSend()
{
  return (
    <>
        <Stack width='100%' height='100%' alignItems="center" justifyContent='space-around'   sx={{backgroundColor:'#3d3d3d'}}>
          <Stack width='100%' p='25px' direction="column" justifyContent='center' alignItems="center" spacing={2}>
            <ArrowOutwardIcon fontSize='large'/>
            <Stack flexDirection='column' sx={{textAlign:'center',display:'flex'}}>
              <Typography variant='h4'>Your message</Typography>
              <Typography variant='body2'>Send private photos and messages to a friend or group.</Typography>
            </Stack>
            <Button variant="contained" component="label" >
                {/* <input hidden accept="image/*" type="file" />      this button open New message component */}
                <Link to="/Messages/NewMessages" > Send Message</Link>
           </Button>
          </Stack>
       </Stack>
    </>
  )
}


export default Messages;
