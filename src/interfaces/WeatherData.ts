export interface ITWNForecastPeriodData{
    super_short_day: string,
    ida:string,
    itd: string,
    tma: string
}
export interface ITWNWeatherData{
    obs: {updatetime_stamp_gmt: string, icon: string, wxc:string, tc:string},
    sevendays: {
        periods: ITWNForecastPeriodData[]
    },
  }

export interface IWeatherData{
    dayName: string,
    wxIcon: string,
    wxCondition: string,
    temperature: string
}
export interface ICityWeatherData{
    obs: IWeatherData,
    forecast: IWeatherData[]
}

export interface IApplicationState {
    loading: boolean;
    weatherData: ICityWeatherData;
    error: boolean;
  }