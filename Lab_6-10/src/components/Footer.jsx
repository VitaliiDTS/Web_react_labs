import { Box, Grid, Typography, Link, Divider } from "@mui/material";
import logo from "../assets/stadium.svg";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Box width="100%">
            <Grid container alignItems="center" spacing={0}>
                <Grid item xs={12} md={6} sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                }}>
                    <Typography variant="h4" component="h1" sx={{
                        color: "#ffffff",
                        fontWeight: "bold",
                        marginBottom: 1
                    }}>
                        Stadium
                    </Typography>
                    <Typography
                        variant="body1"
                        color="#ffffff"
                        sx={{
                            whiteSpace: 'normal',
                            fontSize: 15,
                            maxWidth: '320px',
                            fontWeight: 'bold',
                        }}
                    >
                        The stadium is the heart of excitement, where fans become one family.
                        Dreams are born here, and victory is felt in every moment.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={2} container justifyContent="center" sx={{ paddingRight: 35 }}>
                    <img src={logo} alt="logo" height="55" width="55" className="Footer__logo" />
                </Grid>

                <Grid item xs={12} md={4} container justifyContent="flex-end" spacing={1}>
                    <Link href="#" sx={{ color: "white" }}>
                        <InstagramIcon fontSize="large" />
                    </Link>
                    <Link href="#" sx={{ color: "white" }}>
                        <FacebookIcon fontSize="large" />
                    </Link>
                    <Link href="#" sx={{ color: "white" }}>
                        <TwitterIcon fontSize="large" />
                    </Link>
                    <Link href="#" sx={{ color: "white" }}>
                        <LinkedInIcon fontSize="large" />
                    </Link>
                </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: "#ffffff", marginY: 2 }} />

            <Box sx={{ marginTop: 2 }}>
                <Typography component="p" variant="body2" sx={{ fontSize: 15, fontWeight: 'bold', color: "white" }}>
                    {new Date().getFullYear()} &copy; Copyright all rights reserved
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
