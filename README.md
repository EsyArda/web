# Web

TPs de Web (L2 informatique)

## Travail demandé

A vérifier avec le [validateur en ligne du W3C](http://validator.w3.org/#validate_by_upload).

1. Première étape
    - [x] Mettre en place le squelette de votre page en utilisant le "doctype" propre au HTML5. Votre page devra avoir un titre et devra être au format (charset) UTF-8. (Voir balises html, head, body...)
    - [x] Mettre en place une structure hiérarchique claire : En-tête, menu, article, ...(Voir balises header, nav, article, aside, section, footer,...) **> article manquant**
    - [x] Organiser le texte en paragraphe, hierarchiser les différents titres et mettre les passages ou les éléments clefs en évidence.(Voir balises p, strong, em, mark, h1, h2...)
    - [x] Mettre en place divers éléments :
        - [x] une liste (à puces ou ordonnée)
        - [x] au moins une image avec une légende (utilisez les balises appropriées).
        - [x] un tableau.
    - [x] Mettre plusieurs types de lien hypertexte dans votre menu (un lien vers une seconde page de votre site, un lien vers une "ancre" et un lien vers un site extérieur).

2. Deuxième étape
    - [x] Il est demandé que la mise en forme ainsi réalisée soit relativement uniforme à la visualisation sur différents navigateurs. Pour cela il faut écraser les styles de base des navigateurs en définissant un style pour tous les éléments utilisés. Cela peut être fait en utilisant la technique du reset CSS ou bien d'un style de base.
    - [ ] La mise en forme produite devra contenir à minima tous les éléments suivants :
        - [ ] au moins une flexbox.
        - [ ] Vous utiliserez des "pseudo-formats" qui permettent de rendre l'apparence de votre page plus dynamique (au survol d'un élément, lors d'un clic ou lorqu'un lien a été consulté.). Vous utilisez aussi la propriété css "transition".
    - [ ] Votre site devra s'adapter automatiquement à différentes résolutions d'écran (moniteurs, mobiles...). Vous utiliserez pour cela les propriétés "Media Queries" du CSS3 (l'utilisation des frameworks comme bootstrap est interdite).

3. Troisième étape
    - [ ] Ses noms et prénoms (ne peut être vide).
    - [ ] Une date de naissance (Au format jj/mm/aaa. Peux être vide mais doit contenir une date valide si elle est renseignée. Attention, vous devrez utiliser ici un input de type text et vous devrez trouver une façon de controller la validité de cette date en utilisant l'objet Date du javascript).
    - [ ] Un nom d'utilisateur (ne peut être vide et doit contenir au moins six caractères).
    - [ ] Un mot de pass (ne peut être vide et doit contenir au moins huit caractères dont une majuscule, une minuscule et un chiffre. Vous ne devez utiliser ici qu'une seule expression régulière pour controller l'intégralité du mot de passe).
    - [ ] Une adresse email (ne peut être vide et doit être une adresse email valide).
