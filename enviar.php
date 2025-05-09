<?php
include("includes/config.php");
include("vendor/autoload.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$post = filter_input_array(INPUT_POST);

$nome = $post['nome'];
$telefone = $post['telefone'];
$email = $post['email'];
$mensagem = $post['mensagem'];

$nome = $post['nome'];
$telefone = $post['telefone'];

$telefoneNumerico = preg_replace('/\D/', '', $telefone);

if (strlen($telefoneNumerico) === 11) {
    $telefoneFormatado = preg_replace('/(\d{2})(\d{5})(\d{4})/', '($1) $2-$3', $telefoneNumerico);
} elseif (strlen($telefoneNumerico) === 10) {
    $telefoneFormatado = preg_replace('/(\d{2})(\d{4})(\d{4})/', '($1) $2-$3', $telefoneNumerico);
} else {
    $telefoneFormatado = $telefone;
}

$telefone = $telefoneFormatado;

$email = $post['email'];
$mensagem = $post['mensagem'];

$body = "
  <table width='100%' cellpadding='0' cellspacing='0' border='0' style='font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;'>
    <tr>
      <td align='center'>
        <table width='600' cellpadding='0' cellspacing='0' border='0' style='background-color: #ffffff; padding: 20px; border: 1px solid #dddddd;'>
          <tr>
            <td align='center' style='padding-bottom: 20px;'>
              <h2 style='margin: 0; color: #333333;'>Nova mensagem de contato do site</h2>
            </td>
          </tr>
          <tr>
            <td style='color: #333333;'>
              <p><strong>Nome:</strong> {$nome}</p>
              <p><strong>Telefone:</strong> {$telefone}</p>
              <p><strong>Email:</strong> {$email}</p>
              <p><strong>Mensagem:</strong></p>
              <p style='background-color: #f1f1f1; padding: 10px; color: #000000;'>{$mensagem}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
";

$mail = new PHPMailer(true);

try {
  //Server settings
  $mail->isSMTP();
  $mail->Host       = SMTP_HOST;
  $mail->SMTPAuth   = true;
  $mail->Username   = SMTP_USER;
  $mail->Password   = SMTP_PASS;
  $mail->Port       = SMTP_PORT;
  $mail->CharSet    = 'utf8'; //utf8 / iso-8859-1

  //Recipients
  $mail->setFrom('pauloluz566@gmail.com', 'Paulo Henrique'); //Quem está mandando o email
  $mail->addAddress('pauloluz566@gmail.com', 'Paulo Henrique');     //Quem vai receber o email

  //Content
  $mail->isHTML(true);                                  //Set email format to HTML
  $mail->Subject = 'Contato do Site: ' . $nome;
  $mail->Body    = $body;

  $mail->send();
  echo 'Email Enviado com Sucesso!';
} catch (Exception $e) {
  echo "Error: {$mail->ErrorInfo}";
}