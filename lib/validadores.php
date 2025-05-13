<?php

function validarNome($nome)
{
  $nome = trim($nome);
  if (strlen($nome) < 3) {
    return 'O nome deve ter pelo menos 3 caracteres.';
  }
  return '';
}

function validarEmail($email)
{
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    return 'Email inválido.';
  }
  return '';
}

function validarTelefone($telefone)
{
  $telefoneNumerico = preg_replace('/\D/', '', $telefone);
  if (strlen($telefoneNumerico) !== 10 && strlen($telefoneNumerico) !== 11) {
    return 'Telefone inválido.';
  }
  return '';
}

function validarMensagem($mensagem)
{
  $mensagem = trim($mensagem);
  if (strlen($mensagem) < 10) {
    return 'Escreva uma mensagem com pelo menos 10 caracteres.';
  }
  return '';
}