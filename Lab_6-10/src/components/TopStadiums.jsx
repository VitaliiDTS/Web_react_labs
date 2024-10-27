import React from 'react';
import { Box, Grid} from '@mui/material';
import TopStadiumCard from '../components/TopStadiumCard.jsx';

import Wembley from '../assets/wembley.jpg';
import SanSiro from '../assets/san_siro.jpg';
import SantiagoBernabeo from '../assets/santiago_bernabeo.jpg';

const stadiumList = [
    {
        image: Wembley,
        title: "Wembley",
        description: "One of the best stadiums. Top stadium",
    },
    {
        image: SanSiro,
        title: "San Siro",
        description: "One of the best stadiums. Top stadium",
    },
    {
        image: SantiagoBernabeo,
        title: "Santiago Bernabeu",
        description: "One of the best stadiums. Top stadium",
    },
];

function TopStadiums() {
    return (
        <Box
            padding={{ xs: '25px', md: '25px 125px' }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="50px"
        >
            <Grid container spacing={5}>
                {stadiumList.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={`stadium-${index}`}>
                        <TopStadiumCard
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default TopStadiums;
