cloud_pct
feels_like
humidity
max_temp
min_temp
sunrise
sunset
temp
wind_degrees
wind_speed

.then((response) => {
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct
    feels_like.innerHTML =response.feels_like
    humidity.innerHTML=response.humidity
    max_temp.innerHTML=response.max_temp
    min_temp.innerHTML=response.min_temp
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
    temp.innerHTML=response.temp
    wind_degrees.innerHTML=response.wind_degrees
    wind_speed.innerHTML=response.wind_speed
})