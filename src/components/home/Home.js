import React, {useEffect, useState} from 'react'
import { Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import fetch from '../../utils/factchAPI'
import UserShortProfile from '../common/UserShortProfile';
import { profiles } from '../../utils/Constants';
import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

//////////////////////////////////////////////////////
//head- need to get profile pic and username , and currrent story
//body- need current post of following, like and comment
//left- profile,name ,username
//pathway- profile page,self or related people, login page



const Home = () => {
    


  return (
     <Stack width='100%' flexDirection='row' justifyContent='center'>
        <Stack mr='50px' justifyContent='center' alignItems='center' sx={{width:'630px',heigth:'100vh',color:'white'}}>
                <Head/>
                <Body/>
        </Stack>
                <LeftHead/>
     </Stack>
    )
}
function Head()
{
    return (
        <>
          <Carousel responsive={responsive}>
             <Box sx={{height:'117px' ,marginTop:'15px',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:'10px',paddingBottom:'10px',visibility:'hedden' }}>
                {
                    profiles.map((element) => {
                      return (  
                          <>  
                            <Box key={element.id} sx={{width:'px',height:'px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:'10px',marginRight:'10px'}}>
                                <img src={element.url} alt="pic" width='66px' height='66px' style={{border:'3px solid #f72398',borderRadius:'50%' ,padding:'1.5px'}} ></img>
                                <Typography variant='caption'>
                                    {element.profile_name}
                                </Typography>
                            </Box>
                          </>
                      )
                    })
                }
             </Box>
          </Carousel>;
               



                 {/* <Box sx={{width:'66px',height:'84px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:'10px',marginRight:'10px'}}>
                        <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt="pic" style={{width:'66px',height:'66px',borderRadius:'50%',border:'3px solid #f72398',padding:'1.5px'}} ></img>
                        <Typography variant='caption'>
                            _princes_
                        </Typography>
                 </Box>
                 <Box sx={{width:'66px',height:'84px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:'10px',marginRight:'10px'}}>
                        <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt="pic" style={{width:'66px',height:'66px',borderRadius:'50%',border:'3px solid #f72398',padding:'1.5px'}} ></img>
                        <Typography variant='caption'>
                            _princes_
                        </Typography>
                 </Box>
                 <Box sx={{width:'66px',height:'84px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:'10px',marginRight:'10px'}}>
                        <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt="pic" style={{width:'66px',height:'66px',borderRadius:'50%',border:'3px solid #f72398',padding:'1.5px'}} ></img>
                        <Typography variant='caption'>
                            _princes_
                        </Typography>
                 </Box> 
                  <Box sx={{width:'66px',height:'84px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:'10px',marginRight:'10px'}}>
                        <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt="pic" style={{width:'66px',height:'66px',borderRadius:'50%',border:'2px solid #f72398',padding:'1.5px'}} ></img>
                        <Typography variant='caption'>
                            _princes_
                        </Typography>
                 </Box>
                 <Box sx={{width:'66px',height:'84px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:'10px',marginRight:'10px'}}>
                        <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt="pic" style={{width:'66px',height:'66px',borderRadius:'50%',border:'2px solid #f72398',padding:'1.5px'}} ></img>
                        <Typography variant='caption'>
                            _princes_
                        </Typography>
                 </Box>
                 <Box sx={{width:'66px',height:'84px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:'10px',marginRight:'10px'}}>
                        <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt="pic" style={{width:'66px',height:'66px',borderRadius:'50%',border:'2px solid #f72398',padding:'1.5px'}} ></img>
                        <Typography variant='caption'>
                            _princes_
                        </Typography>
                 </Box>
                 <Box sx={{width:'66px',height:'84px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:'10px',marginRight:'10px'}}>
                        <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt="pic" style={{width:'66px',height:'66px',borderRadius:'50%',border:'2px solid #f72398',padding:'1.5px'}} ></img>
                        <Typography variant='caption'>
                            _princes_
                        </Typography>
                 </Box> */}
                 
        </>
    )
}
function Body()
{
   const [like,setLike] = useState(0);
   let fav = "<FavoriteBorderIcon onClick={fun} className='opacityDown cursur'/>"
    function fun()
    {
        if( like == 0)
           setLike(1);
        else
           setLike(0) 
        // console.log("Devendra",like);
    }
    function focusFun()
    {
        document.getElementById("text").focus();
    }
    return (
        <>
           <Stack justifyContent='center' alignItems='center' width='467px' mb='20px' pb='20px' sx={{borderBottom:'1px solid #3d3d3d'}}>
                <Box sx={{display:'flex',flexDirection:'row', justifyContent:'space-between' ,width:'467px'}}>
                    <Box className='cursur' sx={{display:'flex',flexDirection:'row'}}>
                        <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt="pic" style={{width:'32px',height:'32px',borderRadius:'50%'}} ></img>
                        <Box className='opacityDown' sx={{display:'flex',flexDirection:'column', marginLeft:'10px'}}>
                            <Box sx={{display:'flex',flexDirection:'row'}} >
                                <Typography variant='body1' >jimkwik</Typography><Typography variant="caption" > . 1h </Typography>
                            </Box>
                            <Typography variant='body1'>Original audio</Typography>   {/*depends on situation*/}
                        </Box> 
                    </Box>
                    <MoreHorizIcon className='cursur opacityDown' />
                 </Box>
              <Box   sx={{width:'467px',height:'467px', border:'1px solid #3d3d3d', borderRadius:'4px', display:'flex' ,  justifyContent:'center', alignItems:'center'}} >
                <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg'  style={{width:'470px',height:'467px'}} alt="pic" ></img>      {/* any photo,vedio can be dynamic*/}
              </Box>  
             <Stack>
                    <Box  width='467px' mt='5px' mb='5px' sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' }} >
                        <Box  sx={{display:'flex', flexDirection:'row' }} >  
                                <Box width='40px' heigh='40px' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                    { like==0 && <FavoriteBorderIcon onClick={fun} className='opacityDown cursur'  />  }
                                    { like==1 &&  <FavoriteIcon onClick={fun} className='opacityDown cursur'  />  }
                                 </Box>
                                <Box width='40px' heigh='40px' sx={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                                  <ModeCommentOutlinedIcon onclick={focusFun} className='opacityDown cursur' />
                                </Box>
                                <Box width='40px' heigh='40px' sx={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                                  <SendOutlinedIcon className='opacityDown cursur' />
                                </Box>
                        </Box>
                            <Box width='40px' heigh='40px' sx={{display:'flex', justifyContent:'center', alignItems:'center' }} >
                               <BookmarkBorderOutlinedIcon className='opacityDown cursur' />  
                            </Box>
                    </Box>
                    <Box p='5px' pl='10px'>
                        {like} Like
                    </Box>
                    <Box>
                        <Typography variant='body1' className='cursur' >some text over hear....</Typography>
                    </Box>
                    <Box   sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                        <Typography variant='caption' className='cursur' ><input id='text' type='text' placeholder='Add comment....' style={{width:'27rem',backgroundColor:'black', border:'none',height:'25px',color:'white'}} ></input>  </Typography>
                        <Box width='40px' heigh='40px' sx={{display:'flex' ,  justifyContent:'center', alignItems:'center' }}>
                          <SentimentSatisfiedOutlinedIcon className='opacityDown cursur zoom' fontSize='smaller' />
                        </Box>
                    </Box>     
             </Stack> 
           </Stack>
        </>
    )
}

function LeftHead()
{
  
    return (
        <>
        <Stack flexDirection='column' mt='30px'> 
           <Box justifyContent='center' alignItems='center' > 
            <UserShortProfile width={'50px'} height={'50px'} element={<b className='main-col' >Switch</b>} />
          </Box>
           <Box  sx={{direction:'flex' , justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
            <Typography variant='body1' className='opacityDowned' >Sugeestions for you</Typography>
                {/* <span><b>Seeall</b></span> */}
           </Box>
          </Stack>  
        </>
    )
}

export default Home;