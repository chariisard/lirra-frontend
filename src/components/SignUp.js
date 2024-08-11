import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Logo from "./images/lirra_logo.png";
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useState } from "react";

const SignUp = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [showPassword, setShowPassword] = React.useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const types = [
        {
            value: 'librarian',
            label: 'Librarian',
        },
        {
            value: 'student',
            label: 'Student',
        },
        {
            value: 'teacher',
            label: 'Teacher',
        }
    ];

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container sx={{
            py: 4,
            width: '100%'
        }}
        >
            <Box>
                <img src={Logo} alt="LiRRa logo" width={80}></img>
            </Box>
            <Box sx={{
                mx: 'auto',
                width: '75%',
                mt: 3
            }}
            >
                <Typography variant="h4" sx={{
                    color: '#424242',
                    fontWeight: 'bold',
                    fontFamily: 'Work Sans'
                }}
                >
                    Sign up for an account
                </Typography>
                <Box component="form" sx={{
                    mt: 4,
                    '& .MuiTextField-root': { mt: 1 }
                }}
                >
                    <Stack direction={isMobile ? 'column' : 'row'} spacing={isMobile ? 0 : 2}>
                        <Stack sx={{ flex: 1 }}>
                            <InputLabel htmlFor="FirstName" sx={{
                                color: '#424242',
                                fontWeight: 'Medium',
                                fontFamily: 'Work Sans'
                            }}
                            >
                                First Name
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="FirstName"
                                size="small"
                                InputProps={{
                                    style: {
                                        borderRadius: "10px",
                                    }
                                }}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Stack>
                        <Stack sx={{ flex: 1 }}>
                            <InputLabel htmlFor="LastName" sx={{
                                color: '#424242',
                                fontWeight: 'Medium',
                                fontFamily: 'Work Sans',
                                mt: {xs: 3, sm: 0, md: 0}
                            }}
                            >
                                Last Name
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="LastName"
                                size="small"
                                InputProps={{
                                    style: {
                                        borderRadius: "10px",
                                    }
                                }}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Stack>
                    </Stack>
                    <InputLabel htmlFor="Username" sx={{
                        color: '#424242',
                        fontWeight: 'Medium',
                        fontFamily: 'Work Sans',
                        mt: 3
                    }}
                    >
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

                    <InputLabel htmlFor="Password" sx={{
                        color: '#424242',
                        fontWeight: 'Medium',
                        fontFamily: 'Work Sans',
                        mt: 3
                    }}
                    >
                        Password
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="outlined-adornment-password"
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

                    <InputLabel htmlFor="UserType" sx={{
                        color: '#424242',
                        fontWeight: 'Medium',
                        fontFamily: 'Work Sans',
                        mt: 3
                    }}
                    >
                        User Type
                    </InputLabel>
                    <TextField
                        select
                        fullWidth
                        displayEmpty
                        size="small"
                        InputProps={{
                            style: {
                                borderRadius: "10px",
                                backgroundColor: "#F5F5F5"
                            }
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select User Type
                        </MenuItem>
                        {types.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{
                        mt: 3,
                        color: '#244977',
                        fontWeight: 'Bold',
                        fontFamily: 'Work Sans'
                    }}
                    >
                        <Link to='/' style={{
                            color: '#244977',
                            fontWeight: 'Bold',
                            fontFamily: 'Work Sans',
                            textDecoration: 'none'
                        }}>
                            Already have an account?
                        </Link>
                    </Stack>

                    <Button variant="contained" sx={{
                        backgroundColor: "#244977",
                        borderRadius: "10px",
                        fontFamily: 'Work Sans',
                        mt: 4,
                        py: 2,
                        width: "100%"
                    }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default SignUp;
