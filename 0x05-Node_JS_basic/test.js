


// Save the original console.log method
const originalLog = console.log;

// Create a variable to capture the log output
let logOutput = "";

// Override console.log to capture messages
console.log = countStudents(csv).then((message)=>{
  
    logOutput += message + "\n";  // Append message to the logOutput string
    originalLog(message);         // Optionally, still output the message to the console
 
}) 

// Example usage


// Output the captured logs to the console
console.log("Captured logs:\n" + logOutput);

// Reset console.log to its original state (optional)
console.log = originalLog;

