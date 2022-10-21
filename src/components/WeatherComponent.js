import React from "react";
import WeatherService from "../services/WeatherService";

class WeatherComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            weather:{},
            city: '',
            lon:0.0,
            lat:0.0
        }
    }

    getWeatherByCity = (event) => {
        event.preventDefault();
        WeatherService.getWeatherDataByCityName(this.state.city).then((response) => {
            this.setState({weather: response.data})
        });
    }

    getWeatherByLongitudeLatitude = (event) => {
        event.preventDefault();
        WeatherService.getWeatherDataByLonLat(this.state.lon, this.state.lat).then((response) => {
            this.setState({weather: response.data})
        });
    }

    render(){
        const weatherData = this.state.weather;
        return(
            <div>
                <h1 className="text-center"><span class="badge bg-success">Weather Check</span></h1>
                <form onSubmit={this.getWeatherByCity}>
                    <input type='text' placeholder="Enter city name" onChange={(event) => {
                        this.setState({city: event.target.value})
                    }} />
                    <button type='submit' class="btn btn-primary">Search</button>
                </form>

                <form onSubmit={this.getWeatherByLongitudeLatitude}>
                    <input type='text' placeholder="Enter Longitude" onChange={(event) => {
                        this.setState({lon: event.target.value})
                    }} />
                    <input type='text' placeholder="Enter Latitude" onChange={(event) => {
                        this.setState({lat: event.target.value})
                    }} />
                    <button type='submit'class="btn btn-primary">Search</button>
                </form>
                <table class='table table-striped-columns'>
                <thead>
                    <tr class="table-secondary">
                        <td>City</td>
                        <td>Weather</td>
                        <td>Weather Description</td>
                        <td>Longitude</td>
                        <td>Latitude</td>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                                <tr class="table-success">
                                    <td>{weatherData.city}</td>
                                    <td>{weatherData.weather}</td>
                                    <td>{weatherData.description}</td>
                                    <td>{weatherData.longitude}</td>
                                    <td>{weatherData.latitude}</td>
                                </tr>
                </tbody>
                </table>
            </div>
        )
    }
}

export default WeatherComponent;