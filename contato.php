<?php

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/css/style.css">
  <title>Contato</title>
</head>

<body>
  <section class="contato-formulario" aria-label="Formulário">
    <form class="form" action="enviar.php" method="post">
      <div>
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Seu nome">
      </div>
      <div>
        <label for="telefone">Telefone</label>
        <input type="text" id="telefone" name="telefone" placeholder="(99) 99999-9999">
      </div>
      <div class="col-2">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="contato@email.com">
      </div>
      <div class="col-2">
        <label for="mensagem">Mensagem</label>
        <textarea rows="5" id="mensagem" name="mensagem" placeholder="O que você precisa?"></textarea>
      </div>
      <button type="submit" class="botao col-2">Enviar Mensagem</button>
    </form>
  </section>
</body>

</html>