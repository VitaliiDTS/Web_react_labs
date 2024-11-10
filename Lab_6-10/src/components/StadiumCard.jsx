import React  from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function StadiumCard({ image, title, description, id, number_seats }) {
    const navigate = useNavigate();

    const handleViewMoreClick = () => {
        navigate(`/stadium/${id}`);
    };


    return (
        <Card sx={{
            maxWidth: 300,
            borderRadius: 5,
            boxShadow: 4,
            backgroundColor: "#2A3843",
            overflow: 'hidden'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#1A1F28',
                color: "white",
                fontSize: 22,
                fontWeight: 'bold',
                padding: 2,
                textAlign: 'center',
            }}>
                Stadium {id}
            </Box>
            <CardMedia
                component="img"
                height="200"
                image={image}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{
                height: 120,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                backgroundColor: "#2A3843"
            }}>
                <Typography variant="h6" component="h2" sx={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: "white"
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    fontSize: 14,
                    color: "white",
                    lineHeight: 1.5
                }}>
                    {description}
                </Typography>
            </CardContent>

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 1.5
            }}>
                <Typography sx={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: "white"
                }}>
                    Seats:
                </Typography>
                <Typography sx={{
                    fontSize: 16,
                    color: "white"
                }}>
                    {number_seats}
                </Typography>
            </Box>

            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    padding: '5px 40px',
                    fontSize: '1rem',
                    margin: 2,
                    '&:hover': {
                        backgroundColor: '#115293'
                    }
                }}
                onClick={handleViewMoreClick}
            >
                View More
            </Button>
        </Card>
    );
}

export default StadiumCard;
