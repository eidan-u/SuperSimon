let $start;
let $restart;
let $rouge = document.querySelector('.rouge');
let $bleu = document.querySelector('.bleu');
let $jaune = document.querySelector('.jaune');
let $vert = document.querySelector('.vert');
let $rules = document.querySelector('.regles');
let $player = [];
let $victoire = false;
let $clique = document.querySelector('.clickList');
let $do = new Audio('sound/do.wav');
let $re = new Audio('sound/re.wav');
let $mi = new Audio('sound/mi.wav');
let $fa = new Audio('sound/fa.wav');

//on attribu un changement d'opacité à chaque couleur au click puis apres 2 seconde un retour à la normal/ et qui permet de jouer une note
function blue() {
    $bleu.style.opacity = "0.5";
    setTimeout(function retour_couleur_bleu() {
        $bleu.style.opacity = "1"
    }, 500);
    $do.play();
}
function yellow() {
    $jaune.style.opacity = "0.5";
    setTimeout(function retour_couleur_jaune() {
        $jaune.style.opacity = "1"
    }, 500);
    $re.play();
}
function green() {
    $vert.style.opacity = "0.5";
    setTimeout(function retour_couleur_vert() {
        $vert.style.opacity = "1"
    }, 500);
    $mi.play();
}
function red() {
    $rouge.style.opacity = "0.5";
    setTimeout(function retour_couleur_rouge() {
        $rouge.style.opacity = "1"
    }, 500);
    $fa.play();
}
//afficher les regles
function rulesOn() {
    $rules.style.display = 'block';
}
//masquer les regles
function rulesOff() {
    $rules.style.display = 'none';
}
//la fonction Simon permet d'ajouter plus un à la clickList
function Simon() {
    $clique.innerHTML++;
}


