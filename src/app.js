// Variables declarations
const result = document.getElementById("result");

const submitBtn = document.getElementById("submitBtn");
const cityDisplay = document.getElementById("cityDisplay");
const tempDisplay = document.getElementById("tempDisplay");
const conditionDisplay = document.getElementById("conditionDisplay");
const cityIn = document.getElementById("cityIn");
async function checkWeather() {
    
  let apiKey = "&appid=4c243b03b05493db3d0f15e7bfd513d1&units=metric";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  let res = await fetch(apiUrl + cityIn.value + apiKey);
  let data = await res.json();
  console.log(data);
  if(!data || !data.name){
    document.querySelector(".mssg").style.display="block";
    
    result.style.display = "none";
    
}else{
    
    document.querySelector(".mssg").style.display="none";
      cityDisplay.innerHTML = data.name;
      tempDisplay.innerHTML = Math.round(data.main.temp) + "℃";
      conditionDisplay.innerHTML = data.weather[0].main;
      result.style.display = "block";
  }
}
submitBtn.addEventListener("click", () => {
    checkWeather();
});
cityIn.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        submitBtn.click();
    }
})