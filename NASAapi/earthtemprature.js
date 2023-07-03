const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return showWeather(data);
}
const showWeather = (data) => {
    weather.innerHTML = `
    <div class="row" id="weather">
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" srcset="">
    </div>
    <div>
        <h2>${data.main.temp}</h2>
        <h4>${data.weather[0].main}</h4>
    </div>
</div>
    `
}
form.addEventListener(
    "submit",
    function (event) {
        console.log(search.value);
        getWeather(search.value)
        event.preventDefault();
    }
)