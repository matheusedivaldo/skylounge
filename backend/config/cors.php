<?php

$frontendUrl = env('FRONTEND_URL', 'http://localhost:5173');
$parsed = parse_url($frontendUrl);
$scheme = $parsed['scheme'] ?? 'https';
$host = $parsed['host'] ?? 'localhost';
$withoutWww = preg_replace('/^www\./', '', $host);
$withWww = 'www.' . $withoutWww;

return [

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        "{$scheme}://{$withoutWww}",
        "{$scheme}://{$withWww}",
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];