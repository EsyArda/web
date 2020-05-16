document.getElementById("userpwd").addEventListener('input', function (e) { // Pendant la saisie
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var regexMdp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)([\w]{8,})$/; // Expression régulière
    var valideMdp = "";
    var couleurMsg = "#FF9966";
    if (!regexMdp.test(mdp)) {
        valideMdp = "Le mot de passe n'est pas assez fort";
    }
    else {
        valideMdp = "";
        userpwd.style.border = '';
    }
    var aideMdpElt = document.getElementById("helpwd");
    aideMdpElt.textContent = valideMdp;
    aideMdpElt.style.color = "#FF9966";
});

var form = document.querySelector("form"); // Permet de récupérer les différentes données

form.addEventListener("submit", function (e) { // Au moment de valider
    var userpwd = form.elements.userpwd.value;
    var birthdate = form.elements.birthdate.value;
    var usermail = form.elements.usermail.value;
    if (birthdate != "") {
        var regexBdt = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
        if (!regexBdt.test(birthdate)) {
            e.preventDefault();
            alert("Date de naissance : Mettez des '/' exemple 01/01/2020");
        }
        else {
            var cutDate = birthdate.split("/");
            var jour = Number(cutDate[0]);
            var mois = Number(cutDate[1]) - 1;
            var annee = Number(cutDate[2]);
            var birthdateVerif = new Date(annee, mois, jour);
            if ((birthdateVerif.getFullYear() > new Date().getFullYear()) || (annee != birthdateVerif.getFullYear()) || (mois != birthdateVerif.getMonth()) || (jour != birthdateVerif.getDate())) {
                e.preventDefault();
                alert("Date de naissance invalide");
            }
        }
    }
    if (userpwd != "") {
        var regexMdp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)([\w]{8,})$/; // Expression régulière
        if (!regexMdp.test(userpwd)) {
            e.preventDefault();
        }
    }
    if (usermail != "") {
        var regexCourriel = /.+@.+\..+/;
        if (!regexCourriel.test(usermail)) {
            e.preventDefault();
            alert("Email non valide")
        }
    }
});
