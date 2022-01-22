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
let userModal = document.getElementById('modalUser');
let closeUserBtn = document.getElementById('closeLogin');

openUserBtn.addEventListener('click', function()
{
    console.log(openUserBtn)
    userModal.classList.add('shows')
});

closeUserBtn.addEventListener('click', function()
{
    userModal.classList.remove('shows')
});




let openModalMess = document.getElementById('messenger');
let messModal = document.getElementById('modulMess');
let closeModalMess = document.getElementById('minus');

openModalMess.addEventListener('click', function()
{
    console.log(openModalMess)
    messModal.classList.toggle('showmess')

});

// closeModalMess = document.addEventListener('click', function()
// {
//     messModal.classList.remove('showmess')

// });
