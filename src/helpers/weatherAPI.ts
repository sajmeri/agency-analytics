import {ITWNForecastPeriodData, ITWNWeatherData, IWeatherData, ICityWeatherData } from "../interfaces/WeatherData";

export const initialWeatherData = {
    obs: { dayName: "", wxIcon: "", wxCondition: "", temperature: "" },
    forecast:[ { dayName: "", wxIcon: "", wxCondition: "", temperature: "" }],
  };

export const WeatherCitiesAndUrls =  {
  ottawa:
    "https://www.theweathernetwork.com/api/data/caon0512/cm/ci?ts=1252",
  moscow:
    "https://www.theweathernetwork.com/api/data/rsxx0063/cm/ci?ts=1232",
  tokyo:
    "https://www.theweathernetwork.com/api/data/jaxx0085/cm/ci?ts=1252",
}
export const getWeatherAPIURL = (city:string) => {
      type ObjectKey = keyof typeof WeatherCitiesAndUrls;
      let url = WeatherCitiesAndUrls[city as ObjectKey];
      return url;
}
export const filterWeatherData = (weatherData: ITWNWeatherData) => {
    const dataToStore:ICityWeatherData = initialWeatherData;
    
      dataToStore.obs.dayName = weatherData.obs.updatetime_stamp_gmt;
      dataToStore.obs.wxIcon = weatherData.obs.icon;
      dataToStore.obs.wxCondition = weatherData.obs.wxc;
      dataToStore.obs.temperature = weatherData.obs.tc;
      dataToStore.forecast = [];

      //Application needs only 4 day worth of data
      const fourDayData = weatherData.sevendays.periods.slice(0,4);

      fourDayData.forEach((period:ITWNForecastPeriodData)=>{
        const currentPeriod:IWeatherData = {
            dayName:'',
            wxIcon: '',
            wxCondition: '',
            temperature: ''
        };
        currentPeriod.dayName = period.super_short_day;
        currentPeriod.wxIcon = period.ida;
        currentPeriod.wxCondition = period.itd;
        currentPeriod.temperature = period.tma;
        dataToStore.forecast.push(currentPeriod);
      })

      return dataToStore;
}
