// Capturando os 3 campos da tela.
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let btnEntrar = document.getElementById('btn-entrar');

// Aqui captuto o evento de click para tomar uma ação qualquer
btnEntrar.addEventListener('click', () => {
    let userEmail = email.value;
    let userSenha = senha.value;

    //Muda de página para usuários cadastrados
    window.open('cadastro-usuario.html', '_self')
});