<?php
require_once ('AccesoDatos.php');
class Helado
{

    public function traerTodosHelados(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM helados.helado");
		$consulta->execute();
	}
}
