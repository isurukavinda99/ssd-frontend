import React, { useState} from "react";
import {Routes, Route, Outlet, useLocation, Navigate} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useTheme} from "./theme";
import Header from "./components/header/Header"
import Sidebar from "./components/sidenav/SideNav";
import EmpCreate from "./pages/account/EmpCreate";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Message from "./pages/message/Message"
import AddFile from "./pages/file/FileUpload"

//layout to add navigation bars
const MainLayout = () => {
    return (
        <>
            <div className="app">
                <Sidebar/>
                <main className="content">
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </main>
            </div>

        </>
    );
};


//check user type to navigate
const AuthLayout = ({allowedRoles}) => {

    const user = JSON.parse(localStorage.getItem('role')) || [];
    const [role] = useState(user);
    const location = useLocation();
    return (
        <div>
            {allowedRoles.includes(role[0])
                ? (<Outlet/>)
                : (<Navigate to="/" state={{from: location}} replace/>)}

        </div>
    );
};

//routes
function App() {
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route element={<AuthLayout allowedRoles={["ROLE_ADMIN"]}/>}>
                        <Route path="/create-acc" element={<EmpCreate/>}/>
                    </Route>
                    <Route element={<AuthLayout allowedRoles={["ROLE_USER","ROLE_MANAGER"]}/>}>
                        <Route path="/create-msg" element={<Message/>}/>
                    </Route>
                    <Route element={<AuthLayout allowedRoles={["ROLE_MANAGER"]}/>}>
                        <Route path="/file" element={<AddFile/>}/>
                    </Route>
                </Route>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
