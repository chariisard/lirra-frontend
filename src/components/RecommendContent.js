import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BookImage from "./images/book.png";

const RecommendContent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const tableData = [
        { head: 'ISBN', value: '978-3-16-148410-0' },
        { head: 'Title', value: 'Example Book Title' },
        { head: 'Author', value: 'John Doe' },
        { head: 'Publisher', value: 'Example Publisher' },
        { head: 'Place Published', value: 'New York' },
        { head: 'Keywords', value: 'Example, Book, Keywords' },
        { head: 'In Library', value: 'Yes' },
        { head: 'Related Courses', value: 'Course 101, Course 102' }
    ];

    return (
        <Box sx={{ backgroundColor: '#1D2C44' }}>
            <Box sx={{
                backgroundColor: '#ffff',
                borderRadius: '15px',
                height: 'auto',
                margin: '0 auto',
                maxWidth: { xs: '80%', sm: '80%', md: 'auto' },
                minWidth: { xs: '80%', sm: '80%', md: '500px' },
                p: { xs: 2, sm: 3, md: 4 }
            }}>
                <Stack direction="column" justifyContent="space-between" alignItems={isMobile ? 'center' : 'flex-start'} spacing={4}>
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
                    <Stack direction={isMobile ? 'column' : 'row'} justifyContent="space-between" alignItems="center" spacing={isMobile ? 2 : 8}>
                        <Box>
                            <img
                                src={BookImage}
                                alt="Book"
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
                                        {tableData.map((row, index) => (
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
                </Stack>
            </Box>
        </Box>
    );
}

export default RecommendContent;
