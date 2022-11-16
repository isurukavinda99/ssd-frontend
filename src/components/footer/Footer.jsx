import React from 'react';
import {Box} from "@mui/material";
import {color} from "../../theme";


//Footer component
const Footer = () => {
    const colors = color();
    let date  = new Date().getFullYear();

    return (


        <Box display="flex" justifyContent="center" p={2} style={{color: colors.grey["900"],marginTop:"180px"}}>
                <Box display="flex">
                   <h4>All rights reserved  {date}</h4>
                </Box>
        </Box>



    );
};

export default Footer;
