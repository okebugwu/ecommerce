const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}
// This is to ADD TO localstorage
// localStorage.setItem("carts",JSON.stringify([{
//     "id":1,
//     "price":12000,
//     "name":"product name"
// },
// {
//     "id":1,
//     "price":12000,
//     "name":"product name"
// }
// ]));

// JSON.parse(localStorage.getItem("cart"));
