import React, {useState} from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import {Box, IconButton, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {color} from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import imag1 from "../../assets/profile1.png"


//Side Navigation Component
const Item = ({title, to, icon, selected, setSelected}) => {
    const colors = color();
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    );
};

const Sidebar = () => {
    const colors = color();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const user = JSON.parse(localStorage.getItem('role')) || [];
    const [role] = useState(user);
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.other["color1"]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.other["color2"],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="88px"
                            >
                                {role.includes("ROLE_ADMIN")
                                    ? (<Typography variant="h3" color={colors.grey[100]}>
                                        ADMIN
                                    </Typography>) :
                                    (role.includes("ROLE_MANAGER"))
                                        ? (<Typography variant="h3" color={colors.grey[100]}>
                                            Manager
                                        </Typography>) :
                                        (<Typography variant="h3" color={colors.grey[100]}>
                                            User
                                        </Typography>)

                                }
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={imag1}
                                    style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        {role.includes("ROLE_ADMIN")
                            ? (<Item
                            title="Create Account"
                            to="/create-acc"
                            icon={<AccountCircleIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />):(role.includes("ROLE_MANAGER")||role.includes("ROLE_USER"))?(
                        <Item
                            title="Add Message"
                            to="/create-msg"
                            icon={<AccountCircleIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />):(<></>)}

                        {role.includes("ROLE_MANAGER")?(
                        <Item
                            title="Add file"
                            to="/file"
                            icon={<AccountCircleIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />):(<></>)}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
