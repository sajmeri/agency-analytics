import {ITWNForecastPeriodData, ITWNWeatherData, IWeatherData, ICityWeatherData } from "../interfaces/WeatherData";

export const initialWeatherData = {
    obs: { dayName: "", wxIcon: "", wxCondition: "", temperature: "" },
    forecast:[ { dayName: "", wxIcon: "", temperature: "" }],
  };

export const getWeatherAPIURL = (city:string) => {
    const weatherAPI = {
        ottawa:
          "https://www.theweathernetwork.com/api/data/caon0512/cm/ci?ts=1252",
        moscow:
          "https://www.theweathernetwork.com/api/data/rsxx0063/cm/ci?ts=1232",
        tokyo:
          "https://www.theweathernetwork.com/api/data/jaxx0085/cm/ci?ts=1252",
      };
      type ObjectKey = keyof typeof weatherAPI;
      let url = weatherAPI[city as ObjectKey];
      return url;
}

export const filterWeatherData = (weatherData: ITWNWeatherData) => {
    const dataToStore:ICityWeatherData = initialWeatherData;
    
      dataToStore.obs.dayName = weatherData.obs.updatetime_stamp_gmt;
      dataToStore.obs.wxIcon = weatherData.obs.wxca;
      dataToStore.obs.wxCondition = weatherData.obs.wxc;
      dataToStore.obs.temperature = weatherData.obs.tc;
      dataToStore.forecast = [];
      weatherData.sevendays.periods.forEach((period:ITWNForecastPeriodData)=>{
        const currentPeriod:IWeatherData = {
            dayName:'',
            wxIcon: '',
            temperature: ''
        };
        currentPeriod.dayName = period.super_short_day;
        currentPeriod.wxIcon = period.itn;
        currentPeriod.temperature = period.tma;
        dataToStore.forecast.push(currentPeriod);
      })

      return dataToStore;
}
