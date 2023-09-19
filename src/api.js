import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";
export const getData = async(url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}${url}`);

        return data;
    } catch (error) {
        console.error("Axios Error", error);
        throw error;
    }
}