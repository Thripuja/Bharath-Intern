
document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '43ef1b5702cd0b6184198946f88b2d29';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').innerText = data.name;
            document.getElementById('weather-description').innerText = data.weather[0].description;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});

