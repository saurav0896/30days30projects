function htmlEncode(value) {
    var div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

const generateBtn = document.getElementById("generate");
const contentInput = document.getElementById("content");
const qrCardContainer = document.getElementById("resultBox");

generateBtn.addEventListener("click", () => {
    qrCardContainer.innerHTML = `<img id="qrCode" src='https://chart.googleapis.com/chart?cht=qr&chl="${htmlEncode(contentInput.value)}"&chs=160x160&chld=L|0" alt="...'>`
})
