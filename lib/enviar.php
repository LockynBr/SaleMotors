<?php
// Bloqueia acesso direto via GET
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Location: /');
  exit();
}

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/formatadores.php';
require_once __DIR__ . '/validadores.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$post = $_POST;

//Recuperando o valor do form
$nome     = $post['nome'] ?? '';
$telefone = formatarTelefone($post['telefone'] ?? '');
$email    = $post['email'] ?? '';
$mensagem = $post['mensagem'] ?? '';

// Validação de dados
$erros = [];
if ($erro = validarNome($nome)) {
  $erros['nome'] = $erro;
}
if ($erro = validarEmail($email)) {
  $erros['email'] = $erro;
}
if ($erro = validarTelefone($telefone)) {
  $erros['telefone'] = $erro;
}
if ($erro = validarMensagem($mensagem)) {
  $erros['mensagem'] = $erro;
}

// Se todos os itens não forem validados
if (!empty($erros)) {
  $referer = $_SERVER['HTTP_REFERER'] ?? '/';
  $url_parts = parse_url($referer);
  parse_str($url_parts['query'] ?? '', $query_params);
  unset($query_params['status']);
  $query_params['status'] = 'erro';
  $new_query = http_build_query($query_params);
  $referer = $url_parts['scheme'] . '://' . $url_parts['host'] . $url_parts['path'] . '?' . $new_query;
  $hash = '#contato-dados';
  header("Location: {$referer}{$hash}");
  exit();
}

$mail = new PHPMailer(true);

try {
  // Configuração do servidor SMTP
  $mail->isSMTP();
  $mail->Host       = SMTP_HOST;
  $mail->SMTPAuth   = true;
  $mail->Username   = SMTP_USER;
  $mail->Password   = SMTP_PASS;
  $mail->Port       = SMTP_PORT;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->CharSet    = 'utf8';

  // Remetente e destinatário
  $mail->setFrom(SMTP_RECIVER, 'Contato do Site');
  $mail->addAddress(SMTP_RECIVER, 'Contato do Site');


  // Corpo do e-mail
  $mail->isHTML(true);
  $mail->Subject = 'Novo contato de ' . htmlspecialchars($nome);
  $mail->Body = "
  <table width='100%' cellpadding='0' cellspacing='0' border='0' style='font-family: Arial, sans-serif; background-color: #f9f9f9; padding:   20px;'>
    <tr>
      <td align='center'>
        <table width='600' cellpadding='0' cellspacing='0' border='0' style='background-color: #ffffff; padding: 20px; border: 1px solid  #dddddd;'>
          <tr>
            <td align='center' style='padding-bottom: 20px;'>
              <h2 style='margin: 0; color: #333333;'>Nova mensagem de contato do site</h2>
            </td>
          </tr>
          <tr>
            <td style='color: #333333;'>
              <p><strong>Nome:</strong> " . htmlspecialchars($nome) . "</p>
              <p><strong>Telefone:</strong> " . htmlspecialchars($telefone) . "</p>
              <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
              <p><strong>Mensagem:</strong></p>
              <p style='background-color: #f1f1f1; padding: 10px; color: #000000;'>" . nl2br(htmlspecialchars($mensagem)) . "</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  ";

  $mail->send();

  //Criando e Setando url para mensagem de sucesso
  $referer = $_SERVER['HTTP_REFERER'] ?? '/';
  $url_parts = parse_url($referer);
  parse_str($url_parts['query'] ?? '', $query_params);

  unset($query_params['status']);

  $query_params['status'] = 'sucesso';
  $new_query = http_build_query($query_params);
  $referer = $url_parts['scheme'] . '://' . $url_parts['host'] . $url_parts['path'] . '?' . $new_query;

  // Local de redirecionamento da página
  $hash = '#contato-dados';
  header("Location: {$referer}{$hash}");
  exit();
} catch (Exception $e) {
  //Criando e Setando url para mensagem de erro
  $referer = $_SERVER['HTTP_REFERER'] ?? '/';
  $url_parts = parse_url($referer);
  parse_str($url_parts['query'] ?? '', $query_params);

  unset($query_params['status']);

  $query_params['status'] = 'erro';
  $new_query = http_build_query($query_params);
  $referer = $url_parts['scheme'] . '://' . $url_parts['host'] . $url_parts['path'] . '?' . $new_query;

  // Local de redirecionamento da página
  $hash = '#contato-dados';
  header("Location: {$referer}{$hash}");
  echo 'Erro ao enviar o e-mail: ' . $mail->ErrorInfo;
  exit();
}
