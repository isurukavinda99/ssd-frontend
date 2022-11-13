import {Box, IconButton, useTheme} from "@mui/material";
import {ColorModeContext, color} from "../../theme";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Header = () => {
    const theme = useTheme();
    const colors = color();
    let date  = new Date().getFullYear();
    return (


            <Box display="flex" justifyContent="center" p={2} style={{color: colors.grey["100"]}}>
                <Box display="flex">
                    <CopyrightIcon/>
                   <h5>All rights reserved  {date}</h5>
                </Box>
            </Box>

    );
};

export default Header;
