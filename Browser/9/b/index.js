let counter = 1;
const display = document.querySelector('.display');
const timerId = setInterval(createCard, 2000);

function createCard() {
    if (counter > 6) {
        clearInterval(timerId);
        return;
    }

    const card = document.createElement('div');
    const img = document.createElement('img');
    const description = document.createElement('div');
    const paragraph = document.createElement('p');

    card.className = 'card';
    description.className = 'description';
    img.src = `https://thispersondoesnotexist.com/?${counter}`;
    img.alt = 'Avatar';
    paragraph.textContent = `Персона номер ${counter}`;

    description.appendChild(paragraph);
    card.append(img, description);
    display.appendChild(card);

    console.log(counter)
    counter++;
}