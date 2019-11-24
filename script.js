let $start;
let $restart;
let $rouge = document.querySelector('.rouge');
let $bleu = document.querySelector('.bleu');
let $jaune = document.querySelector('.jaune');
let $vert = document.querySelector('.vert');
let $rules = document.querySelector('.regles');
let $player = [1];
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


//fonction qui permet de generer un nombre aléatoire

function hasard() {
    $nombre = Math.round(1 + Math.random() * 3);
    return $nombre;
}
let $hasard = hasard();
console.log($hasard);

//une fonction qui permet d'afficher les valeur du Math.random à partir du bouton start et qui permet de donner une couleur pour chaque chiffre sous forme de condition

function start() {

    if ($hasard == 1) {
        blue();
    } else if ($hasard == 2) {
        yellow();
    } else if ($hasard == 3) {
        green();
    } else if ($hasard == 4) {
        red();
    } else {
        console.log('erreur');
    }

    // on créé un tableau qui se rempli au fur et à mesure que la  fonction hasard() est jouéé, si le tableau possede 1 element, il stop la fonction hasard et retourne les valeur dans la console

    let $compte = [];
    let i = $compte.length;
    while (i < 1) {
        i++
        $compte.push($hasard);
    }
    console.log($compte);

    //le tour de la machine est terminé maintenant à celui du joueur

    console.log('à vous de jouer!');

    //on créé un evenement qui permet de rajouter une section au tableau du joueur
if (i = 1) 
    $bleu.addEventListener('click', function ChangeTab1() {
        $player.push(1)
        console.log($player);
    });
    $rouge.addEventListener('click', function ChangeTab2() {
        $player.push(4)
        console.log($player);
    });
    $jaune.addEventListener('click', function ChangeTab3() {
        $player.push(2)
        console.log($player);
    });
    $vert.addEventListener('click', function ChangeTab4() {
        $player.push(3)
        console.log($player);
    });

    if ($player == $compte) {
        console.log('vous avez gagné');
    } else {
        console.log('vous avez perdu');
    }

}

//appuyer sur le restart permet de reboot les deux tableaux ainsi que le nombre de cliques

function restart() {
    $compte = [];
    $player = [];
    console.log($compte);
    console.log($player);
    $clique.innerHTML = 0;
}