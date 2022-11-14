import React, { Component }  from 'react';
import { Box, Button, TextField,Select,MenuItem,InputLabel,TextareaAutosize   } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { color } from "../../theme";
import {light} from "@mui/material/styles/createPalette";
import imag from "../../assets/log.jpg";

const FileUpload = () => {
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
        <Box  p={10} style={{backgroundColor:colors.other["color6"],marginLeft:"30%",width:"40%"}} sx={{ boxShadow: 3 }}>
            <h2 style={{color:colors.other["color1"]}} align={"center"}>Create Message</h2>

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
                                label="Message Title"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.userName}
                                name="msgTitle"
                                error={!!touched.msgTitle && !!errors.msgTitle}
                                helperText={touched.msgTitle && errors.msgTitle}
                                sx={{ gridColumn: "span 2"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                color="secondary"
                                autoComplete="off"
                                style = {{width: "100%"}}

                            />
                            <TextField
                                type="text"
                                label="Content"
                                multiline
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.content}
                                name="content"
                                error={!!touched.content && !!errors.content}
                                helperText={touched.content && errors.content}
                                sx={{ gridColumn: "span 2"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                color="secondary"
                                autoComplete="off"
                                style = {{width: "100%"}}
                            />

                        </Box>
                        <Box display="flex" justifyContent="center" mt="30px" >
                            <Button type="submit" color={"primary"} variant="contained">
                                Send
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};


const checkoutSchema = yup.object().shape({
    msgTitle: yup.string().required('Required'),
    content: yup.string().required('Required')

});
const initialValues = {
    msgTitle: "",
    content: "",
};

export default FileUpload;
