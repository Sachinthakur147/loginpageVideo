// App.js
// import React from 'react';
// import Header from './header/Header';
// import Sidebar from './Sidebar';
// import Rightsidebar from './Rightsidebar';
// import Footer from './Footer';

// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <div className="main-content">
//         <div className="content" style={{display:"flex"}}>
//         <Sidebar />
//         <Rightsidebar />
//         </div>
       
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;




import React from 'react'
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import FormExample from './form';
import backVideo from './video/backVideo.mp4'
import Login from './loginform/Login';
// import Loginbox from './loginform/Loginbox'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  return (
 
    <div className='section'>
   
    <Box sx={{ flexGrow: 1 }} className='form-box'>
    
    <Grid container spacing={2} style={{paddingTop:"10%",justifyContent:"space-around"}}>
     <Grid xs={2} >
     
    </Grid>
    <Grid xs={4} >
       <Item className='item1' style={{width:"100%"}}><FormExample/></Item>
     </Grid>
     <Grid xs={2}>
  
    </Grid>
   </Grid>
  </Box>
     <video autoPlay muted loop id="myVideo">
    
     <source src={backVideo} type="video/mp4"/>
     
  </video>
 
  

    </div>
    
  )
}

export default App
