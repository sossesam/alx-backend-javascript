var student1 = {
    firstName: "sanmi",
    lastName: "oyeniran",
    age: 30,
    location: "lagos"
};
var student2 = {
    firstName: "ope",
    lastName: "oyeniran",
    age: 20,
    location: "ibadan"
};
var studentsList = [student1, student2];
var tableHTML = '<table border="1"><tr>';
Object.keys(studentsList[0]).forEach(function (key) {
    tableHTML += "<th>".concat(key, "</th>");
});
tableHTML += '</tr>';
studentsList.forEach(function (item) {
    tableHTML += '<tr>';
    Object.values(item).forEach(function (value) {
        tableHTML += "<td>".concat(value, "</td>");
    });
    tableHTML += '</tr>';
});
tableHTML += '</table>';
document.body.innerHTML += tableHTML;
