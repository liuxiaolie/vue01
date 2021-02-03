var name='小明'
var age = 18
var flag=true
function sum(num1,num2){
  return num1 + num2
}
if (flag){
  console.log(sum(20,30))
}
//导出方式一
export {name,flag,sum}
//导出方式二
export var num1 = 100
export var height = 1.88
//导出方法/类
export function mul(num1,num2){
  return num1 * num2
}
export class Person{
  run(){
    console.log("在奔跑")
  }
}
//export default 只有有一个，import的时候可以随便命名
const address='北京市'
export default address
