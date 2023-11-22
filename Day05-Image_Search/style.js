var data = "https://api-ninjas.com";
var searchItem = document.getElementById("searchBox");
var searchClick = document.getElementById("buttonClick");

// To get the API key register on https://api-ninjas.com/ 
var API_Key = "API KEY HERE"

var resultBox = document.getElementById("resultBox");
searchClick.addEventListener("click", function () {
    resultBox.innerHTML = ``
    resultBox.innerHTML = `<div class="d-flex justify-content-center text-primary mt-5">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>`
    fetch("https://api.api-ninjas.com/v1/randomimage?category=" + searchItem.value, {
        method: "GET",
        headers: { "X-Api-Key": API_Key, Accept: "image/jpg" }
    })
        .then((response) => response.blob())
        .then((blob) => {
            resultBox.innerHTML = "";
            resultBox.innerHTML = `<img src="${URL.createObjectURL(blob)}"  alt="searched result">`
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    searchItem.value = "";
});
