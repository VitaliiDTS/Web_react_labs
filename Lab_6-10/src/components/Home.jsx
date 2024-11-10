import { Container, Grid, Typography, Button,  Box, Collapse } from '@mui/material';
import  {useState} from 'react';

import TopStadiums from "./TopStadiums.jsx";

function  Home()  {



    const [showText, setShowText] = useState(false);

    const handleViewMore = () => {
        setShowText(!showText);
    };

    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                marginTop: 10,
                marginBottom:20
            }}
        >
            <Box
                padding={{ xs: '25px', md: '25px 125px' }}
                sx={{ display: 'flex', flexDirection: "row", gap: 15 }}
            >
                <Box sx={{ textAlign: "left", display: "flex", flexDirection: "column", gap: 1}}>
                    <Typography variant="h3" component="h1" sx={{ color: "#ffffff", fontWeight: "bold"}} gutterBottom>
                        Stadium
                    </Typography>
                    <Typography
                        variant="body1"
                        color="#ffffff"
                        sx={{
                            whiteSpace: 'normal',
                            fontSize: 20,
                            maxWidth: '600px',
                            fontWeight: 'bold',
                        }}
                    >
                        The stadium is the heart of excitement, where fans become one family.
                        Dreams are born here, and victory is felt in every moment.
                    </Typography>

                </Box>
            </Box>

            <TopStadiums />

            <Box sx={{ display: 'flex',
                justifyContent: 'center',
                alignItems:"center",
                marginTop: 5,
                flexDirection:"column",
                gap: 5 }}>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleViewMore}
                    sx={{ padding: '12px 24px', fontSize: '1.2rem' }}
                >
                    View more
                </Button>

                <Collapse in={showText} timeout="auto" unmountOnExit  sx={{
                    display: 'flex',
                    backgroundColor: 'rgba(211, 211, 211, 0.8)',
                    padding: '20px 50px',

                }}

                >
                    <Typography variant="h6" style={{ marginTop: '20px', fontSize:25, fontWeight: "bold" }}>Stadiums: Places that Unite</Typography>
                    <Typography variant="body1" sx={{
                        whiteSpace: 'normal',
                        fontSize: 20,
                        maxWidth: '600px',
                        fontWeight: 400,
                        marginTop: '10px'
                    }}
                    >
                        Stadiums are not just venues for sports competitions; they are important cultural centers
                        where people come together to support their teams, feel a sense of unity, and create unforgettable memories.
                        The world’s largest stadiums, such as Camp Nou in Barcelona or Wembley in London, impress with their architecture and scale.
                        Equipped with modern technology, they provide comfort and safety for spectators and offer various amenities,
                        from restaurants to interactive museums.
                    </Typography>
                </Collapse>
            </Box>
        </Container>
    );
};

export default Home;
