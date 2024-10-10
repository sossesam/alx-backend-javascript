interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student={
    firstName: "sanmi",
    lastName: "oyeniran",
    age: 30,
    location: "lagos"
}

const student2: Student={
    firstName: "ope",
    lastName: "oyeniran",
    age: 20,
    location: "ibadan"
}

const studentsList : Student[] = [student1, student2]

let tableHTML = '<table border="1"><tr>';

Object.keys(studentsList[0]).forEach(key => {
    tableHTML += `<th>${key}</th>`;
    });

tableHTML += '</tr>';

studentsList.forEach(item => {
tableHTML += '<tr>';
Object.values(item).forEach(value => {
    tableHTML += `<td>${value}</td>`;
    });
    tableHTML += '</tr>';
    });

tableHTML += '</table>';

document.body.innerHTML += tableHTML;



