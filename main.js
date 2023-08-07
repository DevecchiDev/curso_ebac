const form = document.getElementById('form-validation');

function validaNumero(primeiroValor, segundoValor) {
    return segundoValor > primeiroValor;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const primeiroValor = parseFloat(document.getElementById('primeiro-numero').value);
    const segundoValor = parseFloat(document.getElementById('segundo-numero').value);
    const mensagemSucesso = `Validação correta! O segundo valor ${segundoValor} é maior que o primeiro valor ${primeiroValor}`;

    if (primeiroValor === segundoValor) {
        alert("Validação incorreta, os dois valores são iguais!");
    } else if (validaNumero(primeiroValor, segundoValor)) {
        alert(mensagemSucesso);
    } else {
        alert("Validação incorreta, o segundo valor não é maior que o primeiro valor!");
    }

    document.getElementById('primeiro-numero').value = '';
    document.getElementById('segundo-numero').value = '';
});