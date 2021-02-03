//commomjs模块化导入
const {add,mul} = require("./mathutils.js")
console.log(add(20,30))
console.log(mul(20,30))
import * as aaa from "./aaa"

console.log(aaa.name)
console.log(aaa.age)
console.log(aaa.height)
import vue from 'vue'
import App from './vue/App.vue'
//第二种方式
// const App={
//   template:`
//   <div>
//   <h1>{{message}}</h1>
//  </div>
//   `,
//   data(){
//     return {
//       message:'hello vue'
//     }
//   }
// }
new vue({
  el:'#app',
  template: '<App/>',
  components:{
    App
  }
})
//第一种方案
// new vue({
//   el:'#app',
//   template:`
//   <div>
//   <h1>{{message}}</h1>
// </div>
//   `,
//   data:{
//     message:'hello vue'
//   }
// })