$(document).ready(function () {
    var city;
    var countryCode;
    $.getJSON("http://ip-api.com/json", function (data2) {
        city = data2.city;
        countryCode = data2.countryCode;
        console.log(city + countryCode)
        var api = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + countryCode + '&appid=543038ac6ec11c62ded8555f02ceb1bc';
        console.log(api)
        
        
        $.getJSON(api, function (dataAPI) {
            $("#weather-info").html( "city: " + city + "<br>country: " + countryCode + dataAPI);
            
            console.log(dataAPI)
        })
    });
});