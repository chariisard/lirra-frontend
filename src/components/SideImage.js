import React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GirlImage from "./images/girl.png";

const SideImage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
                spacing={10}
                sx={{
                    backgroundColor: "#244977",
                    height: {xs: 'auto', sm: 'auto', md: '100vh'},
                    px: { xs: 2, sm: 2, md: 6 }
                }}
            >
                <Box>
                    <Stack 
                        direction="column" 
                        justifyContent="center" 
                        alignItems={isMobile ? 'center' : 'flex-start'}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#ffff',
                                fontWeight: 'light',
                                fontFamily: 'Libre Baskerville',
                                mt: {xs: 6, sm: 6},
                                textAlign: { xs: 'center', sm: 'center', md: 'left' } 
                            }}
                        >
                            A library is infinity under a roof.
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#767F8E',
                                fontWeight: 'light',
                                fontFamily: 'Libre Baskerville',
                                textAlign: { xs: 'center', sm: 'center', md: 'center' } 
                            }}
                        >
                            - Gail Carson Levine
                        </Typography>
                    </Stack>
                </Box>
                <Box>
                    <img
                        src={GirlImage}
                        alt="Girl"
                        style={{
                            width: '100%', 
                            maxWidth: '600px', 
                            height: 'auto' 
                        }}
                    />
                </Box>
            </Stack>
        </Box>
    );
}

export default SideImage;
