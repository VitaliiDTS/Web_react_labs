import React from "react";
import { Box, Typography, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();

    const checkoutData = JSON.parse(localStorage.getItem("checkoutData")) || {};

    return (
        <Box sx={{ textAlign: "center",
            padding: "2rem",
            backgroundColor: 'rgba(211, 211, 211, 0.8)',
            marginTop: 16,
            marginBottom: 15,
        }}>
            <Typography variant="h3" gutterBottom>
                Success!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Your order was sent to processing!
            </Typography>
            <Typography variant="body2" gutterBottom>
                Check your email box for further information.
            </Typography>
            <Alert severity="success" sx={{ marginY: "1rem" }}>
                <strong>Order Details:</strong>
                <br />
                Name: {checkoutData.firstName} {checkoutData.lastName}
                <br />
                Email: {checkoutData.email}
                <br />
                Phone: {checkoutData.phone}
                <br />
                Address: {checkoutData.address}
            </Alert>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}
            >
                Go back to Catalog
            </Button>
        </Box>
    );
};

export default Success;
