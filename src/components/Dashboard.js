import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BoyImage from "./images/boy.png";

const Dashboard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                backgroundColor: '#1D2C44',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Stack
                direction={isMobile ? "column" : "row"}
                justifyContent="space-evenly"
                alignItems="center"
                spacing={isMobile ? 2 : 6}
                sx={{ flexGrow: 1 }}
            >
                <Box sx={{
                    textAlign: { xs: 'center', sm: 'left' },
                    width: '400px',
                    mb: isMobile ? 2 : 0
                }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#ffff',
                            fontWeight: 'light',
                            fontFamily: 'Libre Baskerville',
                            mb: 2
                        }}
                    >
                        Welcome to LiRRa!
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#767F8E',
                            fontFamily: 'Libre Baskerville',
                            margin: isMobile ? '0 auto' : '0',
                            mb: 4
                        }}
                    >
                        Address the needs of the academic community in knowledge management and deliver high-quality library services to students.                    </Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                        <TextField id="search" placeholder="Search for resources" type="search" InputProps={{
                            style: {
                                backgroundColor: '#ffff',
                                borderRadius: "15px",
                                width: '300px'
                            }
                        }}
                        />
                        <Button variant="contained" sx={{
                            backgroundColor: "#D47106",
                            borderRadius: "15px",
                            fontFamily: 'Work Sans',
                            py: 2
                        }}>
                            Search
                        </Button>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '650px',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: isMobile ? 'flex-end' : 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        src={BoyImage}
                        alt="Boy"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </Box>
            </Stack>
        </Box>
    );
}

export default Dashboard;
