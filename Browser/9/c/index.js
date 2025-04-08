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

    const randomName = generateRandomName();
    paragraph.textContent = `Персона: ${randomName}`;

    description.appendChild(paragraph);
    card.append(img, description);
    display.appendChild(card);

    counter++;
}

function generateRandomName() {
    const firstNames = ['Алексей', 'Мария', 'Иван', 'Ольга', 'Дмитрий', 'Екатерина'];
    const lastNames = ['Смирнов', 'Иванова', 'Кузнецов', 'Попова', 'Соколов', 'Лебедева'];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
}
