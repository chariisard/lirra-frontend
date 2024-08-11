import React from 'react';
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

const ForgotPassword = () => {
    const [showPassword, setShowPassword] = React.useState(false);

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
                mt: { xs: 3, sm: 3, md: 10 }
            }}>
                <Typography variant="h4" sx={{
                    color: '#424242',
                    fontWeight: 'bold',
                    fontFamily: 'Work Sans'
                }}>
                    Create a new password
                </Typography>
                <Box component="form" sx={{
                    mt: 4,
                    '& .MuiTextField-root': { mt: 1 }
                }}>
                    <InputLabel htmlFor="component-simple" sx={{
                        color: '#424242',
                        fontWeight: 'Medium',
                        fontFamily: 'Work Sans',
                        mt: 3
                    }}>
                        Enter New Password
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
                    />

                    <InputLabel htmlFor="component-simple" sx={{
                        color: '#424242',
                        fontWeight: 'Medium',
                        fontFamily: 'Work Sans',
                        mt: 3
                    }}>
                        Confirm New Password
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
                    />
                    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{
                        mt: 3,
                        color: '#244977',
                        fontWeight: 'Bold',
                        fontFamily: 'Work Sans'
                    }}>
                        <Link to='/' style={{
                            color: '#244977',
                            fontWeight: 'Bold',
                            fontFamily: 'Work Sans',
                            textDecoration: 'none'
                        }}>
                            Return to Sign In
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
                        Confirm
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default ForgotPassword;
