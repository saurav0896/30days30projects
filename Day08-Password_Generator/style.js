const APIURL = "https://api.api-ninjas.com/v1/passwordgenerator?length=";
const generatedText = document.getElementById("passwordGenerated");
const generateBtn = document.getElementById("generateBtn");

// To get the API key register on https://api-ninjas.com/ 
var API_Key = "API KEY HERE"

generateBtn.addEventListener("click", () => {
  const length = document.getElementById("numberInput");
  
  // make it TRUE if want to exclude special characters "!@#$%^&*()"
  var exclude_special_char = false 
  
  fetch(`https://api.api-ninjas.com/v1/passwordgenerator?${exclude_special_char}&length=${length.value}`, {
    method: "GET",
    headers: { "X-Api-Key": API_Key }
  })
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then(function (data) {
      generatedText.textContent = JSON.parse(data).random_password;
    })
    .catch(function (error) {
      console.error("Error: ", error);
    });
});
