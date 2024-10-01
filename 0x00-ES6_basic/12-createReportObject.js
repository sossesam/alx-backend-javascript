export default function createReportObject(employeeList) {
  const theObject = {};
  const emplist = {};
  for (const [key, value] of Object.entries(employeeList)) {
    emplist[`${key}`] = value;
  }
  theObject.allEmployees = emplist;
  theObject.getNumberOfDepartments = () => Object.keys(theObject).length;
  return theObject;
}
