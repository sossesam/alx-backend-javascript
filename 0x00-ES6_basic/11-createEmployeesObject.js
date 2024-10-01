export default function createEmployeesObject(departmentName, employees) {
    let obj = {}
    let anArray = []
    obj[`${departmentName}`]= anArray
    for(const emp of employees){
        anArray.push(emp)
    }
    return obj;
}
