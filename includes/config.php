<?php
require __DIR__ . '/../vendor/autoload.php'; 

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../'); 
$dotenv->load();

define("SMTP_HOST", $_ENV['SMTP_HOST']);
define("SMTP_PORT", $_ENV['SMTP_PORT']);
define("SMTP_USER", $_ENV['SMTP_USER']);
define("SMTP_PASS", $_ENV['SMTP_PASS']);