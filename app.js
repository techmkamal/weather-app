// script.js
async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert("Please enter a location");
        return;
    }

    const apiKey = "add_your_api_key";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        document.getElementById('weather-info').innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind: ${data.current.wind_kph} kph (${data.current.wind_dir})</p>
            <p>Pressure: ${data.current.pressure_mb} mb</p>
            <p>Visibility: ${data.current.vis_km} km</p>
            <p>Air Quality Index (US EPA): ${data.current.air_quality["us-epa-index"]}</p>
            <img src="${data.current.condition.icon}" alt="Weather icon">
        `;
    } catch (error) {
        document.getElementById('weather-info').innerHTML = "<p>Could not fetch weather data.</p>";
    }
}
