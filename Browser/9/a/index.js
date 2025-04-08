const header = document.createElement('header');

const main = document.createElement('main');
main.className = 'content';

const aside = document.createElement('aside');

const section = document.createElement('section');

const headerD = document.createElement('div');
headerD.className = 'header-d';
headerD.textContent = 'Выберите лицо, которое нравится вам больше остальных:';

const display = document.createElement('div');
display.className = 'display';

const card = document.createElement('div');
card.className = 'card';

const img = document.createElement('img');
img.src = 'https://thispersondoesnotexist.com';
img.alt = 'Avatar';

const description = document.createElement('div');
description.className = 'description';

const paragraph = document.createElement('p');
paragraph.textContent = 'Персона номер 1';

description.appendChild(paragraph);
card.appendChild(img);
card.appendChild(description);
display.appendChild(card);
section.appendChild(headerD);
section.appendChild(display);
main.appendChild(aside);
main.appendChild(section);

document.body.appendChild(header);
document.body.appendChild(main);
