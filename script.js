
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    formMessage.textContent = 'Enviando mensagem...';

    setTimeout(() => {
        formMessage.textContent = 'Mensagem enviada com sucesso!';
        contactForm.reset();
    }, 2000);
});


const themeToggleButton = document.getElementById('theme-toggle');


themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Tema Claro'; 
    } else {
        themeToggleButton.textContent = 'Tema Escuro'; 
    }
    
   
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
});


if (!localStorage.getItem('theme')) {
    document.body.classList.add('light-mode');
    themeToggleButton.textContent = 'Tema Escuro'; 
} else {
    document.body.classList.add(localStorage.getItem('theme'));
    
    
    if (localStorage.getItem('theme') === 'dark-mode') {
        themeToggleButton.textContent = 'Tema Claro';
    } else {
        themeToggleButton.textContent = 'Tema Escuro';}

}