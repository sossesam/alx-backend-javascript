export default function createReportObject(employeeList) {
  const theObject = {};
  const emplist = {};
  for (const [key, values] of Object.entries(employeeList)) {
    const newValue = [];
    for (const item of values) {
      newValue.push(item);
    }
    emplist[`${key}`] = newValue;
  }
  theObject.allEmployees = emplist;
  theObject.getNumberOfDepartments = (anObject) => Object.keys(anObject).length;
  return theObject;
}
