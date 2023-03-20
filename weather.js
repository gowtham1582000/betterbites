let weather = {
    apiKey: "366e5e489adcd459912788646cab5f97",
    fetchWeather: function () {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=366e5e489adcd459912788646cab5f97"
      )
      
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function () {
    const { temp } = data.main;
    
    document.querySelector(".temp1").innerText = temp + "°C";
    
  }
 
    
};