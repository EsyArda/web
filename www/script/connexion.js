function requete () {
  var xhr = new XMLHttpRequest();
  var connexion = document.getElementById("connexion");

  xhr.onreadystatechange = function() {
      console.log(this.response);
      if (this.readyState == 4 && this.status == 200) {
          connexion.innerHTML =  this.response;
      }
  };

  xhr.open("GET", "htbin/login.py", true);
  xhr.send();
}



var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    requete();
});
