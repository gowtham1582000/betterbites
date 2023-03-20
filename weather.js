let weather = {
    apiKey: "366e5e489adcd459912788646cab5f97",
    fetchWeather: function () {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=chennai",
          "&units=metric&appid=" +
          this.apiKey
      )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function () {
    const { temp } = data.main;
    
    document.querySelector(".temp").innerText = temp + "°C";
    
  }
 
    
};