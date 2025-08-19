function showweatherDetails(event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim().toUpperCase();
    const apiKey = '9ccf1b040aa0558f0a40d3b564072b4a';
    const country = 'US'; // Assuming US-based queries
  
    const query = `${city},${state},${country}`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const celsius = data.main.temp;
        const fahrenheit = (celsius * 9/5) + 32;
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}, ${state}</h2>
                                 <p>Temperature: ${celsius.toFixed(1)} &#8451; / ${fahrenheit.toFixed(1)} &#8457;</p>
                                 <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please check your city and state, then try again.</p>`;
      });
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);