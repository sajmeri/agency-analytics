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

export const filterWeatherData = (weatherData: {
    obs: {},
    lterm: {},
  }) => {
    const dataToStore = {
        obs: {},
        lterm: {},
      };
      dataToStore.obs = weatherData.obs;
      dataToStore.lterm = weatherData.lterm;
      return dataToStore;
}
