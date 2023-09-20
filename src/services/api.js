import axios from 'axios';

const API_KEY = 'bd79192c2d8dd1be421c2444d93a0d42';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response;
    }
}
