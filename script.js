const apiKey = "c34efa48003449059f7152901261506";
async function getWeather(city = "India") {
  const cityInput = document.getElementById("cityInput").value;
  if(cityInput !== ""){
    city = cityInput;
  }
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("city").innerText =
      `${data.location.name}, ${data.location.country}`;
    document.getElementById("condition").innerText =
      data.current.condition.text;
    document.getElementById("temp").innerText =
      `${data.current.temp_c}°C`;
    document.getElementById("feels").innerText =
      `${data.current.feelslike_c}°C`;
    document.getElementById("humidity").innerText =
      `${data.current.humidity}%`;
    document.getElementById("wind").innerText =
      `${data.current.wind_kph} km/h`;
    document.getElementById("pressure").innerText =
      `${data.current.pressure_mb} mb`;
    document.getElementById("uv").innerText =
      data.current.uv;
    document.getElementById("visibility").innerText =
      `${data.current.vis_km} km`;
    document.getElementById("cloud").innerText =
      `${data.current.cloud}%`;
    document.getElementById("weatherIcon").src =
      "https:" + data.current.condition.icon;
    updateTheme(data.current.condition.text);
  }catch(error){
    alert("City not found!");
  }
}
function updateTheme(condition){
  condition = condition.toLowerCase();
  document.body.classList.remove("rain","snow","sunny");
  if(condition.includes("rain") || condition.includes("drizzle")){
    document.body.classList.add("rain");
    particlesJS("particles-js", {
      particles: {
        number: { value: 250 },
        color: { value: "#8ec5ff" },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: 2 },
        move: {
          enable: true,
          speed: 10,
          direction: "bottom"
        }
      }
    });
  }
  else if(condition.includes("snow")){
    document.body.classList.add("snow");
    particlesJS("particles-js", {
      particles: {
        number: { value: 180 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.8 },
        size: { value: 5 },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom"
        }
      }
    });
  }
  else{
    document.body.classList.add("sunny");
    particlesJS("particles-js", {
      particles: {
        number: { value: 100 },
        color: { value: "#ffb347" },
        shape: { type: "circle" },
        opacity: { value: 0.7 },
        size: { value: 4 },
        move: {
          enable: true,
          speed: 2
        }
      }
    });
  }
}
getWeather();
