const frame = 'framePrincipal';

document.getElementById('menu1').onclick = function() {
    cleanElementContent(frame);
    const title = document.createElement('h1');
    title.textContent = 'Menu I';
    document.getElementById(frame).appendChild(title);
}

document.getElementById('menu2').onclick = function() {
    cleanElementContent(frame);
    const title = document.createElement('h1');
    title.textContent = 'Menu II';
    document.getElementById(frame).appendChild(title);
}

document.getElementById('menu3').onclick = function() {
    cleanElementContent(frame);
    const title = document.createElement('h1');
    title.textContent = 'Menu III';
    document.getElementById(frame).appendChild(title);
}

document.getElementById('menu4').onclick = function() {
    cleanElementContent(frame);
    const title = document.createElement('h1');
    title.textContent = 'Menu IV';
    document.getElementById(frame).appendChild(title);
}

function cleanElementContent(elementId) {
    const elementToClean = document.getElementById(elementId);
    while (elementToClean.firstChild) {
      elementToClean.removeChild(elementToClean.firstChild);
    }
  }
