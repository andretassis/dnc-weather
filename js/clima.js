async function weatherInfo() {
    try {
        const lat = document.getElementById('lat').value
        const long = document.getElementById('long').value
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`)
        const data = await response.json()

        const weatherResult = document.getElementById('weather-result')
        weatherResult.innerText = `Previsão do tempo de acordo com a região: ${data.hourly.temperature_2m[0]}°C`
    }
    catch (error) {
        error.message = "Insira corretamente os valores de latitude e longitude."
        alert(error.message)
    }
}