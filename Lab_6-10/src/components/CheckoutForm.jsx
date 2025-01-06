import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(20, "First name must be 20 characters or less")
            .required("First name is required"),
        lastName: Yup.string()
            .max(20, "Last name must be 20 characters or less")
            .required("Last name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        phone: Yup.string()
            .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
            .required("Phone number is required"),
        address: Yup.string().required("Address is required"),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        localStorage.setItem("checkoutData", JSON.stringify(values));
        setSubmitting(false);
        navigate("/success");
    };

    return (
        <Box sx={{ maxWidth: "500px",
            margin: "auto",
            padding: "2rem",
            backgroundColor: 'rgba(211, 211, 211, 0.8)',
            marginTop: 15,
        }}
        >
            <Typography variant="h4" sx={{
                color: "#ffffff",
                fontWeight: "bold"
            }}
            >
                Checkout
            </Typography>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    address: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            name="firstName"
                            as={TextField}
                            label="First Name"
                            fullWidth
                            margin="normal"
                        />
                        <ErrorMessage name="firstName" component="div">
                            {(msg) => <Alert severity="error">{msg}</Alert>}
                        </ErrorMessage>

                        <Field
                            name="lastName"
                            as={TextField}
                            label="Last Name"
                            fullWidth
                            margin="normal"
                        />
                        <ErrorMessage name="lastName" component="div">
                            {(msg) => <Alert severity="error">{msg}</Alert>}
                        </ErrorMessage>

                        <Field
                            name="email"
                            as={TextField}
                            label="Email"
                            fullWidth
                            margin="normal"
                        />
                        <ErrorMessage name="email" component="div">
                            {(msg) => <Alert severity="error">{msg}</Alert>}
                        </ErrorMessage>

                        <Field
                            name="phone"
                            as={TextField}
                            label="Phone Number"
                            fullWidth
                            margin="normal"
                        />
                        <ErrorMessage name="phone" component="div">
                            {(msg) => <Alert severity="error">{msg}</Alert>}
                        </ErrorMessage>

                        <Field
                            name="address"
                            as={TextField}
                            label="Address"
                            fullWidth
                            margin="normal"
                        />
                        <ErrorMessage name="address" component="div">
                            {(msg) => <Alert severity="error">{msg}</Alert>}
                        </ErrorMessage>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "1rem",
                            }}
                        >
                            <Button
                                variant="outlined"
                                onClick={() => navigate(-1)}
                            >
                                Go Back
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                            >
                                Continue
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default Checkout;