import axios from "axios";

const API_URL = "https://localhost:8443/api/v1/file/upload";

//file upload
export const file = (values) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        return axios.post(API_URL, values, {
            headers: {
                'Authorization': "Bearer " + token,
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};

