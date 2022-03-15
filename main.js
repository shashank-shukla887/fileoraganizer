//entry point of my command line
let helpFunc = require("./commands/help");

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch(command)
{
    case "tree":
        console.log("ok"+path);
        break;
    case "organize":
        console.log("prganize"+path);
        break;
    case "help":
        helpFunc.help();
        break;
    default:
        console.log("wrong input");
        break;
    
}
