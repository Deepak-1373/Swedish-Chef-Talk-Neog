var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/chef.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

btnTranslate.addEventListener("click", function clickEventHandler() {
  var inputText = textInput.value;
  console.log(inputText);

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(function errorHandler(error) {
      console.log("error occured", error);
      alert("Something wrong with server! Try again after some time");
    });
});
