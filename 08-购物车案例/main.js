const app = new Vue({
  el:'#app',
  data:{
    books:[
      {id:1,name:'《算法导论》',data:'2006-9',price:12.012,count:1},
      {id:2,name:'《UNIX编程艺术》',data:'2006-2',price:13.012,count:1},
      {id:3,name:'《编程珠玑》',data:'2008-10',price:14.012,count:1},
      {id:4,name:'《代码大全》',data:'2006-3',price:18.044,count:1}
    ]
  },
  methods:{
    getfinalprice(price) {
      return '¥' + Math.ceil(price*100)/100
    },
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    removeHandle(index){
      this.books.splice(index,1)
    }
  },
  filters:{
    showPrice(price){
      return '¥' + price.toFixed(2)
    }
  },
  computed:{
    totolprice: function (){
      // let result = 0;
      // for (let i = 0; i <this.books.length; i++){
      //   result += this.books[i].price*this.books[i].count
      // }
      //函数式编程
      return this.books.reduce(function (preValue,book){
        return preValue+ book.price * book.count
      },0)
      // return result


    }
  }
})
