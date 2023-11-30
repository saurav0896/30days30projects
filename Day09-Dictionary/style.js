const generatedText = document.getElementById("textGenerated");
const generateBtn = document.getElementById("generateBtn");
const generateTitle = document.getElementById("title");

// To get the API key register on https://api-ninjas.com/ 
var API_Key = "API KEY HERE"

generateBtn.addEventListener("click", () => {
  const length = document.getElementById("textInput");
  
  fetch(`https://api.api-ninjas.com/v1/dictionary?word=${length.value}`, {
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
      generateTitle.textContent = JSON.parse(data).word + " :";
      generatedText.textContent = JSON.parse(data).definition;
    })
    .catch(function (error) {
      console.error("Error: ", error);
    });
});

