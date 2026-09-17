
// Fonction pour le changer de thème
// function initializationTheme(theme) { 
//     if(theme=='header-light'){
//         theme = 'header-lighter'
//         document.getElementById('menuType').classList.replace('header-coffee','header-light');
//         document.getElementById('menuTitle').classList.add('row1-single');
//     } else if(theme=='header-coffee'){
//         theme = 'header-coffee'
//         document.getElementById('menuType').classList.replace('header-light','header-coffee');
//         document.getElementById('menuTitle').classList.remove('row1-single');
//     }
        
// }

// function changeTheme(theme) {
//     if(theme=='header-light'){
//         theme = 'header-coffee'
//         document.getElementById('menuType').classList.replace('header-light','header-coffee');
//         document.getElementById('menuTitle').classList.remove('row1-single');
//     } else if(theme=='header-coffee'){
//         theme = 'header-lighter'
//         document.getElementById('menuType').classList.replace('header-coffee','header-light');
//         document.getElementById('menuTitle').classList.add('row1-single');

//     }
        
// }

// Fonction pour faire apparaître le resume
function papier(element){
    if(document.getElementById(element).hidden == false){
        document.getElementById(element).hidden = true;
    } else if (document.getElementById(element).hidden == true){
        document.getElementById(element).hidden = false;
    }
}

// Fonctions pour faire tourner le menu

// function controlDisplay(){
//     document.getElementById("controlG").hidden = false;
//     document.getElementById("controlD").hidden = false;
// }

// function controlHidden(){
//     document.getElementById("controlG").hidden = true;
//     document.getElementById("controlD").hidden = true;
// }

function tournerG(){
    document.getElementById('menu').style.setProperty('animation-play-state','paused');
    document.getElementById('controlPause').innerHTML = '>';

    var el = window.getComputedStyle(document.getElementById('menu'));
    var currentAngle = el.getPropertyValue('rotate');

    var newAngle = "calc(" + currentAngle + " + 20deg)";
    document.getElementById('menu').style.setProperty('rotate',newAngle);

}

function tournerD(){
    document.getElementById('menu').style.setProperty('animation-play-state','paused');
    document.getElementById('controlPause').innerHTML = '>';

    var el = window.getComputedStyle(document.getElementById('menu'));
    var currentAngle = el.getPropertyValue('rotate');

    var newAngle = "calc(" + currentAngle + " - 20deg)";
    document.getElementById('menu').style.setProperty('rotate',newAngle);
}

function pause(){
    var el = window.getComputedStyle(document.getElementById('menu'));
    var state = el.getPropertyValue('animation-play-state');

    if (state == 'running'){
        document.getElementById('menu').style.setProperty('animation-play-state','paused');
        document.getElementById('controlPause').innerHTML = '>';
    } else if (state == 'paused') {
        document.getElementById('menu').style.setProperty('animation-play-state','running');
        document.getElementById('menu').style.setProperty('rotate','calc(360deg * var(--progressSpin) * -1)');
        document.getElementById('controlPause').innerHTML = 'II';
    }
    
}

const follower = document.getElementById('anime');
follower.hidden = true;

document.addEventListener('mouseleave', (e) => {
    follower.hidden = true;
});

document.addEventListener('mousemove', (e) => {
    follower.hidden = false;
    follower.style.left = `${e.clientX}px`;
    follower.style.top = `${e.clientY}px`;
});

