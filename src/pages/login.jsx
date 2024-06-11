import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/style/stylecom'; // Correct import
import { useFileHandler, useInputValidation ,useStrongPassword} from '6pp'; // Single import
import { UsernameValidation } from '../utils/validators';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(!isLogin); // Toggle between login and sign-up

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const Username = useInputValidation("",UsernameValidation);
  const Password = useStrongPassword();
const avatar =useFileHandler("single");
const handleLogin = (e) => {
  e.preventDefault();
  console.log(name.value, bio.value, Username.value, Password.value, avatar.preview);
}

const handleSignup = (e) => {
  e.preventDefault();
  console.log(name.value, bio.value, Username.value, Password.value, avatar.preview);
}
  return (
    // <div style={{backgroundImage:linear-gradient(rgba(255, 225, 159,), rgba(249, 159, 159))}} >

   
    <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {isLogin ? (
          <>
            <Typography variant='h5'>Login</Typography>
            <form style={{ width: '100%', marginTop: "1rem" }} onSubmit={handleLogin} >
              <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={Username.value} onChange={Username.changeHandler} />
              <TextField required fullWidth label="Password" margin='normal' variant='outlined' type='password' value={Password.value} onChange={Password.changeHandler} />
              <Button color='primary' type='submit' variant='contained' sx={{ marginTop: "1rem" }} fullWidth>Login</Button>
              <Typography textAlign={"center"} m={"1rem"}>or</Typography>
              <Button fullWidth variant='text' onClick={toggleLogin}>Sign up now</Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant='h5'>Sign Up</Typography>
            <form style={{ width: '100%', marginTop: "1rem" }} onSubmit={handleSignup} >
              <Stack position={"relative"} width={"10rem"} margin={"auto"} >
                <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain" }} src={avatar.preview} />

                {
                avatar.error && <Typography color="error" variant='caption' m={"1rem auto"} width={"fit-content"} display={"block"}>{avatar.error}</Typography>
              }

                <IconButton sx={{ position: "absolute", bottom: "0", right: "0", color: "white", bgcolor: "rgba(0, 0, 0, 0.5)", ":hover": { bgcolor: "rgba(0, 0, 0, 0.7)" } }} component="label">
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>
              <TextField required fullWidth label="Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler} />
              <TextField required fullWidth label="Bio" margin='normal' variant='outlined' value={bio.value} onChange={bio.changeHandler} />
              <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={Username.value} onChange={Username.changeHandler} />


              {
                Username.error && <Typography color="error" variant='caption'>{Username.error}</Typography>
              }
              <TextField required fullWidth label="Password" margin='normal' variant='outlined' type='password' value={Password.value} onChange={Password.changeHandler} />

              
              {
                Password.error && <Typography color="error" variant='caption'>{Password.error}</Typography>
              }
              <Button color='primary' type='submit' variant='contained' sx={{ marginTop: "1rem" }} fullWidth>Sign Up</Button>
              <Typography textAlign={"center"} m={"1rem"}>or</Typography>
              <Button fullWidth variant='text' onClick={toggleLogin}>Log in now</Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    // </div>
  );
};

export default Login;
