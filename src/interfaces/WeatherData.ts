export interface ITWNForecastPeriodData{
    super_short_day: string,
    itn:string,
    tma: string
}
export interface ITWNWeatherData{
    obs: {updatetime_stamp_gmt: string, wxca: string, wxc:string, tc:string},
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