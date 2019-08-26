import { cube } from './math.js';

function getComponent() {
  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    `5 ao cubo é igual a ${cube(5)}`
  ].join('\n\n');

  return element;
}

document.body.appendChild(getComponent())

