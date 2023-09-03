/* Import */
import axios, { AxiosInstance } from "axios";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { VITE_SERVER_URL } = import.meta.env;

// ----------------------------------------------------------------------------------------------------

/* API Instance */
const instance: AxiosInstance = axios.create({
    baseURL: VITE_SERVER_URL as string,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": `http://localhost:5173`,
        "Access-Control-Allow-Credentials": true,
    },
    withCredentials: true,
});

// ----------------------------------------------------------------------------------------------------

/* Export */
export default instance;
