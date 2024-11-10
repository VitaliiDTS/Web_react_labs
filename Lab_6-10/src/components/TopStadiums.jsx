import React from 'react';
import {Box, CircularProgress, Grid} from '@mui/material';
import TopStadiumCard from '../components/TopStadiumCard.jsx';
import useFetchStadiums from "../hooks/useFetchStadiums.js";

function TopStadiums() {
    const { stadiums, loading, error } = useFetchStadiums();


    const itemsToDisplay = stadiums.slice(0, 3);

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
            {loading ? (
                <CircularProgress color="primary" size={60} />
            ) : (
            <Grid container spacing={5}>
                {itemsToDisplay.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={`stadium-${index}`}>
                        <TopStadiumCard
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    </Grid>
                ))}
            </Grid>

                )}
        </Box>
    );
}

export default TopStadiums;
