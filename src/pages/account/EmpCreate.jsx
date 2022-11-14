import React, { Component }  from 'react';
import { Box, Button, TextField,Select,MenuItem,InputLabel   } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { color } from "../../theme";

const FormEmp = () => {
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
        <Box m="20px" p="40px" style={{backgroundColor:colors.other["color6"]}} sx={{ boxShadow: 3 }}>
           <h2 style={{color:colors.other["color1"]}} align={"center"}>New Employee Account</h2>

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
                            marginLeft={28}
                            gridTemplateColumns="repeat(8, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                color="secondary"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 3"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                autoComplete="off"
                            />

                            <TextField
                                fullWidth
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 3"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                color="secondary"
                                autoComplete="off"

                            />
                            <TextField
                                fullWidth
                                type="text"
                                label="User Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.username}
                                name="username"
                                error={!!touched.username && !!errors.username}
                                helperText={touched.username && errors.username}
                                sx={{ gridColumn: "span 3"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                color="secondary"
                                autoComplete="off"

                            />
                            <TextField
                                fullWidth
                                type="email"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 3"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                color="secondary"
                                autoComplete="off"
                            />
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 3"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                color="secondary"
                                autoComplete="off"
                            />
                            <TextField
                                fullWidth
                                type="password"
                                label="Re enter password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.passwordRe}
                                name="passwordRe"
                                error={!!touched.passwordRe && !!errors.passwordRe}
                                helperText={touched.passwordRe && errors.passwordRe}
                                sx={{ gridColumn: "span 3"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                color="secondary"
                                autoComplete="off"
                            />

                            <Select
                                name="role"
                                sx={{ gridColumn: "span 3"}}
                                value={values.role}
                                onChange={handleChange}
                                error={!!touched.role && !!errors.role}
                                onBlur={handleBlur}
                                fullWidth
                            >
                                <MenuItem value="MANAGER" label="manager" >
                                    manager
                                </MenuItem>
                                <MenuItem value="USER" label="user">
                                    user
                                </MenuItem>
                                >
                            </Select>

                        </Box>
                        <Box display="flex" justifyContent="center" mt="30px" >
                            <Button type="submit" color="secondary" variant="contained">
                                Create New Employee
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};


const checkoutSchema = yup.object().shape({
    username: yup.string()
        .min(5,"Minimum 5 characters need")
        .max(15,"Input 15 characters or below")
        .required('Required'),
    password: yup.string()
        .required('Required')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .max(20,"Input 20 characters or below")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    passwordRe: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match').required('Required'),

    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    role:yup.string().required("required")
});
const initialValues = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRe: "",
    role:""
};

export default FormEmp;
