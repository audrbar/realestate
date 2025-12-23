import axios from "axios";

export const baseUrl = 'https://uae-real-estate2.p.rapidapi.com';

export const fetchApi = async (url, method = 'GET', postData = null) => {
    const config = {
        method,
        url,
        headers: {
            'X-RapidAPI-Host': 'uae-real-estate2.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY,
        },
    };

    if (method === 'POST' && postData) {
        config.data = postData;
    }

    const { data } = await axios(config);
    return data;
}