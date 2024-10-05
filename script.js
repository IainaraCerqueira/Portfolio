// Menu Toggle para dispositivos móveis
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Formulário de Contato
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

// Alternar tema claro/escuro
const themeToggleButton = document.getElementById('theme-toggle');

// Alterna classes de tema
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Muda o texto do botão com base no tema atual
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Tema Claro'; // Exibe "Tema Claro" no modo escuro
    } else {
        themeToggleButton.textContent = 'Tema Escuro'; // Exibe "Tema Escuro" no modo claro
    }
    
    // Armazenar a preferência do tema
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
});

// Inicialização padrão do tema
if (!localStorage.getItem('theme')) {
    document.body.classList.add('light-mode');
    themeToggleButton.textContent = 'Tema Escuro'; // Inicia com "Tema Escuro"
} else {
    document.body.classList.add(localStorage.getItem('theme'));
    
    // Atualiza o texto do botão com base no tema armazenado
    if (localStorage.getItem('theme') === 'dark-mode') {
        themeToggleButton.textContent = 'Tema Claro'; // Se o tema for escuro, exibe "Tema Claro"
    } else {
        themeToggleButton.textContent = 'Tema Escuro'; // Se o tema for claro, exibe "Tema Escuro"
    }
}