const input_text = document.querySelector('#textbox_1')
const result_box = document.querySelector('#ptag')
const re_bt = document.querySelector('#reset_bt')
input_text.addEventListener('keyup', keyup_textbox)
re_bt.addEventListener('click', Onclick_bt)

const myarray = [
    { id: '123', name: '곰' },
    { id: '6031', name: '권동혁' },
    { id: '2621', name: '손광제' }
]
function keyup_textbox() {

    const num = myarray.find((value_data) => value_data.id === input_text.value)
    if(num == null){
        result_box.textContent = ";;"
        return;
    }
    result_box.textContent = num.name
}

function Onclick_bt(){
    input_text.value = ""
}
