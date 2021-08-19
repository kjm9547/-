const button_name = document.querySelector('#upgrade_bt')
const upgrade_value = document.querySelector('#up_num')
const pct_num = document.querySelector('#pct_list')
button_name.addEventListener('click', OnclickButton)
console.log(pct_num)
function OnclickButton() {
    const text_num = upgrade_value.value
    // console.log(text_num) 값 들어 가는지 확인용
    const my_num = Math.floor(Math.random() * 2)
    console.log(my_num)

    if (my_num == text_num) {

        console.log("yes")
    }
    else {
        console.log("fail")
        console.log("fail")
    }
}