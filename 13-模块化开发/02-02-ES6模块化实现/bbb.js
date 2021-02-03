import {sum} from "./aaa.js";

var name='小红'
var flag=false
console.log(sum(200,900))
import {num1,height} from "./aaa.js";

console.log(num1)
console.log(height)
import {mul,Person} from "./aaa.js";

console.log(mul(30,90))
const  p = new Person();
p.run()
//export default 只有有一个，import的时候可以随便命名
import addr from "./aaa.js"

console.log(addr)
//同意全部导入
import * as aaa from "./aaa.js"

console.log(aaa.Person)
console.log(aaa.name)