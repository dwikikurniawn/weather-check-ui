import axios from 'axios'

const API_URL='https://city-weather-check-app.herokuapp.com/weather';

class WeatherService {

    getWeatherDataByCityName(city){
        return axios.get(API_URL,{
            params:{
                city: city
            }
        });
    }

    getWeatherDataByLonLat(lon, lat){
        return axios.get(API_URL+'/coordinate', {
            params:{
                lon: lon,
                lat: lat
            }
        });
    }
}

export default new WeatherService();