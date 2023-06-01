import { API_BASE_URL } from "../config";
import axios from "axios";

const handleApiCall = async (endpoint, options) => {
    const url = `${API_BASE_URL}/${endpoint}`;
    
    try {
        const { data } = await axios(url, options);
        return data;
    } catch (error) {
        throw error;
    }
};

export { handleApiCall };