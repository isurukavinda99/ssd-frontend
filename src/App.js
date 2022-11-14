
import React,{useState} from "react";
import {Routes, Route,Outlet} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useTheme} from "./theme";
import Header from "./components/header/Header"
import Sidebar from "./components/sidenav/SideNav";
import EmpCreate from "./pages/account/EmpCreate";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Message from "./pages/message/Message"
import AddFile from "./pages/file/FileUpload"

const AuthLayout = () => {
    return (
        <>
            <div className="app">
                <Sidebar/>
                <main className="content">
                    <Header/>
                    <Outlet />
                    <Footer/>
                </main>
            </div>

        </>
    );
};


function App() {
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/create-acc" element={<EmpCreate />} />
                    <Route path="/create-msg" element={<Message />} />
                    <Route path="/file" element={<AddFile />} />
                </Route>
                <Route path="/" element={<Login />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
