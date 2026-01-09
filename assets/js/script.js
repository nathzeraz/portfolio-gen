const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const campoNome = document.querySelector('#name');
    const errNome = document.querySelector('#errNome');

    if (campoNome.value.length < 3) {
        errNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres.";
        campoNome.focus();
        return;
    } else {
        errNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const errEmail = document.querySelector('#errEmail');

    if (!campoEmail.value.match(emailRegex)) {
        errEmail.innerHTML = 'Digite um email válido.';
        campoEmail.focus();
        return;
    } else {
        errEmail.innerHTML = '';
    }

    const campoMensagem = document.querySelector('#subject');
    const errSubject = document.querySelector('#errSubject');

    if (campoMensagem.value.length < 5) {
        errSubject.innerHTML = "O Assunto deve ter no mínimo 5 caracteres.";
        campoMensagem.focus();
        return;
    } else {
        errSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');

    window.alert("Formulário enviado com sucesso!");

    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMessage.value = '';
});