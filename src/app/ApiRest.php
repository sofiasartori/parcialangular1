<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require 'helado.php';
require 'AccesoDatos.php';
require 'heladoApi.php';

$app->group('/helados', function () {

  $this->get('/', \HeladoApi::class . ':traerTodos');
});

$app->run();
?>
