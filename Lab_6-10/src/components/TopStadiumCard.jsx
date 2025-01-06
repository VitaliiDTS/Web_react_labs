import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function TopStadiumCard({ image, title, description }) {
    return (
        <Card sx={{maxWidth:350, borderRadius: 5, boxShadow: 4,}}>
            <CardMedia
                component="img"
                height="340"
                image={image}

            />
            <CardContent sx={{height:100, display: 'flex', flexDirection: 'column', gap: 2, backgroundColor:"#2A3843"}}>
                <Typography variant="h6" component="h2" sx={{fontSize: 25 ,fontWeight: 'bold', color:"white"}}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize: 15 ,fontWeight: 'bold', color:"white"}}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default TopStadiumCard;
