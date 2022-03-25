const path = require("path");

function treeFn(dirPath)
{
    if(dirPath == undefined)
    {
        console.log("please enter a vaild path");
        return;
    }
    let doesExist = fs.existsSync(dirPath);
    if(doesExist == true)
    {
        treeHelper(dirPath," ");
    }

}
function treeHelper(targePath,indent)
{
    let isFile = fs.lstatSync(targetPath).isFile();

    if(isFile == true)
    {
        let fileName = path.basename(targetPath);
        console.log(indent + "___"+fileName);
        return ;
    }
    let dirName = path.basename(targetPath);
    console.log(indent+"___"+fileName);

    let children = fs.readdirSync(targetPath);

    for(let i=0;i<children.length;i++)
    {
        let childpath =  path.join(targetPath,children[i]);
        treeHelper(childpath,indent+"\t");

    }
}