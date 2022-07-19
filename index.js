const fs = require("fs");
const inquirer = require("inquirer");


inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'place',
    },
    {
        type: 'input',
        message: 'What is your favorite color?',
        name: 'color',
    },
    {
        type: 'input',
        message: 'What is your github url?',
        name: 'url',
    },

    ])
    .then((response) => {
    console.log(JSON.stringify(response))
    // var name = response.name
    // name.style.backgroundColor="red"

    var info = ` <head><link rel="stylesheet" href="./style.css" /></head> 
    <h1 style="color:red;">${response.name}</h1> 
    <h2>${response.place}</h2> 
    <h2>${response.color}</h2> 
    <h2>${response.url}</h2>`
    fs.writeFile("response.html", info, err => console.log(err))
    console.log(response)



    }
    );


   

   