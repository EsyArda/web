var xhr = new XMLHttpRequest();
var connexion = document.getElementByYd("connexion");

xhr.onreadystatechange = function() {
  console.log(this);
  if (this.readyState == 4 && this.status == 200) {
    connexion.innerHTML = this.response;
  }
};

xhr.open("GET", "test.txt", true);
xhr.responseType = "text";
xhr.send();



var form = document.querySelector("form");

form.addEventListener("submit", function (e) {

});
