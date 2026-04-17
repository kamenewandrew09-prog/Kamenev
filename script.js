const grades = {
  math: [10, 9, 11, 10],
  ukrainian: [11, 10, 12, 11],
  english: [9, 8, 10, 9],
  history: [8, 7, 9, 8],
  physics: [10, 9, 10, 11],
  chemistry: [7, 6, 8, 7],
  biology: [9, 8, 10, 9],
  geography: [8, 7, 9, 8],
  informatics: [12, 11, 12, 12],
  pe: [11, 10, 12, 11]
};

const elValues = Object.entries(grades)
const newObj = {}

for(const el of elValues) {
  const subject = el[0]
  const gradesArr = el[1]
  let sum = 0
  for(const grade of gradesArr) {
    sum += grade
  }
  const average = sum / gradesArr.length

  const rounded = Math.round(average * 10) / 10
  newObj[subject] = rounded
}

console.log(newObj);

for (const el of Object.entries(newObj)) {
  const subject = el[0];
  const average = el[1];

  document.body.insertAdjacentHTML(
    'beforeend',
    `<p><u>${subject}</u>: <b>${average}</b></p>`
  );
}

for (const key of Object.keys(newObj)) {
  const average = newObj[key];

  document.body.insertAdjacentHTML(
    'beforeend',
    `<p><u>${key}</u>: <b>${average}</b></p>`
  );
}








