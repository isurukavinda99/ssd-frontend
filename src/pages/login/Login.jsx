import React, { Component }  from 'react';
import { Box, Button, TextField,Select,MenuItem,InputLabel,Card,Avatar,Paper,Typography,CardContent,CardActions } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { color } from "../../theme";
import imag from  "../../assets/log.jpg"

const Login = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const colors = color();

    const styles = theme => ({
        select: {
            '&:before': {
                borderColor: color,
            },
            '&:after': {
                borderColor: color,
            }
        },
        icon: {
            fill: color,
        },
    });



    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (

        <Box  p={10} style={{backgroundColor:colors.other["color6"],marginLeft:"750px",marginTop:"40px",width:"30%"}} sx={{ boxShadow: 3 }}>
            <img
                alt="login"
                width="400px"
                height="400px"
                src={imag}
                style={{ cursor: "pointer", borderRadius: "100%",marginLeft:"25px" }}
            />
            <h2 style={{color:colors.other["color1"]}} align={"center"}>Sign-in</h2>


            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit} >
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                            }}
                        >

                            <TextField
                                type="text"
                                label="User Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.userName}
                                name="userName"
                                error={!!touched.userName && !!errors.userName}
                                helperText={touched.userName && errors.userName}
                                sx={{ gridColumn: "span 2"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                color="secondary"
                                autoComplete="off"
                                style = {{width: "100%"}}

                            />
                            <TextField
                                type="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 2"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                color="secondary"
                                autoComplete="off"
                                style = {{width: "100%"}}
                            />

                        </Box>
                        <Box display="flex" justifyContent="center" mt="30px" >
                            <Button type="submit" color={"primary"} variant="contained" >
                                Sign-In
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};


const checkoutSchema = yup.object().shape({
    userName: yup.string().required('Required'),
    password: yup.string().required('Required')

});
const initialValues = {
    userName: "",
    password: "",
};

export default Login;
