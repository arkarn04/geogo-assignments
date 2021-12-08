const inputEl = document.getElementById("cityName");
const appid = "28b782780703cad6c6e724965189ef98";
inputEl.addEventListener("search", doSearch);

function doSearch(){
    const city = inputEl.value;
    const url = `api.openweathermap.org/data/2.5/weather?q=Patna&appid=28b782780703cad6c6e724965189ef98&units=metric`
    
    axios.get(url)
    .then(data => {
        alert(data);
    })
    .catch(err => alert(err));
}
