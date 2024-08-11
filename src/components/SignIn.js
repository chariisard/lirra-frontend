import {React, useState} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Logo from "./images/lirra_logo.png";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container sx={{
            py: 4,
            width: '100%'
        }}>
            <Box>
                <img src={Logo} alt="LiRRa logo" width={80}></img>
            </Box>
            <Box sx={{
                mx: 'auto',
                width: '75%',
                mt: {xs: 3, sm: 3, md: 10}
            }}>
                <Typography variant="h4" sx={{
                    color: '#424242',
                    fontWeight: 'bold',
                    fontFamily: 'Work Sans'
                }}>
                    Sign in to your account
                </Typography>
                <Box component="form" sx={{
                    mt: 4,
                    '& .MuiTextField-root': { mt: 1 }
                }}>
                    <InputLabel htmlFor="component-simple" sx={{
                        color: '#424242',
                        fontWeight: 'Medium',
                        fontFamily: 'Work Sans'
                    }}>
                        Username
                    </InputLabel>
                    <TextField 
                        fullWidth 
                        id="Username"
                        size="small"
                        InputProps={{
                            style: {
                                borderRadius: "10px",
                            }
                        }}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    <InputLabel htmlFor="component-simple" sx={{
                        color: '#424242',
                        fontWeight: 'Medium',
                        fontFamily: 'Work Sans',
                        mt: 3
                    }}>
                        Password
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="Password"
                        size="small"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            style: {
                                borderRadius: "10px",
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{
                        mt: 3,
                        color: '#244977',
                        fontWeight: 'Bold',
                        fontFamily: 'Work Sans'
                    }}>
                        <Link to='/forgot-password' style={{
                            color: '#244977',
                            fontWeight: 'Bold',
                            fontFamily: 'Work Sans',
                            textDecoration: 'none'
                        }}>
                            Forgot Password
                        </Link>
                        <Link to='/sign-up' style={{ 
                                color: '#244977',
                                fontWeight: 'Bold',
                                fontFamily: 'Work Sans',
                                textDecoration: 'none'
                            }}>
                            Don't Have an Account?
                        </Link>
                    </Stack>

                    <Button variant="contained" sx={{
                        backgroundColor: "#244977",
                        borderRadius: "10px",
                        fontFamily: 'Work Sans',
                        mt: 4,
                        py: 2,
                        width: "100%"
                    }}>
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default SignIn;
