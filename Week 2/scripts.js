const inputEl = document.getElementById("cityName");
const appid = "28b782780703cad6c6e724965189ef98";
inputEl.addEventListener("search", doSearch);

function doSearch() {
    const city = inputEl.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`)
        .then((response)=>response.json())
        .then((data)=> alert(data))
        .catche(err => alert(err))
}


// $(document).ready(function() {
//     $('#cityName').on('search', function() {
//         const city = $('#cityName').val();
//         const appid = "28b782780703cad6c6e724965189ef98";
//         $.ajax({
//             method: "GET",
//             url: `api.openweathermap.org/data/2.5/weather?q=${city}&appid=28b782780703cad6c6e724965189ef98&units=metric`,
//             dataType: 'JSON'
//         })
//         .done(function(data) {
//             alert(data);
//         })
//         .fail(function(err) {
//             alert("FAilEd");
//         })
//     })
// })







// const inputEl = document.getElementById("cityName");
// const appid = "28b782780703cad6c6e724965189ef98";
// inputEl.addEventListener("search", doSearch);


// function doSearch(){
//     const city = inputEl.value;
//     const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
    
//     if(!city) {
//         alert("Enter a city name!");
//     }else {
//         // try {
//         //     const response = await axios.get(url);
            
//         //     alert(data);
//         //     console.log(data);
//         // }
//         // catch(err){
//         //     alert(err);
//         // }

//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 alert(data);
//                 console.log(data);
//             })
//             .catch(err => alert(err))
//     }
// }
