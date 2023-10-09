const students = [
  { name: "Ram", scores: [80, 95, 60] },
  { name: "Mohan", scores: [85, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [95, 90, 94] },
];

function highPerformer(students) {
  let scoresArr = students.map((student) => {
    let avg = student.scores.reduce((acc, curr) => {
      let avgtotal = acc + curr;
      return avgtotal;
    });
    let name = student.name;
    let average = avg / student.scores.length;
    return { name: student.name, average: average };
  });

  let result = scoresArr.filter((stud) => {
    return stud.average > 90;
  });
  console.log(result);
  return result;
}

highPerformer(students);
