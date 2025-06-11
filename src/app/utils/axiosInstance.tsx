import axios from "axios";

export const getAxiosInstance = () => {
    axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        headers: {
            "Content-Type": "applications/json",
        },
    });
}