const scriptURL = 'https://script.google.com/macros/s/AKfycbxOQEb95_zvFOwg43rhLkjLkH0wd0DZKNKOy85SsYJyrTxhbZ_mkcyuTwTYrxjz4D24dw/exec';

const form = document.forms['form-contato'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        if (response.ok) {
            alert("Obrigado! Seu formulário foi enviado com sucesso.");
            form.reset(); // Limpa os campos após o envio bem-sucedido
        } else {
            alert("Oops! Algo deu errado.");
        }
    })
    .catch(error => console.error('Erro!', error.message));
});