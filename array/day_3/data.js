const member_info= [
    {id:'여우', age:27},
    {id:"사자", age:32},
    {id:"기린", age:41},
    {id:"얼룩말", age:56},
]
const click_bt20 = document.querySelector('#up_20');
const click_bt30 = document.querySelector('#up_30');
const click_bt40 = document.querySelector('#up_40');

click_bt20.addEventListener('click',updatelist1)
click_bt30.addEventListener('click',updatelist2)
click_bt40.addEventListener('click',updatelist3)

function updatelist1(){
    const new_ar = member_info.filter((new_data)=> new_data.age>20)
    console.log(new_ar)
    let list_data="";
    for(const data of new_ar){
        list_data += `<li>${data.id}:${data.age} </li>`}
        console.log(list_data)

    document.querySelector('#data_list').innerHTML = list_data

}
function updatelist2(){
    const new_ar = member_info.filter((new_data)=> new_data.age>30)
    console.log(new_ar)
    let list_data="";
    for(const data of new_ar){
        list_data += `<li>${data.id}:${data.age} </li>`}
        console.log(list_data)

    document.querySelector('#data_list').innerHTML = list_data

}
function updatelist3(){
    const new_ar = member_info.filter((new_data)=> new_data.age>40)
    console.log(new_ar)
    let list_data="";
    for(const data of new_ar){
        list_data += `<li>${data.id}:${data.age} </li>`}
        console.log(list_data)

    document.querySelector('#data_list').innerHTML = list_data

}