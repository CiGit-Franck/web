// document.querySelector('.boite').addEventListener('click', function(event){
//     console.log("Vous avez cliqué sur une boite.");
// });
document.querySelector('.rangee').addEventListener('click', function(event){
    console.log("Vous avez cliqué sur une rangée.");
});

document.getElementById('ajout-boite').addEventListener('click', function(event){
    const nouvelleBoite = document.createElement('div');
    nouvelleBoite.classList.add('boite');
    if(Math.random()> 0.5){
        nouvelleBoite.classList.add('grosse');
    } else {
        nouvelleBoite.classList.add('petite');
    }
    document.getElementById('the-rangee').appendChild(nouvelleBoite);
});

const lesBoites = document.querySelectorAll('.boite');
for(let boite of lesBoites){
    boite.addEventListener('click', function(event){
        let taille = '';
        if(boite.classList.contains('petite')){
            taille += 'petite';
        } else if(boite.classList.contains('grosse')){
            taille += 'grosse';
        }
        console.log(`Vous avez cliqué sur une ${taille} boite.`);
    });
    }