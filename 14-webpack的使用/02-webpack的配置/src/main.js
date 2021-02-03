//commomjs模块化导入
const {add,mul} = require("./mathutils.js")
console.log(add(20,30))
console.log(mul(20,30))
import * as aaa from "./aaa"

console.log(aaa.name)
console.log(aaa.age)
console.log(aaa.height)