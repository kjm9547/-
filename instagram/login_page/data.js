const sign_bt = document.querySelector('#sign_in_bt')
const user_id = document.querySelector('#id_input')
const user_pass = document.querySelector('#pass_input')

sign_bt.addEventListener('click',Check_input_value )

function Check_input_value(){

    if(user_id.value === 'woals8115' && user_pass.value === 'kjm9547'){
        console.log('hi')
        user_id.value = ''
        location.href = `/instagram/info_page/info_page.html`
        
    }
    else{
        console.log('fuck')
        alert('정보가 잘 못 되었습니다')
    }
}