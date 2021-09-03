const select_box = document.querySelector('#about_box')
const select_bt1 = document.querySelector('#bt_about')
const select_bt2 = document.querySelector('#bt_product')
const select_bt3 = document.querySelector('#bt_technology')
const select_bt4 = document.querySelector('#bt_download')

const info_box = document.querySelector('#info_box')
document.addEventListener('DOMContentLoaded',page_load )

function page_load(){
    const color = `hsl(211, 100%, 50%)`
    info_box.innerHTML = `<h1>About</h1>
    <p>Custom Software Development Company</p>`;
    info_box.style.setProperty(`background-color`, color )
}

select_bt1.addEventListener('mousemove',page_load);
select_bt2.addEventListener('mousemove', () => {
    const color = `hsl(51, 100%, 50%)`
    info_box.innerHTML = ` <h1>Products</h1>
    <p>Building tailored software to address critical needs `;
    info_box.style.setProperty(`background-color`, color )
})
select_bt3.addEventListener('mousemove', () => {
    const color = `hsl(21, 100%, 50%)`
    info_box.innerHTML = `<h1>Technology</h1>
    <p>Machine Learning, Artificial Intelligent, Cloud Platform.</p>`;
    info_box.style.setProperty(`background-color`, color )
})
select_bt4.addEventListener('mousemove', () => {
    const color = `hsl(111, 100%, 50%)`
    info_box.innerHTML = ` <h1>Downloads</h1>
    <p>You can download a free 10 days trial.</p>`;
    info_box.style.setProperty(`background-color`, color )
})
