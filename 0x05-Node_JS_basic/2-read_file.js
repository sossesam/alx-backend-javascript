
const fs = require('fs')

function countStudents(path){

    fs.open(path, "r+", (err, fd)=>{
        if (!fs.existsSync(dataPath)) {
            throw new Error('Cannot load the database');
          }
          else if (!fs.statSync(dataPath).isFile()) {
            throw new Error('Cannot load the database');
          
    }else{
        let content = fs.readFileSync(path, 'utf-8')
    
    let line = content.split('\n')
    //lets get the header-names
    let header_names = line[0].split(',')
    
    //lets create an array for the objects
    let all_students = []
    let fields = {}
    let firstname = ""

    //creating the objects and adding them to a feild
    for(i = 1; i < line.length; i++){
        let cell = line[i].split(',')
        let student = {}
        for(j=0; j < cell.length; j++){
            student[header_names[j]] = cell[j]

            if(header_names[j] == "firstname"){
                firstname = cell[j]
            }

            if(header_names[j] == "field"){
                if(Object.keys(fields).includes(cell[j])){
                    fields[cell[j]].push(firstname)
                }else{
                    fields[cell[j]] = [firstname]
                }
                
            }
            
        }
        all_students.push(student)
    }

    //sort the feild 
    console.log(`Number of students: ${all_students.length}`)
    
    Object.entries(fields).forEach(([key, value]) => {
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.toString().replaceAll(",", ", ")}`);
    });
    }
    }) 
}

module.exports = countStudents