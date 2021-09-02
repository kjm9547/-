const my_ar = [
    { id: 5, name:"eqw" },
    { id: 4, name: '호랑이' },
    { id: 78, name: '기린' },
    { id: 105, name: '곰' },
    { id: 2, name: '여우' },
]
const my_bt_top = document.querySelector('#top_bt')
const my_bt_bot = document.querySelector('#bottom_bt')
document.querySelector('#reset').addEventListener('click',()=>{
    top_id.innerHTML = "";
});
const my_list = document.querySelector("#top_id")
my_bt_top.addEventListener('click', click_topbt)
my_bt_bot.addEventListener('click', click_btoa)
function click_topbt() {
    my_ar.sort((a, b) => {
            return a.id - b.id;
    })
    data_scan();
}

function click_btoa(){
    my_ar.sort((a, b) => {
        return b.id - a.id;
})
data_scan();
}   

function data_scan() {
    let Html_data = '';
    for (const data of my_ar) {
        Html_data += `<li>${data.id} : ${data.name}</li>`;
    }
    top_id.innerHTML = Html_data;
}

