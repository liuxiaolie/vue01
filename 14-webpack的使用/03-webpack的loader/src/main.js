//commomjs模块化导入
const {add,mul} = require("./js/mathutils.js")
console.log(add(20,30))
console.log(mul(20,30))
import * as aaa from "./js/aaa"

console.log(aaa.name)
console.log(aaa.age)
console.log(aaa.height)
//  依赖css
const a = require("./css/bbb.css")
//依赖less文件
require("./css/special.less")
document.writeln("<h2>圣诞节送肯德基撒肯德基萨村</h2>")