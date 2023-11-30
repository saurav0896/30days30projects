const generatedText = document.getElementById("textGenerated");
const generateBtn = document.getElementById("generateBtn");
const generateTitle = document.getElementById("title");
const errorText = document.getElementById("error");

// To get the API key register on https://api-ninjas.com/ 
var API_Key = "API KEY HERE"


generateBtn.addEventListener("click", () => {
  const length = document.getElementById("textInput");

  fetch(`https://api.api-ninjas.com/v1/dictionary?word=${length.value}`, {
    method: "GET",
    headers: { "X-Api-Key": "nsMP8qzPg/N7mrxwPewGCA==ZEOoCmgCRHKcG2wU" }
  })
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then(function (data) {
      if (JSON.parse(data).valid) {
        errorText.textContent = "";
        generateTitle.textContent = JSON.parse(data).word + " :";
        generatedText.textContent = JSON.parse(data).definition;
      } else {
        generateTitle.textContent = "";
        generatedText.textContent = "";
        errorText.textContent = "Could not find definition for this word.";
      }
    })
    .catch(function (error) {
      console.error("Error: ", error);
    });
});
