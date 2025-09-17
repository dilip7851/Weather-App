const inputBox=document.querySelector(".input-box");
const searchBox=document.querySelector("#SearchBtn");
const Weather_img=document.querySelector(".Weather-img");

const City_name=document.querySelector(".city_name");
const temperature=document.querySelector(".tempreature");

const description=document.querySelector
(".description");

const humidity=document.querySelector("#humidity");
const wind_speed=document.querySelector("#wind-speed");


const Error_404=document.querySelector(".Error_404");

const weather_body=document.querySelector(".weather-body")

 
async function  CheckWeather(city) {







    const Api_Url=` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    const  Weather_data= await fetch (`${Api_Url}`).then(response => response.json());
     


    if(Weather_data.cod == `404`){
           Error_404.style.display="flex"; 
           weather_body.style.display="none"
        return ;
    }  else if( Weather_data.cod == 200){

        Error_404.style.display="none"; 
        weather_body.style.display="flex"

        City_name.innerHTML=`${Weather_data.name}`;
        temperature.innerHTML=`${(Weather_data.main.temp).toFixed(0)}°C`;
    
        description.innerHTML=`${Weather_data.weather[0].description}`;
    
        humidity.innerHTML=`${Weather_data.main.humidity} % `  ;
    
        wind_speed.innerHTML=`${Weather_data.wind.speed} km/h`
       
    }


  


    

    switch (Weather_data.weather[0].main) {

        case 'Clouds':
        Weather_img.src ='Images/cloud.png';
        break;

        case 'Clear':
        Weather_img.src ='Images/clear.png';
        break;

        case 'Rain':
        Weather_img.src ='Images/rain.png';
        break;

        case 'Mist':
        Weather_img.src ='Images/mist.png';
        break;

        case 'Snow':
        Weather_img.src ='Images/snow.png';
        break;

      

    }

    console.log(Weather_data.main);



}

inputBox.addEventListener("keyup",
    (e) => {

         if(event.key == "Enter"){
        CheckWeather(inputBox.value);

         }
    }
)


searchBox.addEventListener("click",
    () => {
        CheckWeather(inputBox.value);
    }
)



