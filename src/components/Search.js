import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, InputAdornment, Button, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookImage from "./images/book.png";
import EBookImage from "./images/ebook.png"
import MultiMediaImage from "./images/multimedia.png"

const Search = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);
    const [filter, setFilter] = useState('All');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (filterOption) => {
        setFilter(filterOption);
        setAnchorEl(null);
    };

    const bookData = [
        { head: 'ISBN', value: '978-3-16-148410-0' },
        { head: 'Title', value: 'Example Book Title' },
        { head: 'Author', value: 'John Doe' },
        { head: 'Publisher', value: 'Example Publisher' },
        { head: 'Date Published', value: 'July 24, 2017' },
        { head: 'Place Published', value: 'New York' },
        { head: 'Keywords', value: 'Example, Book, Keywords' },
        { head: 'In Library', value: 'Yes' },
        { head: 'Related Courses', value: 'Course 101, Course 102' }
    ];

    const ebookData = [
        { head: 'ISBN', value: '978-3-16-148410-0' },
        { head: 'Title', value: 'Example Book Title' },
        { head: 'Author', value: 'John Doe' },
        { head: 'Publisher', value: 'Example Publisher' },
        { head: 'Date Published', value: 'July 24, 2017' },
        { head: 'Place Published', value: 'New York' },
        { head: 'Keywords', value: 'Example, Book, Keywords' },
        { head: 'In Library', value: 'No' },
        { head: 'Related Courses', value: 'Course 101, Course 102' }
    ];

    const multimediaData = [
        { head: 'Title', value: 'Example Book Title' },
        { head: 'File Type', value: 'Video Format (MP4, AVI, MKV, MOV, or WEBM)' },
        { head: 'Author', value: 'John Doe' },
        { head: 'Publisher', value: 'Example Publisher' },
        { head: 'Date Published', value: 'July 24, 2017' },
        { head: 'Place Published', value: 'New York' },
        { head: 'Keywords', value: 'Example, Book, Keywords' },
        { head: 'In Library', value: 'Yes' },
        { head: 'Related Courses', value: 'Course 101, Course 102' }
    ];

    const magazineData = [
        { head: 'ISSN', value: '978-3-16-148410-0' },
        { head: 'Issue Number', value: 'Issue #2' },
        { head: 'Title', value: 'Magazine Title' },
        { head: 'Publisher', value: 'Example Publisher' },
        { head: 'Date Published', value: 'July 24, 2017' },
        { head: 'Keywords', value: 'Example, Book, Keywords' },
        { head: 'In Library', value: 'Yes' },
        { head: 'Related Courses', value: 'Course 101, Course 102' }
    ];

    return (
        <Box sx={{ backgroundColor: '#1D2C44', pb: 6 }}>
            <Box sx={{
                backgroundColor: '#ffff',
                borderRadius: '15px',
                height: 'auto',
                margin: '0 auto',
                maxWidth: { xs: '80%', sm: '80%', md: 'auto' },
                p: { xs: 2, sm: 3, md: 4 }
            }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <TextField
                        id="search"
                        size="small"
                        placeholder="Search for resources"
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
                    <Button
                        variant="outlined"
                        startIcon={<FilterListIcon />}
                        onClick={handleClick}
                        sx = {{ 
                            backgroundColor: "#D47106",
                            border: "none",
                            color: "#ffff",
                            '&:hover': {
                                backgroundColor: "#ffff",
                                color: "#D47106",
                                borderColor: "#D47106"
                            }
                         }}
                    >
                        Filter
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => handleClose(filter)}
                    >
                        <MenuItem onClick={() => handleClose('All')}>All</MenuItem>
                        <MenuItem onClick={() => handleClose('Book')}>Book</MenuItem>
                        <MenuItem onClick={() => handleClose('E-book')}>E-book</MenuItem>
                        <MenuItem onClick={() => handleClose('Multi-Media')}>Multi-Media</MenuItem>
                        <MenuItem onClick={() => handleClose('Magazine')}>Magazine</MenuItem>
                    </Menu>
                </Stack>
                
                {/* Content rendering based on the selected filter */}
                <Stack direction="column" justifyContent="space-between" alignItems={isMobile ? 'center' : 'flex-start'} spacing={10} sx= {{ mt: 4 }}>
                    
                    {(filter === 'All' || filter === 'Book') && (
                        <Stack direction={isMobile ? 'column' : 'row'} justifyContent="space-between" alignItems="center" spacing={isMobile ? 2 : 8}>
                            <Box>
                                <img
                                    src={BookImage}
                                    alt="Book"
                                    style={{
                                        maxWidth: '250px',
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </Box>
                            <Box>
                                <TableContainer sx={{ width: { xs: 'auto', md: '600px' } }}>
                                    <Table>
                                        <TableBody>
                                            {bookData.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>{row.head}</TableCell>
                                                    <TableCell>
                                                        {row.head === 'In Library' ? (
                                                            <Box
                                                                sx={{
                                                                    backgroundColor: row.value === 'Yes' ? 'green' : row.value === 'No' ? 'red' : 'transparent',
                                                                    color: 'white',
                                                                    borderRadius: '10px',
                                                                    display: 'inline-block',
                                                                    px: 2,
                                                                    py: 0.5,
                                                                }}
                                                            >
                                                                {row.value}
                                                            </Box>
                                                        ) : (
                                                            row.value
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Stack>
                    )}

                    {(filter === 'All' || filter === 'E-book') && (
                        <Stack direction={isMobile ? 'column' : 'row'} justifyContent="space-between" alignItems="center" spacing={isMobile ? 2 : 8}>
                            <Box>
                                <img
                                    src={EBookImage}
                                    alt="E-book"
                                    style={{
                                        maxWidth: '250px',
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </Box>
                            <Box>
                                <TableContainer sx={{ width: { xs: 'auto', md: '600px' } }}>
                                    <Table>
                                        <TableBody>
                                            {ebookData.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>{row.head}</TableCell>
                                                    <TableCell>
                                                        {row.head === 'In Library' ? (
                                                            <Box
                                                                sx={{
                                                                    backgroundColor: row.value === 'Yes' ? 'green' : row.value === 'No' ? 'red' : 'transparent',
                                                                    color: 'white',
                                                                    borderRadius: '10px',
                                                                    display: 'inline-block',
                                                                    px: 2,
                                                                    py: 0.5,
                                                                }}
                                                            >
                                                                {row.value}
                                                            </Box>
                                                        ) : (
                                                            row.value
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Stack>
                    )}

                    {(filter === 'All' || filter === 'Multi-Media') && (
                        <Stack direction={isMobile ? 'column' : 'row'} justifyContent="space-between" alignItems="center" spacing={isMobile ? 2 : 8}>
                            <Box>
                                <img
                                    src={MultiMediaImage}
                                    alt="Multimedia"
                                    style={{
                                        maxWidth: '250px',
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </Box>
                            <Box>
                                <TableContainer sx={{ width: { xs: 'auto', md: '600px' } }}>
                                    <Table>
                                        <TableBody>
                                            {multimediaData.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>{row.head}</TableCell>
                                                    <TableCell>
                                                        {row.head === 'In Library' ? (
                                                            <Box
                                                                sx={{
                                                                    backgroundColor: row.value === 'Yes' ? 'green' : row.value === 'No' ? 'red' : 'transparent',
                                                                    color: 'white',
                                                                    borderRadius: '10px',
                                                                    display: 'inline-block',
                                                                    px: 2,
                                                                    py: 0.5,
                                                                }}
                                                            >
                                                                {row.value}
                                                            </Box>
                                                        ) : (
                                                            row.value
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Stack>
                    )}

                    {(filter === 'All' || filter === 'Magazine') && (
                        <Stack direction={isMobile ? 'column' : 'row'} justifyContent="space-between" alignItems="center" spacing={isMobile ? 2 : 8}>
                            <Box>
                                <img
                                    src={BookImage}
                                    alt="Magazine"
                                    style={{
                                        maxWidth: '250px',
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </Box>
                            <Box>
                                <TableContainer sx={{ width: { xs: 'auto', md: '600px' } }}>
                                    <Table>
                                        <TableBody>
                                            {magazineData.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>{row.head}</TableCell>
                                                    <TableCell>
                                                        {row.head === 'In Library' ? (
                                                            <Box
                                                                sx={{
                                                                    backgroundColor: row.value === 'Yes' ? 'green' : row.value === 'No' ? 'red' : 'transparent',
                                                                    color: 'white',
                                                                    borderRadius: '10px',
                                                                    display: 'inline-block',
                                                                    px: 2,
                                                                    py: 0.5,
                                                                }}
                                                            >
                                                                {row.value}
                                                            </Box>
                                                        ) : (
                                                            row.value
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Stack>
                    )}
                </Stack>
            </Box>
        </Box>
    );
};

export default Search;
