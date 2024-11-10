import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, TextField, Select, MenuItem, CircularProgress } from '@mui/material';
import useFetchStadiums from "../hooks/useFetchStadiums.js";

function StadiumDetails() {
    const { id } = useParams();
    const { stadiums, loading, error } = useFetchStadiums();
    const navigate = useNavigate();


    const stadium = stadiums.find(stadium => String(stadium.id) === id);

    if (error) return <div>Error: {error}</div>;
    if (!stadium) return <div>Stadium not found</div>;

    const handleGoBack = () => navigate(-1);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '150px',
            width: "100%",
            height: "100%",
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: 'rgba(211, 211, 211, 0.8)',
            padding: '30px 10px',
        }}>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <CircularProgress color="primary" size={60} />
                </Box>
            ) : (
                <>
                    <Box sx={{
                        display: 'flex',
                        gap: 10,
                        flexDirection: 'row',
                        marginLeft: 10,
                    }}>
                        <img src={stadium.image} alt={stadium.name}
                             style={{ width: '500px', height: '400px', objectFit: 'cover' }} />
                        <Box sx={{
                            width: '60%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px',
                            justifyContent: "start",
                            alignItems: "start",
                        }}>
                            <Typography variant="h2" fontWeight="400">{stadium.title}</Typography>
                            <Typography variant="h4" color="text.secondary" fontWeight="200">
                                {stadium.description}
                            </Typography>

                            <Box sx={{ display: 'flex', gap: '50px', marginTop: '10px' }}>
                                <TextField
                                    label="Countable field"
                                    defaultValue="1337..."
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                />
                                <Select
                                    defaultValue=""
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                >
                                    <MenuItem value=""><em>Select</em></MenuItem>
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                </Select>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginLeft: 10,
                        width: '90%',
                    }}>
                        <Typography variant="h4" fontWeight="bold" sx={{ marginTop: '20px' }}>
                            Seats: {stadium.seats}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                            <Button variant="outlined" color="#000000" onClick={handleGoBack} sx={{
                                padding: '10px 35px',
                                fontSize: '1.2rem'
                            }}
                            >
                                Go back
                            </Button>

                            <Button variant="contained" color="primary" sx={{
                                padding: '10px 35px',
                                fontSize: '1.2rem'
                            }}
                            >
                                Add to cart
                            </Button>

                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
}

export default StadiumDetails;
