import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage";
import WeatherForecastPage from "@/pages/WeatherForecastPage";
import AuthorizationFormPage from "@/pages/AuthorizationFormPage";
import RegistrationFormPage from "@/pages/RegistrationFormPage";
import FavoriteCitiesPage from "@/pages/FavoriteCitiesPage";
import ListCitiesPage from "@/pages/ListCitiesPage";
import WeatherCityPage from "@/pages/WeatherCityPage";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/weatherForecastSevenDays',
        component: WeatherForecastPage
    },
    {
        path: '/authorization',
        component: AuthorizationFormPage
    },
    {
        path: '/registration',
        component: RegistrationFormPage
    },
    {
        path: '/favoriteCities',
        component: FavoriteCitiesPage
    },
    {
        path: '/listCities',
        component: ListCitiesPage
    },
    {
        path: '/weatherCity',
        component: WeatherCityPage
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;