import React  from 'react';
import { Box, Button, TextField} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { color } from "../../theme";
import {file} from "../../apis/file";
import {toast, ToastContainer} from "react-toastify";

//upload new file
const FileUpload = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const colors = color();


    const handleFormSubmit = (values) => {
        file(values).then(() => {
            toast.success('🦄 New File Added!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }).catch(()=>{
            toast.error('🦄 Error', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })

    };

    return (
        <Box  p={10} style={{backgroundColor:colors.other["color6"],marginLeft:"30%",width:"40%"}} sx={{ boxShadow: 3 }}>
            <h2 style={{color:colors.other["color1"]}} align={"center"}>Add File</h2>
            <ToastContainer/>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({

                      errors,
                      touched,
                      handleBlur,
                      setFieldValue,
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
                                type="file"
                                onBlur={handleBlur}
                                onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0]);
                                }}
                                name="file"
                                error={!!touched.file && !!errors.file}
                                helperText={touched.file && errors.file}
                                sx={{ gridColumn: "span 2"}}
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                color="secondary"
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
    file: yup
        .mixed()
        .required("A file is required")
        .test(
            "fileSize",
            "File too large",
            value => value && value.size <= (16*1024*1024)
        )


});
const initialValues = {
    file:null
};

export default FileUpload;
