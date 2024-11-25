#!/usr/bin/node

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Welcome to Holberton School, what is your name?", function(answer) {
    process.stdout.write("Your name is: " + answer + "\n");
    process.stdout.write("This important software is now closing\n")
    rl.close();
 });

  