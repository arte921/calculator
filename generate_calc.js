const fs = require('fs');const path = process.cwd();let sourcecode = "const calculation = '4+5+6'; switch (calculation) {";for (let s0 = 0; s0 < 10; s0++){for (let s1 = 0; s1 < 10; s1++){for (let s2 = 0; s2 < 10; s2++){sourcecode += `case '${s0}+${s1}+${s2}':console.log('${s0+s1+s2}');break;`}}}sourcecode += 'default:console.log("error");break;}';fs.writeFileSync(path + "/calculator.js", sourcecode)