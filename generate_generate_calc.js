const fs = require('fs')
const path = process.cwd()

const maxloops = 3

let sourcecode = `const fs = require('fs');const path = process.cwd();let sourcecode = "const calculation = '4+5+6'; switch (calculation) {";`

let sumtemplate = ""
let answertemplate = "${"
for (let i=0; i < maxloops; i++){
    let varname = "s" + i
    sumtemplate += "${" + varname + "}+"
    answertemplate += varname + "+"
}

sumtemplate = sumtemplate.slice(0, -1)
answertemplate = answertemplate.slice(0, -1)
answertemplate += "}"

for (let i=0; i < maxloops; i++){
    let varname = "s" + i
    sourcecode += `for (let ${varname} = 0; ${varname} < 10; ${varname}++){`
}

sourcecode += "sourcecode += `case '" + sumtemplate + "':console.log('" + answertemplate + "');break;`"

for (let i=0; i < maxloops; i++){
    sourcecode += `}`
}

sourcecode += `sourcecode += 'default:console.log("error");break;}';fs.writeFileSync(path + "/calculator.js", sourcecode)`

fs.writeFileSync(path + "/generate_calc.js", sourcecode)