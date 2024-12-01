import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux_elements/cartSlice';
import {Box, Typography, IconButton, CardMedia, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({ id, name, image, price, quantity }) {
    const dispatch = useDispatch();

    const handleIncrement = () => dispatch(incrementQuantity(id));
    const handleDecrement = () => dispatch(decrementQuantity(id));
    const handleRemove = () => dispatch(removeFromCart(id));

    const totalPrice = price * quantity;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'rgba(211, 211, 211, 0.8)',
                borderRadius: 5,
                boxShadow: 4,
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                }}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    sx={{
                        objectFit: 'cover',
                        borderRadius: 5,
                        maxWidth: 300,
                    }}
                />
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: 'black',
                        maxWidth: 350,
                        whiteSpace: 'nowrap',
                    }}
                >
                    {name} stadium ticket
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <IconButton onClick={handleDecrement} color="primary">
                    <RemoveIcon />
                </IconButton>

                <Typography
                    variant="h4"
                    sx={{
                        fontSize: 24,
                        color: 'black',
                    }}
                >
                    {quantity}
                </Typography>

                <IconButton onClick={handleIncrement} color="primary">
                    <AddIcon />
                </IconButton>

                <Typography
                    variant="h4"
                    sx={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'green',
                        whiteSpace: 'nowrap',
                    }}
                >
                    ${totalPrice.toFixed(2)}
                </Typography>

                <IconButton onClick={handleRemove} color="error">
                    <DeleteIcon />
                </IconButton>
            </Box>


        </Box>
    );
}

export default CartItem;
