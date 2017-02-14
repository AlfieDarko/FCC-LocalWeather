 $(document).ready(function() {

    var city;
    var countryCode;


    $.getJSON( "http://ip-api.com/json", function( geoData ) {
        city = geoData.city;
        countryCode = geoData.countryCode;

        url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ',' + countryCode + "&appid=543038ac6ec11c62ded8555f02ceb1bc&units=metric";

        console.log(url);

        $.getJSON( url, function (weatherData) {
            $("#weatherContainer").html(weatherData.name + "<br>" + weatherData.weather[0].description
            + "<br>" + Math.round(weatherData.main.temp) + "°C");
            console.log(weatherData)
        })

    })




});
