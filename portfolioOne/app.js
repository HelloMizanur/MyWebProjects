const hemburg = document.querySelector('#hemburg');
const menu = document.querySelector('#menu');
const hlink = document.querySelectorAll('#hlink');

hemburg.addEventListener('click', ()=>{
    menu.classList.toggle('hidden');
});



hlink.forEach(link =>{
    link.addEventListener('click', ()=>{
    menu.classList.toggle('hidden');
})
})