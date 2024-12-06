// alert("bonjour") // script test
async function fetchWeather() {
  // alert('hello')// function's test
  const locationWeather = document.getElementById("location").value;
  // console.log(locationWeather)

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${locationWeather}&appid=${apikey}`;
  try {
    const response = await fetch(url);
    //  console.log(response)
    const data = await response.json();
    console.log(data);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Location not found");
        } else if (response.status === 401) {
          throw new Error("Invalid API KEY");
        } else {
          throw new Error("Unable to fetch weather data");
        }
      }
      displayWeather(data)
  } catch (error) {
    alert(error);
  }
}

function displayWeather(data) {
  const city = data.name;
  //   console.log(city);
  const temperature = data.main.temp;
  //   console.log(temperature);
  const description = data.weather[0].description;
  //   console.log(description);
  const icon = data.weather[0].icon;
  //console.log(icon);
  document.getElementById("city").innerHTML = `Weather in ${city}`;
  document.getElementById("description").innerHTML = `Description: ${description}`;
  document.getElementById("temperature").innerHTML = `Temperature: ${temperature}°C`;
  document.getElementById("weather").style.display = "block";
  document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

}
