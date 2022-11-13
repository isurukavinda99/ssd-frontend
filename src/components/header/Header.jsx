import {Box, IconButton, useTheme} from "@mui/material";
import {ColorModeContext, color} from "../../theme";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";


const Header = () => {
    const theme = useTheme();
    const colors = color();

    return (
        <Box display="flex" justifyContent="space-between" p={2}>

            <Box
                display="flex">
            </Box>

            <Box display="flex" justifyContent="space-between" p={2}>
                <Box display="flex">
                    <IconButton style={{color: colors.grey["100"]}}>
                        <SettingsOutlinedIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
