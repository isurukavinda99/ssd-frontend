import React  from 'react';
import {Box, IconButton} from "@mui/material";
import {color} from "../../theme";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { useNavigate } from "react-router-dom";

//Header component
const Header = () => {
    const colors = color();
    const navigate = useNavigate();

    //logout
   const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    };



    return (
        <Box display="flex" justifyContent="space-between" p={2}>

            <Box
                display="flex">
            </Box>

            <Box display="flex" justifyContent="space-between" p={2}>
                <Box display="flex">
                    <IconButton style={{color: colors.grey["900"]}} onClick={logout}>
                        <SettingsOutlinedIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
