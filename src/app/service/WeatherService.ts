import axios from "axios";
import { serviceWeather } from "../config/config";
import { IWttr } from "../interfaces/IWttr";

class WeatherService {
    weatherForecast(city: string, language: string): Promise<IWttr> {
        return new Promise(async (resolve, reject) => {
            try {
                const weatherService = serviceWeather(city, language);

                const { data } = await axios.get<IWttr>(weatherService.wttr);
            
                resolve(data);
            } catch(e) {
                reject(e);
            };
        });
    };
};

export default new WeatherService();