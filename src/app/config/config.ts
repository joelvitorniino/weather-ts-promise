export const serviceWeather = (city: string, language: string) => {
    const objServiceWeather = {
        wttr: `https://wttr.in/${city}?format=j1&lang=${language}`,
    };
    
    return objServiceWeather;
};