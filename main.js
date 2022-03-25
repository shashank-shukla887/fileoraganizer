//entry point of my command line
let helpFunc = require("./commands/help");
let orgFunc = require("./commands/organize");
let treeFunc = require("./commands/tree");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch(command)
{
    case "tree":
        //console.log("ok"+path);
        treeFunc.tree(path);
        break;
    case "organize":
        orgFunc.organize(path);
       // console.log("Organize"+path);
        break;
    case "help":
        helpFunc.help();
        break;
    default:
        console.log("wrong input");
        break;
 // organize.js 
    
}
