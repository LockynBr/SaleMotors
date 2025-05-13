<?php
require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/formatadores.php';
require_once __DIR__ . '/validadores.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$post = $_POST;

$nome     = $post['nome'] ?? '';
$telefone = formatarTelefone($post['telefone'] ?? '');
$email    = $post['email'] ?? '';
$mensagem = $post['mensagem'] ?? '';

// Validação dos dados
if ($erro = validarNome($nome)) {
  $erros[] = $erro;
}
if ($erro = validarEmail($email)) {
  $erros[] = $erro;
}
if ($erro = validarTelefone($telefone)) {
  $erros[] = $erro;
}
if ($erro = validarMensagem($mensagem)) {
  $erros[] = $erro;
}

// Se não houver erros, envia o e-mail
if (empty($erros)) {
  $mail = new PHPMailer(true);

  try {
    // Configuração do servidor SMTP
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->Port       = SMTP_PORT;
    $mail->CharSet    = 'utf8';

    // Remetente e destinatário
    $mail->setFrom('pauloluz566@gmail.com', 'Contato do Site');
    $mail->addAddress('pauloluz566@gmail.com', 'Paulo Henrique');

    // Corpo do e-mail (com proteção contra XSS)
    $mail->isHTML(true);
    $mail->Subject = 'Novo contato de ' . htmlspecialchars($nome);
    $mail->Body    = "
      <p><strong>Nome:</strong> " . htmlspecialchars($nome) . "</p>
      <p><strong>Telefone:</strong> " . htmlspecialchars($telefone) . "</p>
      <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
      <p><strong>Mensagem:</strong><br>" . nl2br(htmlspecialchars($mensagem)) . "</p>
    ";

    $mail->send();
    $mensagemEnviada = true;
  } catch (Exception $e) {
    $erros[] = 'Erro ao enviar: ' . $mail->ErrorInfo;
  }
}