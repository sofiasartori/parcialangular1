<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require_once 'AccesoDatos.php';
require_once 'heladoApi.php';
include_once 'helado.php';
require_once 'MWparaCORS.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
$app = new \Slim\App(["settings" => $config]);
$app->group('/helados', function () {

  $this->get('/', \HeladoApi::class . ':traerTodos');
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->run();
?>
