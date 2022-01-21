let openModalBtn = document.querySelector('#searchMod')
let modalBtn = document.getElementById('modal-sr')
let closeModalBtn = document.getElementById('close-btn');


openModalBtn.addEventListener('click', function(){
    console.log(openModalBtn);
    modalBtn.classList.add('show')
});

closeModalBtn.addEventListener('click', function()
{
    modalBtn.classList.remove('show')

});

let openUserBtn = document.getElementById('user');
let userModal = document.getElementById('modal-user');
let closeUserBtn = document.getElementById('close-login');

openUserBtn.addEventListener('click', function()
{
    console.log(openUserBtn);
    userModal.classList.add('shows')
});

closeUserBtn.addEventListener('click', function()
{
    userModal.classList.remove('shows')
});