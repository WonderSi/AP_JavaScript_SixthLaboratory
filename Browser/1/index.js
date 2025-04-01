// Example a
const x = parseFloat(prompt('Введите x для вычисления sin(x):'));
alert(`sin(${x}) = ${Math.sin(x)}`);
// Example b
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
alert(`Точка ${pointX} ${pointY} ${isInside ? 'принадлежит' : 'непринадлежит'} квадрату`);
// Example c
const num = parseInt(prompt('Введиет наструальное число:'));
let canBeSum = false;
for (let a = 1; a*a < num; a++) {
    const bSquared = num - a * a;
    const b = Math.sqrt(bSquared);
    if (Number.isInteger(b)) {
        canBeSum = true;
        break;
    }
}
alert(`Число ${canBeSum ? 'можно' : 'нельзя'} представить как сумму двух квадратов`);
// Example d

const email = prompt('Введите email:')
if (!email.includes('@')) {
    alert('Адрес должен содержать символ @!')
}
// Example e
const s = prompt('Введите строку:');
let latinCount = 0;
for (const char of s) {
    if (/[a-zA-Z]/.test(char)) {
        latinCount++;
    }
}
const percent = latinCount / s.length * 100;
alert(`Доля латинских букв в процентах: ${percent}%`);
// Example f


// // f. Удаление повторяющихся слов
// const words = prompt('Введите строку:').toLowerCase().split(/\s+/);
// const uniqueWords = [...new Set(words)];
// alert(`Результат: ${uniqueWords.join(' ')}`);
//
// // g. Вывод массива по 5 чисел
// const n = parseInt(prompt('Введите n:'));
// const arr = Array.from({length: n}, () => Math.floor(Math.random()*100));
// let output = '';
// arr.reverse().forEach((num, i) => {
//     output += num + ((i+1)%5 === 0 ? '\n' : ' ');
// });
// alert(output);
//
// // h. Обработка матрицы
// const size = parseInt(prompt('Введите порядок матрицы:'));
// let matrix = Array.from({length: size}, () =>
//     Array.from({length: size}, () => Math.floor(Math.random()*100)));
//
// let diagValues = [];
// for (let i = 0; i < size; i++) {
//     diagValues.push(matrix[i][i]);
//     diagValues.push(matrix[i][size-1-i]);
// }
// const [minVal, maxVal] = [Math.min(...diagValues), Math.max(...diagValues)];
//
// for (let i = 0; i < size; i++) {
//     if (matrix[i][i] !== minVal && matrix[i][i] !== maxVal) matrix[i][i] = 0;
//     if (matrix[i][size-1-i] !== minVal && matrix[i][size-1-i] !== maxVal)
//         matrix[i][size-1-i] = 0;
// }
//
// // i. Добавление дней к дате
// const daysToAdd = parseInt(prompt('Введите количество дней:'));
// const date = new Date();
// date.setDate(date.getDate() + daysToAdd);
// alert(`Новая дата: ${date.toLocaleDateString()}`);
//
// // j. Месяцы до 1 сентября
// const today = new Date();
// let targetYear = today.getFullYear();
// if (today > new Date(targetYear, 8, 1)) targetYear++;
// const september = new Date(targetYear, 8, 1);
// const months = (september.getMonth() - today.getMonth() +
//     12*(september.getFullYear() - today.getFullYear())) % 12;
// alert(`До 1 сентября осталось месяцев: ${months}`);