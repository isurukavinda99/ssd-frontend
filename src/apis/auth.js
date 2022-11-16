import axios from "axios";

const API_URL = "https://localhost:8443/api/v1/auth/";

//registration
export const register = (values) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return axios.post(API_URL + "sign_up", values, {
            headers: {
                'Authorization': "Bearer " + token,
                "Content-Type": "application/json"
            }
        }
    );
};

//login
export const login = (value) => {

    return axios
        .post(API_URL + "sign_in", value, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then((response) => {
            if (response.data.jwt) {
                localStorage.setItem("token", JSON.stringify(response.data.jwt));
                localStorage.setItem("role", JSON.stringify(response.data.roles));
            }
            return response.data;
        });
};


