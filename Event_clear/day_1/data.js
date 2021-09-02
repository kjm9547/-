 document.addEventListener('DOMContentLoaded', () =>{
     const boxnum = document.querySelectorAll('#rectangle').length;

     console.log(`.rectangle의 요소의 개수는 ${boxnum} 입니다.`)
 })
//////////////////////////////////////////////////////////////////////////////////
//DOMContentLoaded 와 일반 load의 차이
//보통 js는 html이 실행 된 이후 읽어지기 때문에
//dom 요소보다 늦는데 
//dom 요소와 혹은 이미지 로딩을 먼저 완료 후 작업을 하고 싶을때 해당 함수를 이용함
//DOMContentloaded 함수는 dom의 요소들이 읽어 질 때라 해석 됨



const content_box = document.querySelector('#rectangle_mouse')
content_box.addEventListener('mousedown', () =>{
    
 content_box.innerText = `down`;
    
 })
 content_box.addEventListener('mouseup', () =>{
    
     content_box.innerText = `up`;
    
 })
 content_box.addEventListener('mousemove', () =>{
    
     content_box.innerText = `move`;
    
 })


content_box.addEventListener('mousemove', (Event) => {
    console.log(Event.clientX)
})

document.querySelector('.text').addEventListener('selectstart', () => {
    console.log('텍스트')
})
const lable_content = document.querySelector('#text_info')

const num = document.querySelector('#text_counting')
num.addEventListener('keydown',()=>{
    const counting_num = num.value;
    lable_content.innerHTML = `현재 총 ${counting_num.length+1} 입니다`
})