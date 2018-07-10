import axios from "axios";

const API_KEY = "3a8b2015224aac4238b0607cd353672d";

function getCurrentWeather(city) {
    return axios.get(` http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&type=accurate&APPID=${API_KEY}`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
}

function getForecast(city) {
    return axios.get(` http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&type=accurate&APPID=${API_KEY}&cnt=5`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
}



export default {
    getCurrentWeather,
    getForecast
};