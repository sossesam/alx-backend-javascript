export default function createReportObject(employeeList) {
 
 let allEmployees = {
    funcname:"name",
    func: function (){console.log(this.funcname)}
 }
 return allEmployees;
}

let call = createReportObject({ Software: [ 'Bob', 'Sylvie' ] })
call.func()
