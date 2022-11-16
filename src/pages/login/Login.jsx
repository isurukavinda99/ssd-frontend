import React from 'react';
import { Box, Button, TextField} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { color } from "../../theme";
import imag from  "../../assets/log.jpg"
import {login} from "../../apis/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

//login form
const Login = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const colors = color();
    const navigate = useNavigate();

    const handleFormSubmit = (values) => {
        login(values).then(r => {
            if(r.roles.includes("ROLE_ADMIN"))
            {
                navigate("/create-acc");
            }
            else if(r.roles.includes("ROLE_MANAGER"))
            {
                navigate("/file");
            }
            else if(r.roles.includes("ROLE_USER"))
            {
                navigate("/create-msg");
            }
            else {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                navigate("/");
            }
            console.log(r)
        }).catch(()=>{
            showToastMessage();
        })
    };

    const showToastMessage = () => {
        toast.error('Login Error !');
    };


    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
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
        </div>
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
