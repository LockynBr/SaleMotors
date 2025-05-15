<?php

function formatarTelefone($telefone)
{
    $telefoneNumerico = preg_replace('/\D/', '', $telefone);

    if (strlen($telefoneNumerico) === 11) {
        return preg_replace('/(\d{2})(\d{5})(\d{4})/', '($1) $2-$3', $telefoneNumerico);
    } elseif (strlen($telefoneNumerico) === 10) {
        return preg_replace('/(\d{2})(\d{4})(\d{4})/', '($1) $2-$3', $telefoneNumerico);
    }

    return $telefone;
}