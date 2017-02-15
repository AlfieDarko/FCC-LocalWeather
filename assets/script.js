 $(document).ready(function () {
     var icons = new Skycons({
         "color": "white"
     });
     var city;
     var countryCode;
     $.getJSON("http://ip-api.com/json", function (geoData) {
         city = geoData.city;
         countryCode = geoData.countryCode;
         url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ',' + countryCode + "&appid=543038ac6ec11c62ded8555f02ceb1bc&units=metric";
         console.log(url);
         
         
         $.getJSON(url, function (weatherData) {
             
             //VERY LONG SWITCH STATEMENT! 
             switch (weatherData.weather[0].icon) {
                 case '01d':
                 case '01n':
             $('#weatherIconContainer').append('<figure class="icons"><canvas id="clear-day" width="64" height="64"></canvas></figure>')
             icons.set("clear-day", Skycons.CLEAR_DAY);
             icons.play();
             break;
                 case '10d':
             case '10n':
                 $('#weatherIconContainer').append('<figure class="icons"><canvas id="rain" width="64" height="64"></canvas></figure>');
                 icons.set("rain", Skycons.RAIN);
                 icons.play();
                 break;
                 case '02d':
                 case '02n':
             $('#weatherIconContainer').append('<figure>	<canvas id="partly-cloudy-day" width="64" height="64"></canvas></figure>');
             icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
             icons.play();
             break;
                 case '03d':
                 case '03n':
                 case '04d':
                 case '04n':
             $('#weatherIconContainer').append('<figure>	<canvas id="cloudy" width="64" height="64"></canvas></figure>');
             icons.set("cloudy", Skycons.CLOUDY);
             icons.play();
             break;
                 case '09d':
                 case '09n':
                 case '11d':
                 case '11n':
             $('#weatherIconContainer').append('<figure><canvas id="sleet" width="64" height="64"></canvas></figure>');
             icons.set("sleet", Skycons.SLEET);
             icons.play();
             break;
                 case '13d':
                 case '13n':
             $('#weatherIconContainer').append('<figure><canvas id="snow" width="64" height="64"></canvas></figure>');
             icons.set("snow", Skycons.SNOW);
             icons.play();
             break;
                 case '50d':
                 case '50n':
             $('#weatherIconContainer').append('<figure>	<canvas id="fog" width="64" height="64"></canvas></figure>');
             icons.set("fog", Skycons.FOG);
             icons.play();
             break;
             }
             // END OF VERY LONG SWITCH STATEMENT
             
             $("#weatherContainer").html(weatherData.name + "<br>" + weatherData.weather[0].description + "<br>" + Math.round(weatherData.main.temp) + "°C");
             console.log(weatherData)
         })
     })
 });