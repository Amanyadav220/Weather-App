        async function getWeather() {
            const location = document.getElementById('location').value;
            const apiKey = '587fb263e32041febe6150420252401';
            const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Location not found');
                }

                const data = await response.json();
                const weatherInfo = `
                    <p><strong>Location:</strong> ${data.location.name}, ${data.location.region}, ${data.location.country}</p>
                    <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
                    <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                    <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
                    <p><strong>Wind:</strong> ${data.current.wind_kph} kph</p>
                `;

                document.getElementById('weatherInfo').innerHTML = weatherInfo;
            } catch (error) {
                document.getElementById('weatherInfo').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
            }
        }