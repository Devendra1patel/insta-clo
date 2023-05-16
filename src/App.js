import './App.css';
import {useEffect, useState} from 'react'
import { Manubar, Home, Create, Search, Reels, Messages,Profile } from './components';
import { Box, Typography, Stack } from '@mui/material';
import { manubar_category } from './utils/Constants'
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';

import fetchAPI from './utils/factchAPI';
function App() {
      /////////////////////////////////////
    //  const {data,setData} = useState({})
    //  {setData(res.data.use)}
    //  useEffect(()=>{
    //      fetchAPI().then((res)=> console.log(res.data.use) );
    //  },[]);
    //  console.log({data});

      // console.log(fetchAPI().then((res)=> res)); 
  // useEffect(() => {
  //   fetchAPI()
  //     .then((data) => console.log(data.items))
  // } , [ ]);
  /////////////////////////////////////////

  return (
   <>
    {/* <Stack direction='row'> */}
      {/* <Manubar/> */}
      {/* <Home/> */}
      {/* <Create/> */}
      {/* <Reels/> */}
      {/* <News/> */}
    {/* <Profile/> */}

    <Box  m='auto' sx={{display:'flex'}} >
       <Router>
          <Manubar/>
          <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/Search' element={<Search/>} />
            {/* <Route path='/Explore' element={<Explore/>} /> */}
            <Route path='/Reels' element={<Reels/>} />
            <Route path='/Messages' element={<Messages/>}>
                {/* <Route path='NewMessage' element={<NewMessage/>} /> */}
            </Route>
            {/* <Route path='/Notification' element={<Notification/>} /> */}
            <Route path='/Create' element={<Create/>} />
            <Route path='/Profile' element={<Profile/>} />
          </Routes>
      </Router>
    </Box>

 
   </>
  );
}

export default App;
