// Example A
document.getElementById('example-a').addEventListener('click', () => {
    const x = parseFloat(prompt('Введите x для вычисления sin(x):'));
    alert(`sin(${x}) = ${Math.sin(x)}`);
});

// Example B
document.getElementById('example-b').addEventListener('click', () => {
    const x1 = parseFloat(prompt('Введиете x1:'));
    const y1 = parseFloat(prompt('Введиете y1:'));
    const x2 = parseFloat(prompt('Введиете x2:'));
    const y2 = parseFloat(prompt('Введиете y2:'));
    const pointX = parseFloat(prompt('Введеите x координату точки:'));
    const pointY = parseFloat(prompt('Введеите y координату точки:'));
    const minX = Math.min(x1, x2);
    const minY = Math.min(y1, y2);
    const maxX = Math.max(x1, x2);
    const maxY = Math.max(y1, y2);
    const isInside = pointX >= minX && pointX <= maxX && pointY >= minY && pointY <= maxY;
    alert(`Точка ${pointX} ${pointY} ${isInside ? 'принадлежит' : 'не принадлежит'} квадрату`);
});

// Example C
document.getElementById('example-c').addEventListener('click', () => {
    const num = parseInt(prompt('Введите натуральное число:'));
    let canBeSum = false;
    for (let a = 1; a * a < num; a++) {
        const bSquared = num - a * a;
        const b = Math.sqrt(bSquared);
        if (Number.isInteger(b)) {
            canBeSum = true;
            break;
        }
    }
    alert(`Число ${canBeSum ? 'можно' : 'нельзя'} представить как сумму двух квадратов`);
});

// Example D
document.getElementById('example-d').addEventListener('click', () => {
    const email = prompt('Введите email:');
    if (!email.includes('@')) {
        alert('Адрес должен содержать символ @!');
    }
});

// Example E
document.getElementById('example-e').addEventListener('click', () => {
    const s = prompt('Введите строку:');
    let latinCount = 0;
    for (const char of s) {
        if (/[a-zA-Z]/.test(char)) {
            latinCount++;
        }
    }
    const percent = (latinCount / s.length) * 100;
    alert(`Доля латинских букв в процентах: ${percent}%`);
});

// Example F
document.getElementById('example-f').addEventListener('click', () => {
    const words = prompt('Введите строку:').toLowerCase().split(/\s+/);
    const uniqueWords = [...new Set(words)];
    alert(`Результат: ${uniqueWords.join('\t')}`);
});

// Example G
document.getElementById('example-g').addEventListener('click', () => {
    const n = parseInt(prompt('Введите количество чисел:'));
    const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1);
    const reversed = arr.reverse();

    let output = '';
    for (let i = 0; i < reversed.length; i++) {
        output += reversed[i] + ' ';
        if ((i + 1) % 5 === 0 || i === reversed.length - 1) output += '\n';
    }

    alert(output);
});

// Example H
document.getElementById('example-h').addEventListener('click', () => {
    const n_ = parseInt(prompt('Введите количество чисел:'));
    const matrix = Array.from({ length: n_ }, () =>
        Array.from({ length: n_ }, () => Math.floor(Math.random() * 100))
    );

    const diag = [];
    for (let i = 0; i < n_; i++) {
        diag.push(matrix[i][i]);
        diag.push(matrix[i][n_ - 1 - i]);
    }

    const max = Math.max(...diag);
    const min = Math.min(...diag);

    for (let i = 0; i < n_; i++) {
        for (let j = 0; j < n_; j++) {
            if (i === j || i + j === n_ - 1) {
                if (matrix[i][j] !== max && matrix[i][j] !== min) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    alert(matrix.map(row => row.join('\t')).join('\n'));
});

// Example I
document.getElementById('example-i').addEventListener('click', () => {
    const n__ = parseInt(prompt('Введите количество дней:'));
    const date = new Date();
    date.setDate(date.getDate() + n__);
    alert(date.toDateString());
});

// Example J
document.getElementById('example-j').addEventListener('click', () => {
    const today = new Date();
    let year = today.getFullYear();
    if (today > new Date(year, 8, 1)) year++;
    const target = new Date(year, 8, 1);
    const months = (target.getMonth() - today.getMonth() + 12) % 12;
    alert(`До сентября осталось ${months} месяц(-а/-ев)`);
});
