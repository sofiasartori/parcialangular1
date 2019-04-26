<?php
require ('helado.php');
require ('IApiUsable.php');

class heladoApi extends Helado implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Helado::traerTodosHelados();
    }
}
?>
