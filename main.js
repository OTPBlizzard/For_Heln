
const modal = document.getElementById('modal');
const openModalBtn = document.querySelector('.btn');
const closeModalBtn = document.querySelector('.close-btn');


openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; 
});


closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; 
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


