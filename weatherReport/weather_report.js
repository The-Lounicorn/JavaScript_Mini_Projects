function showweatherDetails(event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim().toUpperCase();
    const country = 'US';
    const apiKey = '9ccf1b040aa0558f0a40d3b564072b4a';
  
    const locationQuery = `${city},${state},${country}`;
    const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&appid=${apiKey}&units=metric`;
  
    fetch(locationUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Location fetch failed: ${response.status}`);
        }
        return response.json();
      })
      .then(locationData => {
        const celsius = locationData.main.temp;
        const fahrenheit = (celsius * 9/5) + 32;
        const lat = locationData.coord.lat;
        const lon = locationData.coord.lon;
  
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
        return fetch(forecastUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Forecast fetch failed: ${response.status}`);
            }
            return response.json();
          })
          .then(forecastData => {
            const forecastDate = new Date(forecastData.list[0].dt_txt);
            const options = {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            };
            const formattedDate = forecastDate.toLocaleString('en-US', options);
  
            const forecastCelsius = forecastData.list[0].main.temp;
            const forecastFahrenheit = (forecastCelsius * 9/5) + 32;
  
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
              <h2>Weather in ${locationData.name}, ${state}</h2>
              <p>Temperature: ${celsius.toFixed(1)} &#8451; / ${fahrenheit.toFixed(1)} &#8457;</p>
              <p>Weather: ${locationData.weather[0].description}</p>
              <p>Latitude: ${lat.toFixed(4)} | Longitude: ${lon.toFixed(4)}</p>
              <h3>Next Forecast:</h3>
              <p>${formattedDate}: ${forecastData.list[0].weather[0].description}, ${forecastCelsius.toFixed(1)} &#8451; / ${forecastFahrenheit.toFixed(1)} &#8457;</p>
            `;
          });
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('weatherInfo').innerHTML = `<p>Unable to fetch weather. Please check your input and try again.</p>`;
      });
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);