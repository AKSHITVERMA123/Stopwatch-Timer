import React, { useRef } from 'react';
import { Button } from '@mui/material';
import './external.css';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


const LoginComp = () => {
    let id=useRef();
    let password=useRef();
    let Udata= [];
    const nav=useNavigate();

    const getData = () => {
             console.log(uid.current.value);
             console.log(upass.current.value);
         let uId = id.current.value;
         let uPass = password.current.value;
         axios.get("http://localhost:8888/users").then((res) =>{
            //console.log(data);
            Udata=res.data;
            const ValidUser = Udata.filter((val) => { return val.userid === uId && val.userpass===uPass});
        if(ValidUser.length > 0){
            nav("/SignUp");
            sessionStorage().setItem("user",uId);
        }
        else{
            window.alert("Wrong credentials");
        }

        }).catch((err) => {})
    }

    return (
        <div>
            {/* <h2>This is my Login Component</h2> */}
        {/* <Button variant='text'>Hit Me</Button>{" "}
        <Button variant='conatined'>Hit Me</Button>{" "}
         <Button variant='outlined'>Hit Me</Button> 
        <Button variant='contained'>Hit Me</Button> */}
        <form>
        <input type='text' name='id' ref={id} placeholder='enter user id' className='form-control mb-2 mt-2'></input>
        <input type='password' name='password' ref={password} placeholder='enter user password' className='form-control mb-2 mt-2'></input>

        <div className='d-grid'>
        {/* <button type='button' className = "btn btn-primary mt-3 mb-2">Login</button> */}
        
        <Button variant='outlined' onClick={getData} style={{width: "20px" , marginLeft : "650px"}} >Login</Button>
        </div>
        </form>
        </div>
     )
};
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   }

//   return (
//     <div>
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
    
//   </div>
//   )
//     };
export default LoginComp;
