const box = document.querySelector('#color_box')
const button = document.querySelector('#change_bt')
const change_size = document.querySelector('#size_ch')
const return_bt = document.querySelector('#return').addEventListener('click', click_reset)

button.addEventListener('click',click_ev)
change_size.addEventListener('click', click_size)

function click_ev(){
    const ran_num = Math.trunc(Math.random()*360)
    const abc = `hsl( ${ran_num}, 70%, 50%)`
    box.style.setProperty('background-color', abc)
}

function click_size(){
    const ran_width = Math.trunc(Math.random()*100)
    const input_size = `${ran_width}%`
    box.style.setProperty('width' , input_size)
}
function click_reset(){
    const defalt_color = `brown`
    const defalt_size = `500px`
    const defalt_size_h = `600px`

    box.style.setProperty('width', defalt_size)
    box.style.setProperty('height', defalt_size_h)
    box.style.setProperty('background-color', defalt_color)
    
    
}
