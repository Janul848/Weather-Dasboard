// This event listener waits for the DOM to finish loading before executing the code
document.addEventListener("DOMContentLoaded", function() {
  // This is the API URL for the weather API
  const apiUrl = "https://api.weatherapi.com/v1/current.json?key=9d505a4f719e45f487180807241508&q=";
  
  // This is the API key for the weather API
  const apiLey = "9d505a4f719e45f487180807241508"; 
  
  // This selects the search input field
  const searchBox = document.querySelector(".search input");
  
  // This selects the search button
  const searchBtn = document.querySelector(".search button");

  // This is an async function that makes an API request to get the weather data
  async function api(city) {
    try {
      // This makes a GET request to the API with the city name and API key
      const response = await fetch(apiUrl + city + '&appid=' + apiLey);
      
      // This parses the response as JSON
      const data = await response.json();
      
      // This logs the data to the console
      console.log(data);
      
      // These select the elements that will display the weather data
      const cityElement = document.querySelector(".city");
      const tempElement = document.querySelector("h1.temp");
      const humidityElement = document.querySelector("p.Humidity");
      const windElement = document.querySelector("p.Wind");
      
      // This checks if all the elements were found in the DOM
      if (cityElement && tempElement && humidityElement && windElement) {
        // This updates the city element with the city name
        cityElement.innerHTML = data.location.name;
        
        // This updates the temperature element with the temperature in Celsius
        tempElement.innerHTML = Math.round(data.current.temp_c) + '°c';
        
        // This updates the humidity element with the humidity percentage
        humidityElement.innerHTML = data.current.humidity + "%";
        
        // This updates the wind element with the wind speed in km/h
        windElement.innerHTML = data.current.wind_kph + " km/h";
      } else {
        // This logs an error if any of the elements were not found in the DOM
        console.error("Elements not found in DOM");
      }
    } catch (error) {
      // This logs any errors that occur during the API request
      console.error(error);
    }
  }

  // This adds an event listener to the search button that calls the api function when clicked
  searchBtn.addEventListener("click", () => {
    api(searchBox.value);
  });

  // This calls the api function with the default city "india"
  api("india");
});