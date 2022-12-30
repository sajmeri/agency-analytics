export interface ITWNForecastPeriodData{
    super_short_day: string,
    ida:string,
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
    temperature: string
}
export interface IObsData extends IWeatherData{
    wxCondition: string,
}
export interface ICityWeatherData{
    obs: IObsData,
    forecast: IWeatherData[]
}

export interface IApplicationState {
    loading: boolean;
    weatherData: ICityWeatherData;
    error: boolean;
  }