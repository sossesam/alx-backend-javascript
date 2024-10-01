export default function createEmployeesObject(departmentName, employees) {
  const obj = {};
  const anArray = [];
  obj[`${departmentName}`] = anArray;
  for (const emp of employees) {
    anArray.push(emp);
  }
  return obj;
}
