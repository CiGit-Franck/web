const frame = 'page';

document.getElementById('last-measure').onclick = function() {
    cleanElementContent(frame);
    const title = document.createElement('h1');
    title.textContent = 'Menu I';
    document.getElementById(frame).appendChild(title);
}

document.getElementById('top-measure').onclick = function() {
    cleanElementContent(frame);
    const title = document.createElement('h1');
    title.textContent = 'Menu II';
    document.getElementById(frame).appendChild(title);
}

document.getElementById('list-measure').onclick = function() {
    cleanElementContent(frame);
    const title = document.createElement('h1');
    title.textContent = 'Menu III';
    document.getElementById(frame).appendChild(title);
}

document.getElementById('graph-measure').onclick = function() {
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
