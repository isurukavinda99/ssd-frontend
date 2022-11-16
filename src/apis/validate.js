import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

const AuthVerify = () => {
    let navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));

        if (token) {
            const decodedJwt = parseJwt(token);

            if (decodedJwt.exp * 1000 < Date.now()) {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                navigate("/");
            }
        }
    }, []);


};

export default AuthVerify;