import { Container, Grid, Typography, Button,  Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import TopStadiums from "./TopStadiums.jsx";

const Home = () => {
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate('/stadiums');
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
                <Box sx={{ textAlign: "left", display: "flex", flexDirection: "column", gap: 1 }}>
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
                    <Box sx={{ display: 'flex', justifyContent: 'left', marginTop: 5 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleViewMore}
                            sx={{ padding: '12px 24px', fontSize: '1.2rem' }}
                        >
                            View more
                        </Button>
                    </Box>
                </Box>
            </Box>

            <TopStadiums />
        </Container>
    );
};

export default Home;
