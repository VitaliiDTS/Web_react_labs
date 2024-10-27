import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import stadiumLogo from "../assets/stadium.svg";

function Header() {
    return (
        <Box
            height="80px"
            width="100%"
            padding={{ xs: "10px 20px", md: "10px 100px" }}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            position="fixed"
            top="0"
            left="0"
            boxShadow={4}
            zIndex={1000}
        >
            <img height={60} width={60} src={stadiumLogo}  alt="Logo" />

            <Box
                columnGap="30px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{paddingRight:35}}
                flexGrow={1}
            >
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography
                        color="#FFFFFF"
                        fontFamily="'Roboto', sans-serif"
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            padding: '10px 20px',
                            '&:hover': {
                                color: '#0280E2',
                                transition: 'color 0.3s ease'
                            }
                        }}
                    >
                        Home
                    </Typography>
                </Link>
                <Link to="/stadiums" style={{ textDecoration: 'none' }}>
                    <Typography
                        color="#FFFFFF"
                        fontFamily="'Roboto', sans-serif"
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            padding: '10px 20px',
                            '&:hover': {
                                color: '#0280E2',
                                transition: 'color 0.3s ease'
                            }
                        }}
                    >
                        Stadiums
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
}

export default Header;
