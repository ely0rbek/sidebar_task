const remove_tag = document.querySelectorAll('.remove_tag');
const open_tag = document.querySelectorAll('.open_tag');
const header = document.querySelector('header');
const ul = document.querySelector('ul');
const hay = document.querySelectorAll('.hay');
const collapse_div = document.querySelectorAll('.collapse_div');
const li_tag = document.querySelectorAll('li');
function Remove() {
    remove_tag.forEach(item => {
        item.style.display = 'none'
    })
    open_tag.forEach(item => {
        item.style.display = 'block'
    })
    hay.forEach(item => {
        item.style.marginLeft = '7px';
    })
    header.style.width = '100px';
    collapse_div.forEach(item => {
        item.style.display = 'none'
    })
}
function Open() {
    remove_tag.forEach(item => {
        item.style.display = 'block'
    })
    open_tag.forEach(item => {
        item.style.display = 'none'
    })
    collapse_div.forEach(item => {
        item.style.display = 'block'
    })
    header.style.width = '300px';
}
// ul.addEventListener("click", (event) => {
//     console.log(event);
//     const target = event.target;
//     if (target  ) {
//         li_tag.forEach((item) => {
//             if (target == item && !target.classList.contains("active_li")) {
//                 item.classList.add("active_li");
//             }
//             else if(target.classList.contains("active_li")){
//                 item.classList.remove("active_li");
//             }
//         });
//     }
// });
