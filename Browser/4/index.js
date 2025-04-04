const ageTable = document.getElementById('age-table');
console.log(ageTable);

const labels = ageTable.querySelectorAll('label');
console.log(labels);

const firstTd = ageTable.querySelector('td');
console.log(firstTd);

const searchForm = document.querySelector('form[name="search"]');
console.log(searchForm);

const firstInput = searchForm.querySelector('input');
console.log(firstInput);

const inputs = searchForm.querySelectorAll('input');
const lastInput = inputs[inputs.length - 1];
console.log(lastInput);
