import React, { Component }  from 'react';
import {Box, IconButton} from "@mui/material";
import {color} from "../../theme";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";


const Header = () => {
    const colors = color();

    return (
        <Box display="flex" justifyContent="space-between" p={2}>

            <Box
                display="flex">
            </Box>

            <Box display="flex" justifyContent="space-between" p={2}>
                <Box display="flex">
                    <IconButton style={{color: colors.grey["900"]}}>
                        <SettingsOutlinedIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
