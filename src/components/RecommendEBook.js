import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

const RecommendEBook = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const defaultRelatedCourses = ['ITPFL1', 'ITSAR1', 'ITPFL2'];
    const [relatedCourses, setRelatedCourses] = React.useState([]);

    return (
        <Box sx={{ 
                backgroundColor: '#1D2C44',
                px: 6,
                pb: 6
            }}
        >
            <Box sx={{
                backgroundColor: '#ffff',
                borderRadius: '15px',
                height: 'auto',
                margin: '0 auto',
                maxWidth: { xs: '90%', sm: '90%', md: 'auto' },
                minWidth: { xs: '90%', sm: '90%', md: '500px' },
                p: { xs: 2, sm: 3, md: 4 }
            }}>
                <Stack direction="column" justifyContent="space-between" alignItems="flex-start" spacing={4}>
                    <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
                        <TextField
                            id="search"
                            placeholder="Search for resources"
                            size="small"
                            type="search"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                style: {
                                    backgroundColor: '#F5F5F5',
                                    border: '#9E9E9E',
                                    borderRadius: "10px",
                                }
                            }}
                            sx={{
                                width: { xs: '100%', sm: '100%', md: '600px' }
                            }}
                        />
                        <Button variant="contained" sx={{
                            backgroundColor: "#D47106",
                            borderRadius: "10px",
                            fontFamily: 'Work Sans',
                            fontSize: "12px"
                        }}>
                            Recommend
                        </Button>
                    </Stack>
                    <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={0.5}>
                        <TabletMacIcon sx={{
                            color: '#244977'
                        }} />
                        <Typography variant="h5" sx={{
                            color: '#244977',
                            fontWeight: 'bold',
                            fontFamily: 'Work Sans'
                        }}>
                            Recommend an E-Book
                        </Typography>
                    </Stack>
                    <Stack direction={isMobile ? 'column' : 'row'} justifyContent="center" alignItems="flex-start" spacing={isMobile ? 2 : 10} sx={{ width: '100%' }}>
                        <Stack sx={{ width: { xs: '100%', md: '25%' }, flexGrow: 1 }}>
                            <InputLabel htmlFor="ISBN" sx={{
                                color: '#424242',
                                fontWeight: 'Medium',
                                fontFamily: 'Work Sans'
                            }}>
                                ISBN
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="ISBN"
                                size="small"
                                InputProps={{
                                    style: {
                                        borderRadius: "10px",
                                    }
                                }}
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '100%' }
                                }}
                            />

                            <InputLabel htmlFor="Title" sx={{
                                color: '#424242',
                                fontWeight: 'Medium',
                                fontFamily: 'Work Sans',
                                mt: 2
                            }}>
                                Title
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="Title"
                                size="small"
                                required
                                InputProps={{
                                    style: {
                                        borderRadius: "10px",
                                    }
                                }}
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '100%' }
                                }}
                            />

                            <InputLabel htmlFor="Author" sx={{
                                color: '#424242',
                                fontWeight: 'Medium',
                                fontFamily: 'Work Sans',
                                mt: 2
                            }}>
                                Author
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="Author"
                                size="small"
                                required
                                InputProps={{
                                    style: {
                                        borderRadius: "10px",
                                    }
                                }}
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '100%' }
                                }}
                            />

                            <InputLabel htmlFor="Publisher" sx={{
                                color: '#424242',
                                fontWeight: 'Medium',
                                fontFamily: 'Work Sans',
                                mt: 2
                            }}>
                                Publisher
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="Publisher"
                                size="small"
                                InputProps={{
                                    style: {
                                        borderRadius: "10px",
                                    }
                                }}
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '100%' }
                                }}
                            />
                        </Stack>
                        <Stack sx={{ width: { xs: '100%', md: '25%' }, flexGrow: 1 }}>
                            <InputLabel htmlFor="Date" sx={{
                                color: '#424242',
                                fontWeight: 'Medium',
                                fontFamily: 'Work Sans'
                            }}>
                                Date Published
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="Date"
                                type="date"
                                size="small"
                                required
                                InputProps={{
                                    style: {
                                        borderRadius: "10px",
                                    }
                                }}
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '100%' }
                                }}
                            />

                            <InputLabel htmlFor="Place" sx={{
                                color: '#424242',
                                fontWeight: 'Medium',
                                fontFamily: 'Work Sans',
                                mt: 2
                            }}>
                                Place Published
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="Place"
                                size="small"
                                InputProps={{
                                    style: {
                                        borderRadius: "10px",
                                    }
                                }}
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '100%' }
                                }}
                            />

                            <InputLabel htmlFor="Keywords" sx={{
                                color: '#424242',
                                fontWeight: 'Medium',
                                fontFamily: 'Work Sans',
                                mt: 2
                            }}>
                                Keywords
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="Keywords"
                                size="small"
                                required
                                InputProps={{
                                    style: {
                                        borderRadius: "10px",
                                    }
                                }}
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '100%' }
                                }}
                            />

                            <InputLabel htmlFor="Related" sx={{
                                color: '#424242',
                                fontWeight: 'Medium',
                                fontFamily: 'Work Sans',
                                mt: 2
                            }}>
                                Related Courses
                            </InputLabel>
                            <Autocomplete
                                multiple
                                freeSolo
                                id="Related"
                                options={defaultRelatedCourses} // Suggestions from defaultRelatedCourses
                                value={relatedCourses}
                                onChange={(event, newValue) => {
                                    setRelatedCourses(newValue);
                                }}
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip
                                            variant="outlined"
                                            label={option}
                                            {...getTagProps({ index })}
                                            sx={{ borderRadius: '10px', maxHeight: '24px' }}
                                        />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        size="small"
                                        required
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: "10px",
                                                display: 'flex',
                                                flexWrap: 'nowrap',
                                                overflowX: 'auto',
                                                whiteSpace: 'nowrap',
                                            },
                                            '& .MuiChip-root': {
                                                borderRadius: '10px',
                                                maxHeight: '24px',
                                            },
                                            width: { xs: '100%', sm: '100%', md: '100%' }
                                        }}
                                        inputProps={{
                                            ...params.inputProps,
                                            style: {
                                                flexGrow: 1,
                                            }
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent={isMobile ? 'center' : 'flex-end'} sx={{ width: '100%' }}>
                        <Button variant="contained" size="small" sx={{
                            backgroundColor: "#244977",
                            borderRadius: "10px",
                            fontFamily: 'Work Sans',
                            mt: 1,
                            py: 1,
                            width: { xs: '100%', sm: '100%', md: '400px' }
                        }}
                        >
                            Complete Recommendation
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default RecommendEBook;
