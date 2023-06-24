import { API_BASE_URL } from "../config";
import axios from "axios";

const handleApiCall = async (endpoint, options) => {
    // url is either localhost or hosted api url based on environment
    const url = process.env === "production" ? 
        `${API_BASE_URL}/${endpoint}`
        :
        `/${endpoint}`

    try {
        const { data } = await axios(url, options);
        return data;
    } catch (error) {
        throw error;
    }
};

export { handleApiCall };