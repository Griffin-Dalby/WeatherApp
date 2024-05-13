// SETTINGS
const apiUrl = 'https://api.open-meteo.com/v1/forecast'

// IMPORTS
import axios, { Axios } from 'axios';

// CODE
async function GetWeather() {
    try {
        const Response = axios({
            method: 'get',
            url: apiUrl,

            data: {
                latitude: 0,
                longitude: 0,
            }
        })


    } catch(error) {

    }
}