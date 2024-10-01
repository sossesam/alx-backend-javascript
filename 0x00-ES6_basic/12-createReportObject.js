export default function createReportObject(employeeList) {
  const theObject = {};
  const emplist = {};
  for (const [key, values] of Object.entries(employeeList)) {
    let newValue =[]
    for (let item of values){
        newValue.push(item)
    }
    emplist[`${key}`] = newValue
  }
  theObject.allEmployees = emplist;
  theObject.getNumberOfDepartments = () => Object.keys(theObject).length;
  return theObject;
}
