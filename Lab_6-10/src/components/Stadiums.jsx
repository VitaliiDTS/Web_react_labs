import React, { useState } from 'react';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, CircularProgress } from '@mui/material';
import StadiumCard from '../components/StadiumCard.jsx';
import useFetchStadiumsWithParams from "../hooks/useFetchStadiumsFiltered.js";

function Stadiums() {
    const [searchFilter, setSearchFilter] = useState('');
    const [seatsFilter, setSeatsFilter] = useState('');

    const { stadiums, loading, error } = useFetchStadiumsWithParams(searchFilter, seatsFilter);

    const handleSearchFilterChange = (event) => {
        setSearchFilter(event.target.value);
    };

    const handleSeatsFilterChange = (event) => {
        setSeatsFilter(event.target.value);
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <Box
            padding={{ xs: '25px', md: '25px 125px' }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="50px"
        >
            <Box display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="35px"
                sx={{
                    maxWidth: 1600,
                    margin: 'auto',
                    padding: 3,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 2,
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
                }}>

            <FormControl
                variant="outlined"
                size="small"
                sx={{
                    backgroundColor: "white",
                    borderRadius: 1,
                    minWidth: 140
                }}
            >
                <InputLabel>Seats Filter</InputLabel>
                <Select
                    label="Seats Filter"
                    value={seatsFilter}
                    onChange={handleSeatsFilterChange}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="<30000">Less than 30,000</MenuItem>
                    <MenuItem value=">30000">&gt; 30,000 and ≤ 50,000</MenuItem>
                    <MenuItem value=">50000">&gt; 50,000</MenuItem>
                </Select>
            </FormControl>

            <TextField
                label="Search Stadiums"
                variant="outlined"
                value={searchFilter}
                onChange={handleSearchFilterChange}
                fullWidth
                sx={{
                    marginBottom: '10px',
                    maxWidth: '600px',
                }}
            />
        </Box>

            {loading ? (
                <CircularProgress color="primary" size={60} />
            ) : (
                <>
                    <Grid container spacing={5}>
                        {stadiums.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={`stadium-${index}`}>
                                <StadiumCard
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    id={item.id}
                                    number_seats={item.seats}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Box>
    );
}

export default Stadiums;
