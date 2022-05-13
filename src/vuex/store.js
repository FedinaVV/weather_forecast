import {createStore} from 'vuex'
import axios from "axios";
import router from '@/router/router';

const store = createStore({

    state() {
        return {
            coordinates: {
                latitude: 0,
                longitude: 0
            },
            weather: {
                temperature: 0,
                weatherIcon: '',
                cloudiness: '',
                pressure: 0,
                humidity: 0,
                windSpeed: 0,
                windDirection: 0,
                dateTimeWeek: '',
                sunriseOfDay: '',
                sunsetOfDay: '',
                duration: ''
            },
            weatherOnWeek: [],
            cityName: '',
            addressBack: 'https://front-test.academy.smartworld.team/api/',
            token: '',
            WeatherCity: {
                temperature: 0,
                weatherIcon: '',
                cloudiness: '',
                pressure: 0,
                humidity: 0,
                windSpeed: 0,
                windDirection: 0,
                dateTimeWeek: '',
                cityName: '',
                sunriseOfDay: '',
                sunsetOfDay: '',
                duration: ''
            }
            }
    },
    mutations: {
        updateCoordinates(state, newCoordinates) {
            state.coordinates = newCoordinates.coords;
        },

        updateWeather(state, newWeather) {
            state.weather.temperature = Math.round(newWeather.current.temp) + " °C";
            state.weather.weatherIcon = `https://openweathermap.org/img/wn/${newWeather.current.weather[0].icon}@2x.png`;
            state.weather.cloudiness = newWeather.current.weather[0].description;
            state.weather.pressure = Math.round(newWeather.current.pressure * 0.75)  + " мм.рт.ст.";
            state.weather.humidity = newWeather.current.humidity + " %";
            state.weather.windSpeed = newWeather.current.wind_speed + " м/с";
            state.weather.windDirection = newWeather.current.wind_deg + " град.";
            state.weather.cityName = newWeather.timezone;
            state.weather.dateTimeWeek = new Date(newWeather.current.dt * 1000)
                .toLocaleString('ru', {day: 'numeric', month: 'numeric', year: 'numeric', hour:'numeric',minute:'numeric', weekday:'long'});
            state.weather.sunriseOfDay = new Date(newWeather.current.sunrise * 1000).toLocaleString('ru', {hour:'numeric',minute:'numeric'});
            state.weather.sunsetOfDay = new Date(newWeather.current.sunset * 1000).toLocaleString('ru', {hour:'numeric',minute:'numeric'});
            state.weather.duration = ((newWeather.current.sunset - newWeather.current.sunrise)/3600).toFixed(2);
        },

        updateWeatherSevenDays(state, newWeather) {
            this.state.weatherOnWeek = [];
            for (let i = 1; i < newWeather.daily.length; i++) {
                let dayWeather = {
                    date: new Date(newWeather.daily[i].dt * 1000).toLocaleString('ru', {day:'numeric', month:'numeric', year:'numeric',weekday:'long'}),
                    tempOnDays: Math.round(newWeather.daily[i].temp.day) + " °C",
                    iconWeatherOfDay: `https://openweathermap.org/img/wn/${newWeather.daily[i].weather[0].icon}@2x.png`,
                    cloudinessOnDays: newWeather.daily[i].weather[0].description,
                }
                this.state.weatherOnWeek.push(dayWeather);
            }
            console.log(state.weatherOnWeek);
        },

        updateToken(state, newToken){
           state.token = newToken;
            console.log(state.token);
        },

        updateWeatherForCity(state, newWeatherCity){
            state.WeatherCity.temperature = Math.round(newWeatherCity.main.temp) + " °C";
            state.WeatherCity.weatherIcon = `https://openweathermap.org/img/wn/${newWeatherCity.weather[0].icon}@2x.png`;
            state.WeatherCity.cloudiness = newWeatherCity.weather[0].description;
            state.WeatherCity.pressure = Math.round(newWeatherCity.main.pressure * 0.75)  + " мм.рт.ст.";
            state.WeatherCity.humidity = newWeatherCity.main.humidity + " %";
            state.WeatherCity.windSpeed = newWeatherCity.wind.speed + " м/с";
            state.WeatherCity.windDirection = newWeatherCity.wind.deg + " град.";
            state.WeatherCity.cityName = newWeatherCity.name;
            state.WeatherCity.dateTimeWeek = new Date(newWeatherCity.dt * 1000)
                .toLocaleString('ru', {day: 'numeric', month: 'numeric', year: 'numeric', hour:'numeric',minute:'numeric', weekday:'long'});
            state.weather.sunriseOfDay = new Date(newWeatherCity.sys.sunrise * 1000).toLocaleString('ru', {hour:'numeric',minute:'numeric'});
            state.weather.sunsetOfDay = new Date(newWeatherCity.sys.sunset * 1000).toLocaleString('ru', {hour:'numeric',minute:'numeric'});
            state.weather.duration = ((newWeatherCity.sys.sunset - newWeatherCity.sys.sunrise)/3600).toFixed(2);
        },

        updateCoordinatesCityById(state, coordinates){
            state.coordinates = coordinates;
        }

    },
    actions: {
        async getCoordinates(ctx) {
            return new Promise((resolve) => {
                navigator.geolocation.getCurrentPosition(newCoordinates => {
                    ctx.commit("updateCoordinates", newCoordinates)
                    resolve()
                })
            })
        },

        async getWeatherData(ctx, coordinates) {
            let address = 'https://api.openweathermap.org/data/2.5/onecall?lang=ru&exclude=hourly&units=metric&appid=49e8aefd3578c052ef9fa68f4642446e&';
            address += "lat=" + coordinates.latitude + "&lon=" + coordinates.longitude;
            const res = await fetch(address);
            const newWeather = await res.json();
            ctx.commit("updateWeather", newWeather);
            ctx.commit("updateWeatherSevenDays", newWeather);
            console.log(newWeather);

        },

        getToken(ctx, userData){
           return axios
               .post(this.state.addressBack + `api/login`,
                   {
                       headers: { 'Cache-Control' :  'no-cache',
                           'Postman-Token' : '<calculated when request is sent>',
                           'Content-type': 'application/json',
                           'Content-Length' : "<calculated when request is sent>",
                           "Host" : "<calculated when request is sent>"
                       },
                       'email': userData.username, 'password': userData.password})
               .then(response => {
                   ctx.commit("updateToken", response.data.data.authToken.token);
                   router.push('/');
                   },
               )
               .catch(err => {
                   alert("Неверный логин или пароль");
                   console.error(err);
                   this.state.token = '';
               })
       },


        async getCoordinatesCityById(ctx, id) {
            let address = 'https://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&appid=49e8aefd3578c052ef9fa68f4642446e&';
            address += "id=" + id;
            let res = await fetch(address);
            const newWeatherCity = await res.json();
           ctx.commit("updateWeatherForCity", newWeatherCity);
            console.log(newWeatherCity);
            let coordinates = {
                latitude: newWeatherCity.coord.lat,
                longitude: newWeatherCity.coord.lon,
            }
            ctx.commit("updateCoordinatesCityById", coordinates);
            console.log(coordinates);
        }

    }

});

export default store;