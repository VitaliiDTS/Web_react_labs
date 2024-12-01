import React from "react"
import { useSelector} from "react-redux"
import {Box, Button, Typography,} from '@mui/material';
import CartItem from "./CartItem.jsx";
import { useNavigate } from "react-router-dom";


function Cart() {
    const tickets = useSelector((state) => state.cart.items);
    const navigate = useNavigate();

    const handleGoBack = () => navigate("/stadiums");

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginTop: 10,
            marginBottom:20 }}
        >

            <Typography variant="h2" sx={{
                color: "#ffffff",
                fontWeight: "bold"
            }}
            >
                Shopping Cart
            </Typography>

            {tickets.map((ticket) => (
                <CartItem key={ticket.id}
                          id={ticket.id}
                          name={ticket.name}
                          image={ticket.image}
                          price={45}
                          quantity={ticket.quantity} />
            ))}

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems:"center",
                justifyContent:"space-between",
                marginTop:15,
            }}
            >
                <Button variant="contained" color="primary" onClick={handleGoBack} sx={{
                    padding: '10px 35px',
                    fontSize: '1.2rem'
                }}
                >
                    Back to Catalog
                </Button>

                <Button variant="contained" color="primary"
                        sx={{
                            padding: '10px 35px',
                            fontSize: '1.2rem'
                        }}
                >
                    Continue
                </Button>
            </Box>
        </Box>
    );
}



export default Cart;
