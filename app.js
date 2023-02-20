// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
  key:"7cca11be3c3a650e5aa800eb3dcdf98c",
  baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const search = document.querySelector(".search")


search.addEventListener('keypress', (event)=> {
  if(event.keyCode == 13){
    getWeatherReport(search.value)
    console.log(search.value)
  }
})


function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)

  .then (weather => {
     return weather.json()
    }).then(showWeatherReport)
}




function showWeatherReport(weather) {
  let city = document.querySelector(".location")
  let cls = document.querySelector(".celsius")
  let img = document.querySelector(".img")
  city.textContent = `${weather.name},${weather.sys.country}`
  cls.textContent = `${weather.main.temp + ' ' + '°C'}`
  if (weather.main.temp < 0) {
    img.setAttribute('src', './images/snow.png')
  } else if (weather.main.temp < 10) {
    img.setAttribute('src', './images/rain.png')
  } else if (weather.main.temp < 15) {
    img.setAttribute('src', './images/clouds.png')
  }
}

function dataTime() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const dayElement =document.querySelector(".day")
  const monthElement =document.querySelector(".month")
  const yearElement =document.querySelector(".year")

  if (dayElement && monthElement && yearElement) {
  dayElement.textContent = day;
  monthElement.textContent = month + 1;
  yearElement.textContent = year;
  }
}

dataTime()