import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useTheme} from "./theme";
import Header from "./components/header/Header"
import Sidebar from "./components/sidenav/SideNav";
import Dashboard from "./pages/dashboard/DashBoard";
import Footer from "./components/footer/Footer";

function App() {
    const theme = useTheme();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
                <Sidebar isSidebar={isSidebar}/>
                <main className="content">
                    <Header setIsSidebar={setIsSidebar}/>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                    <Footer/>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;
