// Formulaires de connexion et d'inscription

//variables
var b_nom=false;
var b_prenom=false;
var b_email=false;
var b_pseudo=false;
var b_date=false;
var b_mp=false;

function inscription() {
    if (b_nom && b_prenom && b_email && b_pseudo && b_date && b_mp) {
        document.getElementbyId("message_inscription").innerText = "Inscription faite";
        //document.getElementbyId("inscription").submit();
    }
    else
        document.getElementbyId("message_inscription").innerText = "Formulaire non valide";
    }
}

function connexion() {
    //a compléter plus tard
}


function saisir (txt_defaut, nom_controle) {
    if (document.getElementbyId(nom_controle).value == txt_defaut) {
        document.getElementbyId(nom_controle).innerText = '';
    }
}

function retablir (txt_defaut, nom_controle) {
    if (document.getElementbyId(nom_controle).value == '') {
        document.getElementbyId(nom_controle).innerText = txt_defaut;
    }
}

function mev (txt_defaut, nom_controle) {
    var longueur = document.getElementbyId(nom_controle).value.length;
    if (nom_controle == "date_naissance") {
        if
    }
    else if (longueur < 2 || document.getElementbyId(nom_controle).value == txt_defaut) {
        document.getElementbyId(nom_controle).style.border = '#FF9966 2px solid';
        switch(nom_controle) {
            case "nom":
                b_nom = false;
            break;
            case "prenom":
                b_prenom = false;
            break;
        }
    }
    else {
        document.getElementbyId(nom_controle).style.border = '#777 2px solid';
        switch(nom_controle) {
            case "nom":
                b_nom = true;
            break;
            case "prenom":
                b_prenom = true;
            break;
    }
}

function isValidDate (dataStr, format) {
    if (format == null) {
      format = "JMA";
    }
    format = format.toUpperCase();
    if (format.length != 3) {
      format = "JMA";
    }
    if ((format.indexOf("J") == -1) || (format.indexOf("M") == -1) || (format.indexOf("A") == -1)) {
        format = "JMA";
        if (format.substring(0, 1) == "A") {
            var reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
            var reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
        }
        else if (format.substring(1, 2) == "A") {
            var reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/
            var reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/
        }
        else {
            var reg1 = /^\d{1,2}(\/)\d{1,2}\1\d{2}$/
            var reg2 = /^\d{1,2}(\/)\d{1,2}\1\d{4}$/
        }
    }
    if ((reg1.test(dataStr) == false) && (reg2.test(dataStr) == false)) {
        return false;
    }
    var parts = dateStr.split(RegExp.$1);
    if (format.substring(0, 1) == "J") {
        var jj = parts[0];
    }
    else if (format.substring(1, 2) == "J") {
        var jj = parts[1];
    }
    else {
        var jj = parts[2];
    }
    if (format.substring(0, 1) == "M") {
        var mm = parts[0];
    }
    else if (format.substring(1, 2) == "M") {
        var mm = parts[1];
    }
    else {
        var mm = parts[2];
    }
    if (format.substring(0, 1) == "A") {
        var aa = parts[0];
    }
    else if (format.substring(1, 2) == "A") {
        var aa = parts[1];
    }
    else {
        var aa = parts[2];
    }
    if (parseFloat(aa) <= 50) {
      aa = (parseFloat(aa) + 2000).toString();
    }
    if (parseFloat(aa) <= 99) {
      aa = (parseFloat(aa) + 1900).toString();
    }
    var dt = new Date(perseFloat(aa), parseFloat(mm)-1, parseFloat(jj), 0, 0, 0, 0);
    if (parseFloat(jj) != dt.getDate()) {
      return false;
    }
    if (parseFloat(mm)-1 != dt.getMonth()) {
      return false;
    }
    return true;
}
