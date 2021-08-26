// const my_ar = [1,2,3,34,4,5,5,6,6,7]
// const arraylength = my_ar.length
// document.querySelector('button').addEventListener('click',shufl)

// function shufl(){    
// for(let i = arraylength - 1; i >=0; i--){
//     const randome_num = Math.floor(Math.random() * (i+1));
//     [my_ar[i], my_ar[randome_num]] = [my_ar[randome_num], my_ar[i]];
// }
// console.log(my_ar)
// }

//객체 복사
const my_ar = [{
    id:1,
    name:['s','2']
}]
const virtuar_ar = Object.assign({},my_ar)
my_ar[0].name = 'd'

console.log(my_ar[0].name)
console.log(virtuar_ar[0].name)