export default function initContato() {
  const form = document.querySelector('.form');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    const campos = [nome, telefone, email, mensagem];
    document.querySelectorAll('.erro-msg').forEach((el) => el.remove());

    let valido = true;

    if (nome.value.trim().length < 3) {
      mostrarErro(nome, 'Nome muito curto.');
      valido = false;
    }

    const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
    if (!telefoneRegex.test(telefone.value.trim())) {
      mostrarErro(telefone, 'Telefone inválido.');
      valido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      mostrarErro(email, 'Email inválido.');
      valido = false;
    }

    if (mensagem.value.trim().length < 10) {
      mostrarErro(
        mensagem,
        'Escreva uma mensagem com pelo menos 10 caracteres.',
      );
      valido = false;
    }

    if (valido) {
      // alert('Formulário enviado com sucesso!');
      form.submit();
    }
  });

  function mostrarErro(campo, mensagem) {
    const erro = document.createElement('span');
    erro.className = 'erro-msg';
    erro.style.color = 'red';
    erro.style.fontSize = '0.9em';
    erro.style.display = 'block';
    erro.style.marginTop = '4px';
    erro.innerText = mensagem;
    campo.parentElement.appendChild(erro);
  }
}
