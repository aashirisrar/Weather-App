const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "b8eb4c64d1msh82f4f5538e5065ap1d2b92jsn7113e96b5efb",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;

            console.log(response);
        })
        .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Lahore");

const getWeatherOfIslamabad = (city) => {
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            cloud_pct_Islamabad.innerHTML = response.cloud_pct;
            temp_Islamabad.innerHTML = response.temp;
            feels_like_Islamabad.innerHTML = response.feels_like;
            humidity_Islamabad.innerHTML = response.humidity;
            min_temp_Islamabad.innerHTML = response.min_temp;
            max_temp_Islamabad.innerHTML = response.max_temp;
            wind_speed_Islamabad.innerHTML = response.wind_speed;

            console.log(response);
        })
        .catch((err) => console.error(err));
};

const getWeatherOfKarachi = (city) => {
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            cloud_pct_Karachi.innerHTML = response.cloud_pct;
            temp_Karachi.innerHTML = response.temp;
            feels_like_Karachi.innerHTML = response.feels_like;
            humidity_Karachi.innerHTML = response.humidity;
            min_temp_Karachi.innerHTML = response.min_temp;
            max_temp_Karachi.innerHTML = response.max_temp;
            wind_speed_Karachi.innerHTML = response.wind_speed;

            console.log(response);
        })
        .catch((err) => console.error(err));
};

const getWeatherOfMultan = (city) => {
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            cloud_pct_Multan.innerHTML = response.cloud_pct;
            temp_Multan.innerHTML = response.temp;
            feels_like_Multan.innerHTML = response.feels_like;
            humidity_Multan.innerHTML = response.humidity;
            min_temp_Multan.innerHTML = response.min_temp;
            max_temp_Multan.innerHTML = response.max_temp;
            wind_speed_Multan.innerHTML = response.wind_speed;

            console.log(response);
        })
        .catch((err) => console.error(err));
};

const getWeatherOfPeshawar = (city) => {
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            cloud_pct_Peshawar.innerHTML = response.cloud_pct;
            temp_Peshawar.innerHTML = response.temp;
            feels_like_Peshawar.innerHTML = response.feels_like;
            humidity_Peshawar.innerHTML = response.humidity;
            min_temp_Peshawar.innerHTML = response.min_temp;
            max_temp_Peshawar.innerHTML = response.max_temp;
            wind_speed_Peshawar.innerHTML = response.wind_speed;

            console.log(response);
        })
        .catch((err) => console.error(err));
};

getWeatherOfIslamabad("Islamabad");
getWeatherOfKarachi("Karachi");
getWeatherOfMultan("Multan");
getWeatherOfPeshawar("Peshawar");
