const apikey = "b07e54e5f51fe9b422c540001ef8cf95";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbtn = document.querySelector('.first button');
const searchbox = document.querySelector('.first input');
const imgg = document.querySelector('.weather img');

async function checkweather(city) {
    
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    if (response.status==404) 
    {
        document.querySelector('.error').style.display='block'
        document.querySelector('.second').style.display='none'
        document.querySelector('.first').style.width='270px'

        document.querySelector('.card button').style.width='49px'
    }
    else{
        document.querySelector('.first').style.width='270px'
        document.querySelector('.second').style.width='270px'
        document.querySelector('.error').style.display='none'

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km\h";
    if (data.weather[0].main == 'Clouds') {
        imgg.src = "clouds.png";
    }
    else  if (data.weather[0].main == 'Clear') {
        imgg.src = "clear.png";
    }
    else  if (data.weather[0].main == 'Rain') {
        imgg.src = "rain.png";
    }
    else  if (data.weather[0].main == 'Drizzle') {
        imgg.src = "drizzle.png";
    }
    else  if (data.weather[0].main == 'Mist') {
        imgg.src = "mist.png";
    }
    document.querySelector('.second').style.display='block';
}}
searchbtn.addEventListener('click', () => {
    checkweather(searchbox.value)
})
checkweather();

