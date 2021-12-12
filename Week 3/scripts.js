
  
const searchData = (e) =>{
    const city = document.getElementById("cityName").value
    e.preventDefault()
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=eb3630ba6927179c43e4c3930dd7bf41&units=metric",
        context: document.body
      }).done(function(data) {
        $("#cur-temp").html(data.main.temp+"&deg;c")
        $("#cur-humid").html(data.main.humidity+" %")
      });
}

// const submitBtn = document.getElementById("subBtn");
// const inputEl = document.getElementById("cityName");
// // const appid = "28b782780703cad6c6e724965189ef98";

// submitBtn.addEventListener('click', function() {
//     const city = inputEl.value;
//     console.log("hello")
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acbbab8031b844c9baa661e7d5e44001`)
// .then(response => response.json()).then(data=>console.log(data))
// .catch(err => {
// 	console.error(err);
// })
// })


// $(document).ready(function() {
//     $('#submitBtn').on('click', function() {
//         const city = $('#cityName').val();
//         const appid = "28b782780703cad6c6e724965189ef98";
//         console.log("Working here")
//         $.ajax({
//             method: "GET",
//             url: `api.openweathermap.org/data/2.5/weather?q=${city}&appid=28b782780703cad6c6e724965189ef98&units=metric`,
//             dataType: 'JSON'
//         })
//         .done(function(data) {
//             console.log("Patna");
//         })
//         .fail(function(err) {
//             // console.log("FAilEd");
//             console.log("goa")
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
